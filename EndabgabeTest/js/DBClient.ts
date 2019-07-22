namespace Endabgabe {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress: string = "https://eia2-rittevaa.herokuapp.com";


    export function insert(): void {
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

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
    function search(_event: Event): void {
        let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=search";
        query += "&matrikel=" + inputs[3].value;
        console.log(query);
        sendRequest(query, handleFindResponse);
    }
}