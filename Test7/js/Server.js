"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); //erstellen eines Http-Objekts, damit Interpreterer nach jedmöglichem import, um es dem http-objekt anzuhängen
const Url = require("url");
var EisDealer;
(function (EisDealer) {
    console.log("Starting server"); //'Start server' soll in der Console ausgegeben werden
    let port = Number(process.env.PORT); //eine Variable des Type number ist ein string der in eine number umgewandelt wird, damit der Server weis auf welchen Listener er hören soll
    if (!port) //wenn es nicht die angegebene Variable Port ist soll folgendender Port verwendet werden
        port = 8100; //die Variable Port wird überschrieben
    let server = Http.createServer(); //eine Variable mit dem Typen http-server wird erstellt und diese baut einen Server als http
    server.addListener("request", handleRequest); //ein Listener wird auf dem server erstellt und die 'handleRequest'-Funktion wird ausgeführt wenn etwas angefordert wird
    server.addListener("listening", handleListen); //ein Listener wird auf der Variable server erstellt, welcher die Funktion 'handleListen' aufruft wenn zugehört wird
    server.listen(port); //die Variable server soll auf die Variable port hören
    function handleListen() {
        console.log("Listening"); //die Funktion schreibt, wenn der Server zuhört 'Listening' in die Console
    } //wird geschlossen
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //wenn die Funktion durch läuft wird 'Ihear voices!' in die Console geschrieben
        _response.setHeader("content-type", "text/html; charset=utf-8"); //der header wird in _response geschrieben egal ob er schon vorhanden ist oder nicht (Name, Wert)
        _response.setHeader("Access-Control-Allow-Origin", "*"); //der header wird in _response geschrieben egal ob er schon vorhanden ist oder nicht (Name, Wert)
        _response.write("<h4>Ihre Bestellung wurde an den Server übergeben</h4>");
        let url = Url.parse(_request.url, true);
        for (let key in url.query) {
            _response.write("<p>" + key + ": " + url.query[key] + "</p>");
            //let jsonString: string = JSON.stringify(url.query);
            //_response.write(jsonString);
        }
        _response.end(); //schließt _response ab und signalisiert dem Server vollständing zu sein
    } //Funktion ist fertig
})(EisDealer || (EisDealer = {})); //namespace schließen
//# sourceMappingURL=Server.js.map