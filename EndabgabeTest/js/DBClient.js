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
        xhr.addEventListener("readystatechange", _callback);
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
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
    function search(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=search";
        query += "&matrikel=" + inputs[3].value;
        console.log(query);
        sendRequest(query, handleFindResponse);
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=DBClient.js.map