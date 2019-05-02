/*
Aufgabe: Mau Mau, Aufgabe2
Name: Eva Ritt
Matrikel: 261414
Datum: 07.04.2019

Code wurde in Zusammenarbeit mit Iven Otis Sieglen geschrieben
*/
namespace MauMau{
interface Karte{
    name:string;
    wert:string;
    farbe:string;
    symbol:string;
}
let herzDame:Karte={
    name:'D',
    wert:'./style/12Dame.png',
    farbe:'rot',
    symbol:'♥',
}
let karoDame:Karte={
    name:'D',
    wert:'./style/12Dame.png',
    farbe:'rot',
    symbol:'♦',
}
let kreuzDame:Karte={
    name:'D',
    wert:'./style/12Dame.png',
    farbe:'schwarz',
    symbol:'♣',
}
let blattDame:Karte={
    name:'D',
    wert:'./style/12Dame.png',
    farbe:'schwarz',
    symbol:'♠',
}
let herzBube:Karte={
    name:'B',
    wert: './style/11Bube.png',
    farbe:'rot',
    symbol:'♥',
}
let karoBube:Karte={
    name:'B',
    wert: './style/11Bube.png',
    farbe:'rot',
    symbol:'♦',
}
let kreuzBube:Karte={
    name:'B',
    wert: './style/11Bube.png',
    farbe:'schwarz',
    symbol:'♣',
}
let blattBube:Karte={
    name:'B',
    wert: './style/11Bube.png',
    farbe:'schwarz',
    symbol:'♠',
}
let herzKönig:Karte={
    name:'K',
    wert: './style/13König.png',
    farbe:'rot',
    symbol:'♥',
}
let karoKönig:Karte={
    name:'K',
    wert: './style/13König.png',
    farbe:'rot',
    symbol:'♦',
}
let kreuzKönig:Karte={
    name:'K',
    wert: './style/13König.png',
    farbe:'schwarz',
    symbol:'♣',
}
let blattKönig:Karte={
    name:'K',
    wert: './style/13König.png',
    farbe:'schwarz',
    symbol:'♠',
}
let herzAss:Karte={
    name:'A',
    wert: './style/14Ass.png',
    farbe:'rot',
    symbol:'♥',
}
let karoAss:Karte={
    name:'A',
    wert:'./style/14Ass.png',
    farbe:'rot',
    symbol:'♦',
}
let kreuzAss:Karte={
    name:'A',
    wert:'./style/14Ass.png',
    farbe:'schwarz',
    symbol:'♣',
}
let blattAss:Karte={
    name:'A',
    wert:'./style/14Ass.png',
    farbe:'schwarz',
    symbol:'♠',
}
let herzZehn:Karte={
    name:'10',
    wert:'./style/10Krake.png',
    farbe:'rot',
    symbol:'♥',
}
let karoZehn:Karte={
    name:'10',
    wert:'./style/10Krake.png',
    farbe:'rot',
    symbol:'♦'
}
let kreuzZehn:Karte={
    name:'10',
    wert:'./style/10Krake.png',
    farbe:'schwarz',
    symbol:'♣',
}
let blattZehn:Karte={
    name:'10',
    wert:'./style/10Krake.png',
    farbe:'schwarz',
    symbol:'♠',
}
let herzNeun:Karte={
    name:'9',
    wert:'./style/9Krake.png',
    farbe:'rot',
    symbol:'♥',
}
let karoNeun:Karte={
    name:'9',
    wert:'./style/9Krake.png',
    farbe:'rot',
    symbol:'♦',
}
let kreuzNeun:Karte={
    name:'9',
    wert:'./style/9Krake.png',
    farbe:'schwarz',
    symbol:'♣',
}
let blattNeun:Karte={
    name:'9',
    wert:'./style/9Krake.png',
    farbe:'schwarz',
    symbol:'♠',
}
let herzAcht:Karte={
    name:'8',
    wert:'./style/8Krake.png',
    farbe:'rot',
    symbol:'♥',
}
let karoAcht:Karte={
    name:'8',
    wert:'./style/8Krake.png',
    farbe:'rot',
    symbol:'♦',
}
let kreuzAcht:Karte={
    name:'8',
    wert:'./style/8Krake.png',
    farbe:'schwarz',
    symbol:'♣',
}
let blattAcht:Karte={
    name:'8',
    wert:'./style/8Krake.png',
    farbe:'schwarz',
    symbol:'♠',
}
let herzSieben:Karte={
    name:'7',
    wert:'./style/7Krake.png',
    farbe:'rot',
    symbol:'♥',
}
let karoSieben:Karte={
    name:'7',
    wert:'./style/7Krake.png',
    farbe:'rot',
    symbol:'♦',
}
let kreuzSieben:Karte={
    name:'7',
    wert:'./style/7Krake.png',
    farbe:'schwarz',
    symbol:'♣',
}
let blattSieben:Karte={
    name:'7',
    wert:'./style/7Krake.png',
    farbe:'schwarz',
    symbol:'♠',
}

let deck:Karte[]=[herzAcht,herzAss,herzBube,herzDame,herzKönig,herzNeun,herzSieben,herzZehn,karoAcht,karoAss,karoBube,karoDame,karoKönig,karoNeun,karoSieben,karoZehn,kreuzAcht,kreuzAss,kreuzBube,kreuzDame,kreuzKönig,kreuzNeun,kreuzSieben,kreuzZehn,blattAcht,blattAss,blattBube,blattDame,blattKönig,blattNeun,blattSieben,blattZehn]
let handkarten:Karte[]=[]

let anzahlKarten:number=0;
let irgZahl:number;

function wieVieleKarten(anzahlKarten:number):void{
    if(anzahlKarten==0){
        do {
            anzahlKarten=parseInt(prompt("Mit wie viele Karten möchtest du spielen?", "..."));
        }while (isNaN(anzahlKarten)|| anzahlKarten>=1 || anzahlKarten<32);
    }   
    irgendEineZahl(anzahlKarten); 
    
}
function irgendEineZahl(_anzahlKarten:number):void{
    for(let e:number=0;_anzahlKarten>e;_anzahlKarten--){
        anzahl();
        handkarten.push(deck.splice(irgZahl, 1)[0]);
        console.log(handkarten);
    }
    bauKarte();

}
function anzahl():number{
    let max=deck.length;
    irgZahl = Math.floor(Math.random()*Math.floor(max));
    return irgZahl;
}


function bauKarte():void{
    let n:number=0;
    while(n < handkarten.length){
        aufbauen('Hand',handkarten[n]);
        n++;
    }
}
function aufbauen(_html:string, _eineKarte:Karte):void{
    let _Karte=document.createElement('div');
    let div=`<div class="Karte">
            <p class="${_eineKarte.farbe}">${_eineKarte.symbol}</p>
            <img class="Bild" src="${_eineKarte.wert}"></img>
            <p class="${_eineKarte.farbe}">${_eineKarte.name}</p>
            </div>`;
        _Karte.innerHTML = div;
        document.getElementById(_html).appendChild(_Karte);
}
function init():void{
    wieVieleKarten(anzahlKarten)
}
document.addEventListener('DOMContentLoaded', init);



}

