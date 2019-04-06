/*
Aufgabe: Mau Mau, Aufgabe2
Name: Eva Ritt
Matrikel: 261414
Datum: 07.04.2019
*/
let herzDame = {
    wert: './style/12Dame.png',
    farbe: 'rot',
    symbol: '♥',
};
let karoDame = {
    wert: './style/12Dame.png',
    farbe: 'rot',
    symbol: '♦',
};
let kreuzDame = {
    wert: './style/12Dame.png',
    farbe: 'schwarz',
    symbol: '♣',
};
let blattDame = {
    wert: './style/12Dame.png',
    farbe: 'schwarz',
    symbol: '♠',
};
let herzBube = {
    wert: './style/11Bube.png',
    farbe: 'rot',
    symbol: '♥',
};
let karoBube = {
    wert: './style/11Bube.png',
    farbe: 'rot',
    symbol: '♦',
};
let kreuzBube = {
    wert: './style/11Bube.png',
    farbe: 'schwarz',
    symbol: '♣',
};
let blattBube = {
    wert: './style/11Bube.png',
    farbe: 'schwarz',
    symbol: '♠',
};
let herzKönig = {
    wert: './style/13König.png',
    farbe: 'rot',
    symbol: '♥',
};
let karoKönig = {
    wert: './style/13König.png',
    farbe: 'rot',
    symbol: '♦',
};
let kreuzKönig = {
    wert: './style/13König.png',
    farbe: 'schwarz',
    symbol: '♣',
};
let blattKönig = {
    wert: './style/13König.png',
    farbe: 'schwarz',
    symbol: '♠',
};
let herzAss = {
    wert: './style/14Ass.png',
    farbe: 'rot',
    symbol: '♥',
};
let karoAss = {
    wert: './style/14Ass.png',
    farbe: 'rot',
    symbol: '♦',
};
let kreuzAss = {
    wert: './style/14Ass.png',
    farbe: 'schwarz',
    symbol: '♣',
};
let blattAss = {
    wert: './style/14Ass.png',
    farbe: 'schwarz',
    symbol: '♠',
};
let herzZehn = {
    wert: './style/10Krake.png',
    farbe: 'rot',
    symbol: '♥',
};
let karoZehn = {
    wert: './style/10Krake.png',
    farbe: 'rot',
    symbol: '♦'
};
let kreuzZehn = {
    wert: './style/10Krake.png',
    farbe: 'schwarz',
    symbol: '♣',
};
let blattZehn = {
    wert: './style/10Krake.png',
    farbe: 'schwarz',
    symbol: '♠',
};
let herzNeun = {
    wert: './style/9Krake.png',
    farbe: 'rot',
    symbol: '♥',
};
let karoNeun = {
    wert: './style/9Krake.png',
    farbe: 'rot',
    symbol: '♦',
};
let kreuzNeun = {
    wert: './style/9Krake.png',
    farbe: 'schwarz',
    symbol: '♣',
};
let blattNeun = {
    wert: './style/9Krake.png',
    farbe: 'schwarz',
    symbol: '♠',
};
let herzAcht = {
    wert: './style/8Krake.png',
    farbe: 'rot',
    symbol: '♥',
};
let karoAcht = {
    wert: './style/8Krake.png',
    farbe: 'rot',
    symbol: '♦',
};
let kreuzAcht = {
    wert: './style/8Krake.png',
    farbe: 'schwarz',
    symbol: '♣',
};
let blattAcht = {
    wert: './style/8Krake.png',
    farbe: 'schwarz',
    symbol: '♠',
};
let herzSieben = {
    wert: './style/7Krake.png',
    farbe: 'rot',
    symbol: '♥',
};
let karoSieben = {
    wert: './style/7Krake.png',
    farbe: 'rot',
    symbol: '♦',
};
let kreuzSieben = {
    wert: './style/7Krake.png',
    farbe: 'schwarz',
    symbol: '♣',
};
let blattSieben = {
    wert: './style/7Krake.png',
    farbe: 'schwarz',
    symbol: '♠',
};
let Deck = [herzAcht, herzAss, herzBube, herzDame, herzKönig, herzNeun, herzSieben, herzZehn, karoAcht, karoAss, karoBube, karoDame, karoKönig, karoNeun, karoSieben, karoZehn, kreuzAcht, kreuzAss, kreuzBube, kreuzDame, kreuzKönig, kreuzNeun, kreuzSieben, kreuzZehn, blattAcht, blattAss, blattBube, blattDame, blattKönig, blattNeun, blattSieben, blattZehn];
let Handkarten = [];
let anzahlKarten = 0;
let irgZahl;
function wieVieleKarten(anzahlKarten) {
    if (anzahlKarten == 0) {
        do {
            anzahlKarten = parseInt(prompt("Mit wie viele Karten möchtest du spielen?", "..."));
        } while (anzahlKarten == 0 || anzahlKarten < 1 || anzahlKarten > 32);
    }
    irgendEineZahl(anzahlKarten);
}
function irgendEineZahl(_anzahlKarten) {
    for (let e = 0; _anzahlKarten > e; _anzahlKarten--) {
        anzahl(irgZahl, _anzahlKarten);
        Handkarten.push(Deck.splice(irgZahl, 1)[0]);
        console.log(Handkarten);
    }
    bauKarte();
}
function anzahl(_s, _t) {
    let max = Deck.length;
    _s = Math.floor(Math.random() * Math.floor(max));
    return irgZahl = _s;
}
function bauKarte() {
    let n = 0;
    while (n < Handkarten.length) {
        aufbauen('Hand', Handkarten[n]);
        n++;
    }
}
function aufbauen(html, _eineKarte) {
    let _Karte = document.createElement('div');
    let div = `<div class="Karte">
            <p class="${_eineKarte.farbe}">${_eineKarte.symbol}</p>
            <img class="Bild" src="${_eineKarte.wert}"></img>
            </div>`;
    _Karte.innerHTML = div;
    document.getElementById(html).appendChild(_Karte);
}
function init() {
    wieVieleKarten(anzahlKarten);
}
document.addEventListener('DOMContentLoaded', init);
//# sourceMappingURL=main.js.map