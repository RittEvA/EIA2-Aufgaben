var Endabgabe;
(function (Endabgabe) {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://eia2-rittevaa.herokuapp.com";
    function insert() {
        let query = "command=insert";
        query += "&name=" + Endabgabe.spielerName;
        query += "&score=" + Endabgabe.punkte;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    Endabgabe.insert = insert;
    function refresh() {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    Endabgabe.refresh = refresh;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback); //wartet auf Antwort
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let Spieler = JSON.parse(xhr.response);
            for (let i = 0; i < Spieler.length; i++) {
                Spieler.sort(Vergleichen);
            }
            let text = ``;
            for (let i = 0; i < 5; i++) {
                text += `<p>${Spieler[i].name}: ${Spieler[i].score}</p>`;
            }
            document.getElementById("BestenListe").innerHTML += text;
        }
    }
    function Vergleichen(_a, _b) {
        let highA = _a.score;
        let highB = _b.score;
        if (highA < highB) {
            return 1;
        }
        if (highA > highB) {
            return -1;
        }
        return 0;
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=DBClient.js.map