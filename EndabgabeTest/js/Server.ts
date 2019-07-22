


import * as Http from "http";
import * as Url from "url";
import * as Database from "./Database";

console.log("Server starting");

let port: number = Number(process.env.PORT);
if (!port)
    port = 8100;

let server: Http.Server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);



function handleListen(): void {
    console.log("Listening on port: " + port);
}

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("Request received");

    let query: HighScore = <HighScore> Url.parse(_request.url, true).query;
    let command: string = query["command"];

    switch (command) {
        case "insert":
            let player: ScoreData = {
                name: query["name"],
                score: parseInt(query["score"]),
            };
            Database.insert(player);
            respond(_response, "storing data");
            break;
        case "refresh":
            Database.findAll(findCallback);
            break;
        //case "search":
            //let matNumber:ScoreData={
            //    matrikel:parseInt(query["matrikel"])
            //}
           // Database.searchMat(matNumber, findCallback);
            //break;
        default:
            respond(_response, "unknown command: " + command);
            break;
    }

    // findCallback is an inner function so that _response is in scope
    function findCallback(json: string): void {
        respond(_response, json);
    }
}

function respond(_response: Http.ServerResponse, _text: string): void {
    //console.log("Preparing response: " + _text);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write(_text);
    _response.end();
}
