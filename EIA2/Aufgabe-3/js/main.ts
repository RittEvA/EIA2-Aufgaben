/*
Aufgabe: Mau Mau, Aufgabe2
Name: Eva Ritt
Matrikel: 261414
Datum: 11.04.2019

Code wurde in Zusammenarbeit mit Iven Otis Sieglen geschrieben
*/
namespace MauMau{
interface Karte{
    name:number;
    wert:string;
    farbe:string;
    symbol:string;
}
let herzDame:Karte={
    name:5,
    wert:'./style/12Dame.png',
    farbe:'rot',
    symbol:'D♥',
}
let karoDame:Karte={
    name:13,
    wert:'./style/12Dame.png',
    farbe:'rot',
    symbol:'D♦',
}
let kreuzDame:Karte={
    name:21,
    wert:'./style/12Dame.png',
    farbe:'schwarz',
    symbol:'D♣',
}
let blattDame:Karte={
    name:29,
    wert:'./style/12Dame.png',
    farbe:'schwarz',
    symbol:'D♠' ,
}
let herzBube:Karte={
    name:4,
    wert: './style/11Bube.png',
    farbe:'rot',
    symbol:'B♥',
}
let karoBube:Karte={
    name:12,
    wert: './style/11Bube.png',
    farbe:'rot',
    symbol:'B♦',
}
let kreuzBube:Karte={
    name:20,
    wert: './style/11Bube.png',
    farbe:'schwarz',
    symbol:'B♣',
}
let blattBube:Karte={
    name:28,
    wert: './style/11Bube.png',
    farbe:'schwarz',
    symbol:'B♠',
}
let herzKönig:Karte={
    name:6,
    wert: './style/13König.png',
    farbe:'rot',
    symbol:'K♥',
}
let karoKönig:Karte={
    name:14,
    wert: './style/13König.png',
    farbe:'rot',
    symbol:'K♦',
}
let kreuzKönig:Karte={
    name:22,
    wert: './style/13König.png',
    farbe:'schwarz',
    symbol:'K♣',
}
let blattKönig:Karte={
    name:30,
    wert: './style/13König.png',
    farbe:'schwarz',
    symbol:'K♠',
}
let herzAss:Karte={
    name:7,
    wert: './style/14Ass.png',
    farbe:'rot',
    symbol:'A♥',
}
let karoAss:Karte={
    name:15,
    wert:'./style/14Ass.png',
    farbe:'rot',
    symbol:'A♦',
}
let kreuzAss:Karte={
    name:23,
    wert:'./style/14Ass.png',
    farbe:'schwarz',
    symbol:'A♣',
}
let blattAss:Karte={
    name:31,
    wert:'./style/14Ass.png',
    farbe:'schwarz',
    symbol:'A♠',
}
let herzZehn:Karte={
    name:3,
    wert:'./style/10Krake.png',
    farbe:'rot',
    symbol:'10♥',
}
let karoZehn:Karte={
    name:11,
    wert:'./style/10Krake.png',
    farbe:'rot',
    symbol:'10♦'
}
let kreuzZehn:Karte={
    name:19,
    wert:'./style/10Krake.png',
    farbe:'schwarz',
    symbol:'10♣',
}
let blattZehn:Karte={
    name:27,
    wert:'./style/10Krake.png',
    farbe:'schwarz',
    symbol:'10♠',
}
let herzNeun:Karte={
    name:2,
    wert:'./style/9Krake.png',
    farbe:'rot',
    symbol:'9♥',
}
let karoNeun:Karte={
    name:10,
    wert:'./style/9Krake.png',
    farbe:'rot',
    symbol:'9♦',
}
let kreuzNeun:Karte={
    name:18,
    wert:'./style/9Krake.png',
    farbe:'schwarz',
    symbol:'9♣',
}
let blattNeun:Karte={
    name:26,
    wert:'./style/9Krake.png',
    farbe:'schwarz',
    symbol:'9♠',
}
let herzAcht:Karte={
    name:1,
    wert:'./style/8Krake.png',
    farbe:'rot',
    symbol:'8♥',
}
let karoAcht:Karte={
    name:9,
    wert:'./style/8Krake.png',
    farbe:'rot',
    symbol:'8♦',
}
let kreuzAcht:Karte={
    name:17,
    wert:'./style/8Krake.png',
    farbe:'schwarz',
    symbol:'8♣',
}
let blattAcht:Karte={
    name:25,
    wert:'./style/8Krake.png',
    farbe:'schwarz',
    symbol:'8♠',
}
let herzSieben:Karte={
    name:0,
    wert:'./style/7Krake.png',
    farbe:'rot',
    symbol:'7♥',
}
let karoSieben:Karte={
    name:8,
    wert:'./style/7Krake.png',
    farbe:'rot',
    symbol:'7♦',
}
let kreuzSieben:Karte={
    name:16,
    wert:'./style/7Krake.png',
    farbe:'schwarz',
    symbol:'7♣',
}
let blattSieben:Karte={
    name:24,
    wert:'./style/7Krake.png',
    farbe:'schwarz',
    symbol:'7♠',
}
//Arrays
let deck:Karte[]=[herzAcht,herzAss,herzBube,herzDame,herzKönig,herzNeun,herzSieben,herzZehn,karoAcht,karoAss,karoBube,karoDame,karoKönig,karoNeun,karoSieben,karoZehn,kreuzAcht,kreuzAss,kreuzBube,kreuzDame,kreuzKönig,kreuzNeun,kreuzSieben,kreuzZehn,blattAcht,blattAss,blattBube,blattDame,blattKönig,blattNeun,blattSieben,blattZehn]
let handkarten:Karte[]=[]
let gespielt:Karte[]=[]

//Variablen
let anzahlKarten:number=0;
let irgZahl:number; //freie Zahl um eine wahllose Karte zu bauen

//Eventlistener aktivieren
document.getElementById('Hand').addEventListener('click', karteLegen);
document.getElementById('Talon').addEventListener('click', karteZiehen);
document.addEventListener('keydown', event=>{
        if(event.keyCode==32){
            karteZiehen();
        }
        else{return;}
    });
document.getElementById('SortButton').addEventListener('click', sortieren);


//fragt wie viele Karten man haben möchte
    if(anzahlKarten==0){
        do {
            anzahlKarten=parseInt(prompt("Mit wie viele Karten möchtest du spielen?", "..."));
        }while (isNaN(anzahlKarten) && anzahlKarten>0 && anzahlKarten<32) ;
    }   
    irgendEineZahl(anzahlKarten); 
    
//wählt eine Zahl und gibt es an bauKarte weiter
function irgendEineZahl(_anzahlKarten:number):void{
    for(let e:number=0;_anzahlKarten>e;_anzahlKarten--){
        anzahl();
        handkarten.push(deck.splice(irgZahl, 1)[0]);
        console.log(handkarten);
    }
    bauKarte();
}

//nimmmt irgendeine Zahl aus der Länge des Decks
function anzahl():number{
    let max=deck.length;
    irgZahl = Math.floor(Math.random()*Math.floor(max));
    return irgZahl;
}

//gibt anweisung wie oft eine Karte gebaut wird
function bauKarte():void{
    let n:number=0;
    while(n < handkarten.length){
        aufbauen('Hand',handkarten[n]);
        n++;
    }
}

//baut die Karte
function aufbauen(_html:string, _eineKarte:Karte):void{
    let _Karte=document.createElement('div');
    let div=`<div class="Karte" id=${_eineKarte.name}>
            <p class="${_eineKarte.farbe}">${_eineKarte.symbol}</p>
            <img class="Bild" src="${_eineKarte.wert}"></img>
            </div>`;
        _Karte.innerHTML = div;
        document.getElementById(_html).appendChild(_Karte);
}

//eine Karte von Deck in Handkarten
function karteZiehen():void{
    if(deck.length>0){
    anzahl();
    handkarten.push(deck.splice(irgZahl, 1)[0]);
    console.log(handkarten);
    let n:number=handkarten.length-1;
    aufbauen('Hand',handkarten[n]);
    }
    else{console.log('Es sind keine Karten auf dem Nachziehstapel vorhanden!')
    alert('Es sind keine Karten auf dem Nachziehstapel vorhanden!');
    }
}

function loeschen():void{
let clear: HTMLElement = document.getElementById("Hand");
    clear.innerHTML = "";}

//sortiert die Karten nach .name
function sortieren():void{
    loeschen();
    handkarten.sort(function(a,b){
        let nameA = a.name;
        let nameB = b.name;
        if(nameA<nameB){
            return -1;
        }
        if(nameA>nameB){
            return 1;
        }
        //muss dann nameA==nameB
        return 0;
    })
    bauKarte();
}

//Karte von der Hand auf den Ablegestapel
function karteLegen(event:Event):void{
    let legKarte: HTMLElement = <HTMLElement>event.target;
    for (let e:number = 0; e < handkarten.length; e++) {
        if (Number(legKarte.getAttribute("id")) == handkarten[e].name) {
            gespielt.push(handkarten.splice(e, 1)[0])
            let r:number=gespielt.length;
            anzeigeLegKarte('Ablagestapel',gespielt[r-1]);
        }
    }
}

//baut Karte auf dem Ablagestapel auf
function anzeigeLegKarte(_htmlID:string, _gelegteKarte:Karte):void{
    document.getElementById(_htmlID).innerHTML="";
    let karteFertig=document.createElement('div');
    let div =`<div class="Karte" id=${_gelegteKarte.name}>
        <p class="${_gelegteKarte.farbe}">${_gelegteKarte.symbol}</p>
        <img class="Bild" src="${_gelegteKarte.wert}"></img>
        </div>`;
    karteFertig.innerHTML=div;
    document.getElementById(_htmlID).appendChild(karteFertig);
    loeschen();
    var audio = new Audio('./style/Ablegen.mp3');
    audio.play();
    bauKarte();
    
    }

}