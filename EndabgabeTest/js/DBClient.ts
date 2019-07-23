namespace Endabgabe {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress: string = "https://eia2-rittevaa.herokuapp.com";


    export function insert(): void {//schreibt den Teilquery für den Server
        let query: string = "command=insert";
        query += "&name=" + spielerName;
        query += "&score=" + punkte;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    export function refresh(): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {//schreibt Query fertig und schickt ihn ab
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);//wartet auf Antwort
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {//Antwort das die Daten gespeichert werden
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    
    function handleFindResponse(_event: ProgressEvent): void {//um den Score anzuzeigen
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let Spieler: ScoreData[] = JSON.parse(xhr.response);
            for (let i: number = 0; i < Spieler.length; i++) {
                Spieler.sort(Vergleichen);
            }
            let text: string=``;
            for (let i: number = 0; i < 5; i++) {
                text += `<p>${Spieler[i].name}: ${Spieler[i].score}</p>`;
                
            }
            document.getElementById("BestenListe").innerHTML += text;
        }



    }

    function Vergleichen(_a: ScoreData, _b: ScoreData) {
        let highA: number = _a.score;
        let highB: number = _b.score;
        if (highA < highB) {
            return 1;
        }
        if (highA > highB) {
            return -1;
        }
        return 0;
    }

}