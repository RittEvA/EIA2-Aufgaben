import * as Http from "http";//erstellen eines Http-Objekts, damit Interpreterer nach jedmöglichem import, um es dem http-objekt anzuhängen
import * as Url from "url";

namespace L05_Server {//namespace öffnen
	console.log("Starting server");//'Start server' soll in der Console ausgegeben werden
	let port: number = Number(process.env.PORT);//eine Variable des Type number ist ein string der in eine number umgewandelt wird, damit der Server weis auf welchen Listener er hören soll
	if (!port)//wenn es nicht die angegebene Variable Port ist soll folgendender Port verwendet werden
		port = 8100;//die Variable Port wird überschrieben

	let server: Http.Server = Http.createServer();//eine Variable mit dem Typen http-server wird erstellt und diese baut einen Server als http
	server.addListener("request", handleRequest);//ein Listener wird auf dem server erstellt und die 'handleRequest'-Funktion wird ausgeführt wenn etwas angefordert wird
	server.addListener("listening", handleListen);//ein Listener wird auf der Variable server erstellt, welcher die Funktion 'handleListen' aufruft wenn zugehört wird
	server.listen(port);//die Variable server soll auf die Variable port hören

	function handleListen(): void {//der Funktion wird nichts übergeben und sie gibt nichts zurück
		console.log("Listening"); //die Funktion schreibt, wenn der Server zuhört 'Listening' in die Console
	}//wird geschlossen

	function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {//die Funktion empfängt zwei Parameter (request=Anfordern, response=Antwort) und gibt nichts zurück
		console.log("I hear voices!");//wenn die Funktion durch läuft wird 'Ihear voices!' in die Console geschrieben

		_response.setHeader("content-type", "text/html; charset=utf-8");//der header wird in _response geschrieben egal ob er schon vorhanden ist oder nicht (Name, Wert)
		_response.setHeader("Access-Control-Allow-Origin", "*")//der header wird in _response geschrieben egal ob er schon vorhanden ist oder nicht (Name, Wert)

		let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
		for (let key in url.query)
			_response.write(key + ":" + url.query[key] + "<br/>");
		
		_response.end();//schließt _response ab und signalisiert dem Server vollständing zu sein
	}//Funktion ist fertig
}//namespace schließen
