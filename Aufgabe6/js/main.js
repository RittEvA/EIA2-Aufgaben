var EisDealer;
(function (EisDealer) {
    /*
Aufgabe: Aufgabe 6, Eis Dealer server
Name: Eva Ritt
Matrikel: 261414
Datum: 01.05.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
    window.addEventListener("load", init);
    //let zuServer:string='http://localhost:8100/';
    let zuServer = 'https://eia2-rittevaa.herokuapp.com/';
    function init() {
        writeHTML(EisDealer.Angebot);
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", aenderung);
            document.getElementById("kontrolle").addEventListener("click", kontrolle);
        }
    }
    function writeHTML(_Angebot) {
        for (let key in _Angebot) {
            let kathegorie = _Angebot[key];
            let div = document.createElement('div');
            div.innerHTML = `<p>${key}</p>
            <ul id="${key.substring(0, 3)}"></ul>`;
            document.getElementById('bestellung').appendChild(div);
            let box = document.createElement('fieldset');
            let builder = `<legende>${key}</legende><br>`;
            for (let b = 0; b < kathegorie.length; b++) {
                builder += `<input type="${kathegorie[b].type}" kategorie="${kathegorie[b].kathegorie}" name="${kathegorie[b].bezeichnung}" preis="${kathegorie[b].preis}" min="${kathegorie[b].min}" max="${kathegorie[b].max}" step="${kathegorie[b].step}" value="0">
                    <label for="${kathegorie[b].bezeichnung}">${kathegorie[b].bezeichnung} ${kathegorie[b].preis.toFixed(2)} €</label>
                    <br>`;
            }
            box.setAttribute("id", key);
            box.innerHTML = builder;
            document.getElementById('angebot').appendChild(box);
        }
    }
    let input = document.getElementsByTagName("input");
    function aenderung(_event) {
        let input = document.getElementsByTagName("input");
        let num = 0;
        document.getElementById("Beh").innerHTML = "";
        document.getElementById("Eis").innerHTML = "";
        document.getElementById("Top").innerHTML = "";
        document.getElementById("Lie").innerHTML = "";
        for (let w = 0; w < input.length; w++) {
            if (input[w].getAttribute("kategorie") != "") {
                if (input[w].getAttribute("kategorie") == "Behälter" && input[w].checked == true) {
                    let ziel = document.createElement("li");
                    ziel.innerHTML = `${input[w].name}`;
                    document.getElementById("Beh").appendChild(ziel);
                }
                ;
                if (input[w].getAttribute("kategorie") == "Eissorten") {
                    let ziel = document.createElement("li");
                    if (input[w].value != "0") {
                        ziel.innerHTML = `${input[w].value}x ${input[w].name} ${Number(Number(input[w].value) * Number(input[w].getAttribute("preis"))).toFixed(2)} €`;
                        num += Number(input[w].value) * Number(input[w].getAttribute("preis"));
                        document.getElementById("Eis").appendChild(ziel);
                    }
                    ;
                }
                ;
                if (input[w].getAttribute("kategorie") == "Topping" && input[w].checked == true) {
                    let ziel = document.createElement("li");
                    ziel.innerHTML = `${input[w].name} ${Number(input[w].getAttribute("preis")).toFixed(2)} €`;
                    num += Number(input[w].getAttribute("preis"));
                    document.getElementById("Top").appendChild(ziel);
                }
                ;
                if (input[w].getAttribute("kategorie") == "Lieferoption" && input[w].checked == true) {
                    let ziel = document.createElement("li");
                    ziel.innerHTML = `${input[w].name} ${Number(input[w].getAttribute("preis")).toFixed(2)} €`;
                    num += Number(input[w].getAttribute("preis"));
                    document.getElementById("Lie").appendChild(ziel);
                }
                ;
            }
            ;
        }
        ;
        document.getElementById("preis").innerHTML = String(num.toFixed(2));
    }
    ;
    function kontrolle(_event) {
        let fehler = "";
        let eisChecked = 0;
        let behälterCheck = 0;
        let optionChecked = 0;
        let adressChecked = 1;
        for (let d = 0; d < 6; d++) {
            if (input[d].getAttribute("kategorie") == "Postleitzahl") {
                if (Number(input[d].value) < 10000 || Number(input[d].value) > 99999) {
                    adressChecked = 0;
                }
            }
            if (input[d].value == "") {
                adressChecked = 0;
            }
        }
        for (let z = 0; z < input.length; z++) {
            if (input[z].getAttribute("kategorie") == "Behälter" && input[z].checked == true) {
                behälterCheck = 1;
            }
            if (input[z].getAttribute("kategorie") == "Eissorten" && Number(input[z].value) > 0) {
                eisChecked = 1;
            }
            if (input[z].getAttribute("kategorie") == "Lieferoption" && input[z].checked == true) {
                optionChecked = 1;
            }
        }
        if (adressChecked == 0) {
            fehler += "Adress Angaben" + String.fromCharCode(13);
        }
        if (eisChecked == 0) {
            fehler += "Eissorte " + String.fromCharCode(13);
        }
        if (behälterCheck == 0) {
            fehler += "Behälter " + String.fromCharCode(13);
        }
        if (optionChecked == 0) {
            fehler += "Lieferoption " + String.fromCharCode(13);
        }
        if (fehler != "") {
            alert("Folgende Angaben fehlen: " + String.fromCharCode(13) + fehler);
        }
        else {
            alert("Vielen Dank für Ihre Bestellung");
        }
        datenÜbergeben();
        /*let schreib: XMLHttpRequest = new XMLHttpRequest();
        schreib.open("GET", address);
        schreib.addEventListener("readystatechange", handleStateChange);
        schreib.send();*/
    }
    function datenÜbergeben() {
        let input = document.getElementsByTagName("input");
        for (let i = 0; i < input.length; i++) {
            if (input[i].getAttribute("kategorie") == "Eissorten" && Number(input[i].value) != 0) {
                zuServer += `${input[i].name}=${input[i].value}&`;
            }
            if (input[i].type == "radio" && input[i].checked == true || input[i].type == "checkbox" && input[i].checked == true) {
                zuServer += `${input[i].name}&`;
            }
        }
        window.open(zuServer);
    }
    /* function handleStateChange(_event: ProgressEvent): void {
         let schreib: XMLHttpRequest = (<XMLHttpRequest>_event.target);
         if (schreib.readyState == XMLHttpRequest.DONE) {

             console.log("ready: " + schreib.readyState, " | type: " + schreib.responseType, " | status:" + schreib.status, " | text:" + schreib.statusText);
             console.log("response: " + schreib.response);
         }
     }
     
}*/
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=main.js.map