/*
Aufgabe: Mau Mau, Aufgabe2
Name: Eva Ritt
Matrikel: 261414
Datum: 11.04.2019

Code wurde in Zusammenarbeit mit Iven Otis Sieglen geschrieben
*/
var MauMau;
(function (MauMau) {
    let herzDame = {
        name: 5,
        wert: './style/12Dame.png',
        farbe: 'rot',
        symbol: '♥',
    };
    let karoDame = {
        name: 13,
        wert: './style/12Dame.png',
        farbe: 'rot',
        symbol: '♦',
    };
    let kreuzDame = {
        name: 21,
        wert: './style/12Dame.png',
        farbe: 'schwarz',
        symbol: '♣',
    };
    let blattDame = {
        name: 29,
        wert: './style/12Dame.png',
        farbe: 'schwarz',
        symbol: '♠',
    };
    let herzBube = {
        name: 4,
        wert: './style/11Bube.png',
        farbe: 'rot',
        symbol: '♥',
    };
    let karoBube = {
        name: 12,
        wert: './style/11Bube.png',
        farbe: 'rot',
        symbol: '♦',
    };
    let kreuzBube = {
        name: 20,
        wert: './style/11Bube.png',
        farbe: 'schwarz',
        symbol: '♣',
    };
    let blattBube = {
        name: 28,
        wert: './style/11Bube.png',
        farbe: 'schwarz',
        symbol: '♠',
    };
    let herzKönig = {
        name: 6,
        wert: './style/13König.png',
        farbe: 'rot',
        symbol: '♥',
    };
    let karoKönig = {
        name: 14,
        wert: './style/13König.png',
        farbe: 'rot',
        symbol: '♦',
    };
    let kreuzKönig = {
        name: 22,
        wert: './style/13König.png',
        farbe: 'schwarz',
        symbol: '♣',
    };
    let blattKönig = {
        name: 30,
        wert: './style/13König.png',
        farbe: 'schwarz',
        symbol: '♠',
    };
    let herzAss = {
        name: 7,
        wert: './style/14Ass.png',
        farbe: 'rot',
        symbol: '♥',
    };
    let karoAss = {
        name: 15,
        wert: './style/14Ass.png',
        farbe: 'rot',
        symbol: '♦',
    };
    let kreuzAss = {
        name: 23,
        wert: './style/14Ass.png',
        farbe: 'schwarz',
        symbol: '♣',
    };
    let blattAss = {
        name: 31,
        wert: './style/14Ass.png',
        farbe: 'schwarz',
        symbol: '♠',
    };
    let herzZehn = {
        name: 3,
        wert: './style/10Krake.png',
        farbe: 'rot',
        symbol: '♥',
    };
    let karoZehn = {
        name: 11,
        wert: './style/10Krake.png',
        farbe: 'rot',
        symbol: '♦'
    };
    let kreuzZehn = {
        name: 19,
        wert: './style/10Krake.png',
        farbe: 'schwarz',
        symbol: '♣',
    };
    let blattZehn = {
        name: 27,
        wert: './style/10Krake.png',
        farbe: 'schwarz',
        symbol: '♠',
    };
    let herzNeun = {
        name: 2,
        wert: './style/9Krake.png',
        farbe: 'rot',
        symbol: '♥',
    };
    let karoNeun = {
        name: 10,
        wert: './style/9Krake.png',
        farbe: 'rot',
        symbol: '♦',
    };
    let kreuzNeun = {
        name: 18,
        wert: './style/9Krake.png',
        farbe: 'schwarz',
        symbol: '♣',
    };
    let blattNeun = {
        name: 26,
        wert: './style/9Krake.png',
        farbe: 'schwarz',
        symbol: '♠',
    };
    let herzAcht = {
        name: 1,
        wert: './style/8Krake.png',
        farbe: 'rot',
        symbol: '♥',
    };
    let karoAcht = {
        name: 9,
        wert: './style/8Krake.png',
        farbe: 'rot',
        symbol: '♦',
    };
    let kreuzAcht = {
        name: 17,
        wert: './style/8Krake.png',
        farbe: 'schwarz',
        symbol: '♣',
    };
    let blattAcht = {
        name: 25,
        wert: './style/8Krake.png',
        farbe: 'schwarz',
        symbol: '♠',
    };
    let herzSieben = {
        name: 0,
        wert: './style/7Krake.png',
        farbe: 'rot',
        symbol: '♥',
    };
    let karoSieben = {
        name: 8,
        wert: './style/7Krake.png',
        farbe: 'rot',
        symbol: '♦',
    };
    let kreuzSieben = {
        name: 16,
        wert: './style/7Krake.png',
        farbe: 'schwarz',
        symbol: '♣',
    };
    let blattSieben = {
        name: 24,
        wert: './style/7Krake.png',
        farbe: 'schwarz',
        symbol: '♠',
    };
    //Arrays
    let deck = [herzAcht, herzAss, herzBube, herzDame, herzKönig, herzNeun, herzSieben, herzZehn, karoAcht, karoAss, karoBube, karoDame, karoKönig, karoNeun, karoSieben, karoZehn, kreuzAcht, kreuzAss, kreuzBube, kreuzDame, kreuzKönig, kreuzNeun, kreuzSieben, kreuzZehn, blattAcht, blattAss, blattBube, blattDame, blattKönig, blattNeun, blattSieben, blattZehn];
    let handkarten = [];
    //let gespielt:Karte[]=[]
    //Variablen
    let anzahlKarten = 0;
    let irgZahl; //freie Zahl um eine wahllose Karte zu bauen
    document.getElementById('Hand').addEventListener('click', karteLegen);
    document.getElementById('Talon').addEventListener('click', karteZiehen);
    document.addEventListener('keydown', event => {
        if (event.keyCode == 32) {
            karteZiehen();
        }
        else {
            return;
        }
    });
    document.getElementById('SortButton').addEventListener('click', sortieren);
    document.addEventListener('DOMContentLoaded', init);
    //fragt wie viele Karten man haben möchte
    function wieVieleKarten(anzahlKarten) {
        if (anzahlKarten == 0) {
            do {
                anzahlKarten = parseInt(prompt("Mit wie viele Karten möchtest du spielen??", "..."));
            } while (isNaN(anzahlKarten) || anzahlKarten >= 1 || anzahlKarten < 32);
        }
        irgendEineZahl(anzahlKarten);
    }
    //wählt eine Zahl und gibt es an bauKarte weiter
    function irgendEineZahl(_anzahlKarten) {
        for (let e = 0; _anzahlKarten > e; _anzahlKarten--) {
            anzahl();
            handkarten.push(deck.splice(irgZahl, 1)[0]);
            console.log(handkarten);
        }
        bauKarte();
    }
    //nimmmt irgendeine Zahl aus der Länge des Decks
    function anzahl() {
        let max = deck.length;
        irgZahl = Math.floor(Math.random() * Math.floor(max));
        return irgZahl;
    }
    //gibt anweisung wie oft eine Karte gebaut wird
    function bauKarte() {
        let n = 0;
        while (n < handkarten.length) {
            aufbauen('Hand', handkarten[n]);
            n++;
        }
    }
    //baut die Karte
    function aufbauen(_html, _eineKarte) {
        let _Karte = document.createElement('div');
        let div = `<div class="Karte" id=${_eineKarte.name}>
            <p class="${_eineKarte.farbe}">${_eineKarte.symbol}</p>
            <img class="Bild" src="${_eineKarte.wert}"></img>
            </div>`;
        _Karte.innerHTML = div;
        document.getElementById(_html).appendChild(_Karte);
    }
    //startet den ersten durch lauf des Aufbauens
    function init() {
        wieVieleKarten(anzahlKarten);
    }
    //eine Karte von Deck in Handkarten
    function karteZiehen() {
        alert("Karte ziehen");
        if (deck.length > 0) {
            anzahl();
            let prodElement = document.createElement('div');
            document.getElementById("Handkarten").appendChild(prodElement);
            handkarten.push(deck.splice(irgZahl, 1)[0]);
            console.log(handkarten);
            bauKarte();
        }
        else {
            console.log('Es sind keine Karten auf dem Nachziehstapel vorhanden!');
            alert('Es sind keine Karten auf dem Nachziehstapel vorhanden!');
        }
    }
    //sortiert die Karten nach .name
    function sortieren() {
        handkarten.sort(function (a, b) {
            let nameA = a.name;
            let nameB = b.name;
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            //muss dann nameA==nameB
            return 0;
        });
        bauKarte();
    }
    //Karte von der Hand auf den Ablegestapel
    function karteLegen() { }
})(MauMau || (MauMau = {}));
//# sourceMappingURL=main.js.map