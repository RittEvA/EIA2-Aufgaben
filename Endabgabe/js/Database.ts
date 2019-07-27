
import * as Mongo from "mongodb";
console.log("Database starting");

let databaseURL: string = "mongodb://localhost:27017";
let databaseName: string = "Test";
let db: Mongo.Db;
let player: Mongo.Collection;

// Läuft es auf heroku?
if (process.env.NODE_ENV == "production") {
    // databaseURL = "mongodb+srv://username:password@hostname:port/database";
    databaseURL = "mongodb+srv://dannsair:Eia2Kunst4@cluster0-1bzll.mongodb.net/test?retryWrites=true";
    databaseName = "eia2";
}

//versucht Verbindung zur Dantenbank aufzubauen und aktiviert dann handleConnect
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);

//erhält zwei Standardparameter (error object, database client object)
function handleConnect(_e: Mongo.MongoError, _client: Mongo.MongoClient): void {
    if (_e){
        console.log("Unable to connect to database, error: ", _e);
    }
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        player = db.collection("HighScore");
    }
}

export function insert(_doc: ScoreData): void {
    // hinzufügen und aktivieren der handleInsert
    player.insertOne(_doc, handleInsert);
}

//erhält ein error object in Form eines Standardparameters
function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}

//holt alle Documente der Datenbank und aktiviert callback
export function findAll(_callback: Function): void {
    // cursor zeigt auf eine abrufbaren Satz von Documenten im Speicher
    let cursor: Mongo.Cursor = player.find();
    //versuch alles in ein Arry zu converieren und prepAnswer auslösen
    cursor.toArray(prepareAnswer);

    //toArray-handler erhält zwei standardmäßige Parameter(error object, Array)
    //ist als inner function eingebaut, _callback ist im Geltungsbereich
    function prepareAnswer(_e: Mongo.MongoError, spielerArray: HighScore[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            //stringify baut einen JSON-string, der an _callback zurückgegeben wird
            _callback(JSON.stringify(spielerArray));
    }
}

