var EisDealer;
(function (EisDealer) {
    /*
Aufgabe: Aufgabe 5, Eis Dealer reloaded
Name: Eva Ritt
Matrikel: 261414
Datum: 24.04.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
    window.addEventListener("load", init);
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
                builder += `<input type="${kathegorie[b].type}" name="${kathegorie[b].kathegorie}" id="${kathegorie[b].bezeichnung}" preis="${kathegorie[b].preis}" min="${kathegorie[b].min}" max="${kathegorie[b].max}" step="${kathegorie[b].step}" value="0">
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
        //let target:HTMLInputElement=<HTMLInputElement>_event.target;
        //alert("HAl");
        let input = document.getElementsByTagName("input");
        let num = 0;
        //alert(num);
        document.getElementById("Beh").innerHTML = "";
        document.getElementById("Eis").innerHTML = "";
        document.getElementById("Top").innerHTML = "";
        document.getElementById("Lie").innerHTML = "";
        //alert(input.length);
        for (let w = 0; w < input.length; w++) {
            //alert("1");
            if (input[w].name != "") {
                //let preis: number = Number(input[w].getAttribute("preis"));
                //num += preis;
                //document.getElementById("preis").innerHTML = String(num.toFixed(2));
                if (input[w].name == "Behälter" && input[w].checked == true) {
                    let ziel = document.createElement("li");
                    ziel.innerHTML = `${input[w].id}`;
                    document.getElementById("Beh").appendChild(ziel);
                }
                ;
                if (input[w].name == "Eissorten") {
                    let ziel = document.createElement("li");
                    //alert(input[w].value);
                    if (input[w].value != "0") {
                        ziel.innerHTML = `${input[w].value}x ${input[w].id} ${Number(Number(input[w].value) * Number(input[w].getAttribute("preis"))).toFixed(2)} €`;
                        num += Number(input[w].value) * Number(input[w].getAttribute("preis"));
                        document.getElementById("Eis").appendChild(ziel);
                    }
                    ;
                }
                ;
                if (input[w].name == "Topping" && input[w].checked == true) {
                    let ziel = document.createElement("li");
                    ziel.innerHTML = `${input[w].id} ${Number(input[w].getAttribute("preis")).toFixed(2)} €`;
                    num += Number(input[w].getAttribute("preis"));
                    document.getElementById("Top").appendChild(ziel);
                }
                ;
                if (input[w].name == "Lieferoption" && input[w].checked == true) {
                    let ziel = document.createElement("li");
                    ziel.innerHTML = `${input[w].id} ${Number(input[w].getAttribute("preis")).toFixed(2)} €`;
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
        /*
        if(input[0].checked == false && input[1].checked == false){
            fehler += "Behälter " + String.fromCharCode(13);
        };
        for(let r:number=2; r<11;r++){
            if(input[r].checked == true){
                eisChecked=1;
            }
        }
        if(eisChecked ==0){
            fehler += "Eissorte "+ String.fromCharCode(13);
        }
        if(input[17].checked == false && input[18].checked == false){
            fehler += "Lieferoption " + String.fromCharCode(13);
        } */
        for (let d = 0; d < 6; d++) {
            if (input[d].name == "Postleitzahl") {
                if (Number(input[d].value) < 10000 || Number(input[d].value) > 99999) {
                    adressChecked = 0;
                }
            }
            if (input[d].value == "") {
                adressChecked = 0;
            }
        }
        for (let z = 0; z < input.length; z++) {
            if (input[z].name == "Behälter" && input[z].checked == true) {
                behälterCheck = 1;
            }
            if (input[z].name == "Eissorten" && Number(input[z].value) > 0) {
                eisChecked = 1;
            }
            if (input[z].name == "Lieferoption" && input[z].checked == true) {
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
    }
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=main.js.map