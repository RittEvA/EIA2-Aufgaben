interface Karte{
    wert:string;
    farbe:number;
}
let herzDame:Karte={
    wert:'dame',
    farbe:1,
}
let karoDame:Karte={
    wert:'dame',
    farbe:2,
}
let kreuzDame:Karte={
    wert:'dame',
    farbe:3,
}
let blattDame:Karte={
    wert:'dame',
    farbe:4,
}
let herzBube:Karte={
    wert: 'bube',
    farbe:1,
}
let karoBube:Karte={
    wert: 'bube',
    farbe:2,
}
let kreuzBube:Karte={
    wert: 'bube',
    farbe:3,
}
let blattBube:Karte={
    wert: 'bube',
    farbe:4,
}
let herzKönig:Karte={
    wert: 'könig',
    farbe:1,
}
let karoKönig:Karte={
    wert: 'könig',
    farbe:2,
}
let kreuzKönig:Karte={
    wert: 'könig',
    farbe:3,
}
let blattKönig:Karte={
    wert: 'könig',
    farbe:4,
}
let herzAss:Karte={
    wert: 'ass',
    farbe:1
}
let karoAss:Karte={
    wert:'ass',
    farbe:2,
}
let kreuzAss:Karte={
    wert:'ass',
    farbe:3,
}
let blattAss:Karte={
    wert:'ass',
    farbe:4,
}
let herzZehn:Karte={
    wert:'zehn',
    farbe:1,
}
let karoZehn:Karte={
    wert:'zehn',
    farbe:2,
}
let kreuzZehn:Karte={
    wert:'zehn',
    farbe:3,
}
let blattZehn:Karte={
    wert:'zehn',
    farbe:4,
}
let herzNeun:Karte={
    wert:'neun',
    farbe:1,
}
let karoNeun:Karte={
    wert:'neun',
    farbe:2,
}
let kreuzNeun:Karte={
    wert:'neun',
    farbe:3,
}
let blattNeun:Karte={
    wert:'neun',
    farbe:4,
}
let herzAcht:Karte={
    wert:'acht',
    farbe:1,
}
let karoAcht:Karte={
    wert:'acht',
    farbe:2,
}
let kreuzAcht:Karte={
    wert:'acht',
    farbe:3,
}
let blattAcht:Karte={
    wert:'acht',
    farbe:4,
}
let herzSieben:Karte={
    wert:'sieben',
    farbe:1,
}
let karoSieben:Karte={
    wert:'sieben',
    farbe:2,
}
let kreuzSieben:Karte={
    wert:'sieben',
    farbe:3,
}
let blattSieben:Karte={
    wert:'sieben',
    farbe:4,
}

let Deck:Karte[]=[herzAcht,herzAss,herzBube,herzDame,herzKönig,herzNeun,herzSieben,herzZehn,karoAcht,karoAss,karoBube,karoDame,karoKönig,karoNeun,karoSieben,karoZehn,kreuzAcht,kreuzAss,kreuzBube,kreuzDame,kreuzKönig,kreuzNeun,kreuzSieben,kreuzZehn,blattAcht,blattAss,blattBube,blattDame,blattKönig,blattNeun,blattSieben,blattZehn]
let Handkarten:Karte[]=[]

let anzahlKarten:number=0;

function wieVieleKarten():number{
    if(anzahlKarten==0){
        let wieVieleGenau:number=parseInt(prompt("Wie viele Karten möchtest du spielen?", "..."));
        do {
            anzahlKarten=wieVielGenau;
        }
    
}

function vonDeckInHand(_j:number){
    document.getElementById("Hand")
    let prodElement = document.createElement('article');
}