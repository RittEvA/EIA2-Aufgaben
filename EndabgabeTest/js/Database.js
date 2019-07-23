"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongo = require("mongodb");
console.log("Database starting");
let databaseURL = "mongodb://localhost:27017";
let databaseName = "Test";
let db;
let player;
// Läuft es auf heroku?
if (process.env.NODE_ENV == "production") {
    // databaseURL = "mongodb+srv://username:password@hostname:port/database";
    databaseURL = "mongodb+srv://dannsair:Eia2Kunst4@cluster0-1bzll.mongodb.net/test?retryWrites=true";
    databaseName = "eia2";
}
//versucht Verbindung zur Dantenbank aufzubauen und aktiviert dann handleConnect
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);
//erhält zwei Standardparameter (error object, database client object)
function handleConnect(_e, _client) {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        player = db.collection("HighScore");
    }
}
function insert(_doc) {
    // hinzufügen und aktivieren der handleInsert
    player.insertOne(_doc, handleInsert);
}
exports.insert = insert;
//erhält ein error object in Form eines Standardparameters
function handleInsert(_e) {
    console.log("Database insertion returned -> " + _e);
}
//holt alle Documente der Datenbank und aktiviert callback
function findAll(_callback) {
    // cursor zeigt auf eine abrufbaren Satz von Documenten im Speicher
    let cursor = player.find();
    //versuch alles in ein Arry zu converieren und prepAnswer auslösen
    cursor.toArray(prepareAnswer);
    //toArray-handler erhält zwei standardmäßige Parameter(error object, Array)
    //ist als inner function eingebaut, _callback ist im Geltungsbereich
    function prepareAnswer(_e, spielerArray) {
        if (_e)
            _callback("Error" + _e);
        else
            //stringify baut einen JSON-string, der an _callback zurückgegeben wird
            _callback(JSON.stringify(spielerArray));
    }
}
exports.findAll = findAll;
//# sourceMappingURL=Database.js.map