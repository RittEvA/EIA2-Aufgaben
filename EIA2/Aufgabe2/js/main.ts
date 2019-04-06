/*
Aufgabe: Mau Mau, Aufgabe2
Name: Eva Ritt
Matrikel: 261414
Datum: 07.04.2019

Code wurde in Zusammenarbeit mit Iven Otis Sieglen geschrieben
*/

interface Karte{
    wert:string;
    farbe:string;
    symbol:string;
}
let herzDame:Karte={
    wert:'./style/12Dame.png',
    farbe:'rot',
    symbol:'♥',
}
let karoDame:Karte={
    wert:'./style/12Dame.png',
    farbe:'rot',
    symbol:'♦',
}
let kreuzDame:Karte={
    wert:'./style/12Dame.png',
    farbe:'schwarz',
    symbol:'♣',
}
let blattDame:Karte={
    wert:'./style/12Dame.png',
    farbe:'schwarz',
    symbol:'♠',
}
let herzBube:Karte={
    wert: './style/11Bube.png',
    farbe:'rot',
    symbol:'♥',
}
let karoBube:Karte={
    wert: './style/11Bube.png',
    farbe:'rot',
    symbol:'♦',
}
let kreuzBube:Karte={
    wert: './style/11Bube.png',
    farbe:'schwarz',
    symbol:'♣',
}
let blattBube:Karte={
    wert: './style/11Bube.png',
    farbe:'schwarz',
    symbol:'♠',
}
let herzKönig:Karte={
    wert: './style/13König.png',
    farbe:'rot',
    symbol:'♥',
}
let karoKönig:Karte={
    wert: './style/13König.png',
    farbe:'rot',
    symbol:'♦',
}
let kreuzKönig:Karte={
    wert: './style/13König.png',
    farbe:'schwarz',
    symbol:'♣',
}
let blattKönig:Karte={
    wert: './style/13König.png',
    farbe:'schwarz',
    symbol:'♠',
}
let herzAss:Karte={
    wert: './style/14Ass.png',
    farbe:'rot',
    symbol:'♥',
}
let karoAss:Karte={
    wert:'./style/14Ass.png',
    farbe:'rot',
    symbol:'♦',
}
let kreuzAss:Karte={
    wert:'./style/14Ass.png',
    farbe:'schwarz',
    symbol:'♣',
}
let blattAss:Karte={
    wert:'./style/14Ass.png',
    farbe:'schwarz',
    symbol:'♠',
}
let herzZehn:Karte={
    wert:'./style/10Krake.png',
    farbe:'rot',
    symbol:'♥',
}
let karoZehn:Karte={
    wert:'./style/10Krake.png',
    farbe:'rot',
    symbol:'♦'
}
let kreuzZehn:Karte={
    wert:'./style/10Krake.png',
    farbe:'schwarz',
    symbol:'♣',
}
let blattZehn:Karte={
    wert:'./style/10Krake.png',
    farbe:'schwarz',
    symbol:'♠',
}
let herzNeun:Karte={
    wert:'./style/9Krake.png',
    farbe:'rot',
    symbol:'♥',
}
let karoNeun:Karte={
    wert:'./style/9Krake.png',
    farbe:'rot',
    symbol:'♦',
}
let kreuzNeun:Karte={
    wert:'./style/9Krake.png',
    farbe:'schwarz',
    symbol:'♣',
}
let blattNeun:Karte={
    wert:'./style/9Krake.png',
    farbe:'schwarz',
    symbol:'♠',
}
let herzAcht:Karte={
    wert:'./style/8Krake.png',
    farbe:'rot',
    symbol:'♥',
}
let karoAcht:Karte={
    wert:'./style/8Krake.png',
    farbe:'rot',
    symbol:'♦',
}
let kreuzAcht:Karte={
    wert:'./style/8Krake.png',
    farbe:'schwarz',
    symbol:'♣',
}
let blattAcht:Karte={
    wert:'./style/8Krake.png',
    farbe:'schwarz',
    symbol:'♠',
}
let herzSieben:Karte={
    wert:'./style/7Krake.png',
    farbe:'rot',
    symbol:'♥',
}
let karoSieben:Karte={
    wert:'./style/7Krake.png',
    farbe:'rot',
    symbol:'♦',
}
let kreuzSieben:Karte={
    wert:'./style/7Krake.png',
    farbe:'schwarz',
    symbol:'♣',
}
let blattSieben:Karte={
    wert:'./style/7Krake.png',
    farbe:'schwarz',
    symbol:'♠',
}

let Deck:Karte[]=[herzAcht,herzAss,herzBube,herzDame,herzKönig,herzNeun,herzSieben,herzZehn,karoAcht,karoAss,karoBube,karoDame,karoKönig,karoNeun,karoSieben,karoZehn,kreuzAcht,kreuzAss,kreuzBube,kreuzDame,kreuzKönig,kreuzNeun,kreuzSieben,kreuzZehn,blattAcht,blattAss,blattBube,blattDame,blattKönig,blattNeun,blattSieben,blattZehn]
let Handkarten:Karte[]=[]

let anzahlKarten:number=0;
let irgZahl:number;

function wieVieleKarten(anzahlKarten:number):void{
    if(anzahlKarten==0){
        do {
            anzahlKarten=parseInt(prompt("Mit wie viele Karten möchtest du spielen?", "..."));
        }while (anzahlKarten==0|| anzahlKarten<1 || anzahlKarten>32);
    }   
    irgendEineZahl(anzahlKarten); 
    
}
function irgendEineZahl(_anzahlKarten:number){
    for(let e:number=0;_anzahlKarten>e;_anzahlKarten--){
        anzahl(irgZahl, _anzahlKarten);
        Handkarten.push(Deck.splice(irgZahl, 1)[0]);
        console.log(Handkarten);
    }
    bauKarte();

}
function anzahl(_s:number,_t:number):number{
    let max=Deck.length;
    _s = Math.floor(Math.random()*Math.floor(max));
    return irgZahl= _s;
}


function bauKarte():void{
    let n:number=0;
    while(n < Handkarten.length){
        aufbauen('Hand',Handkarten[n]);
        n++;
    }
}
function aufbauen(html:string, _eineKarte:Karte){
    let _Karte=document.createElement('div');
    let div=`<div class="Karte">
            <p class="${_eineKarte.farbe}">${_eineKarte.symbol}</p>
            <img class="Bild" src="${_eineKarte.wert}"></img>
            </div>`;
        _Karte.innerHTML = div;
        document.getElementById(html).appendChild(_Karte);
}
function init(){
    wieVieleKarten(anzahlKarten)
}
document.addEventListener('DOMContentLoaded', init);





