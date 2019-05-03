namespace EisDealer {
    /*
Aufgabe: Aufgabe 6, Eis Dealer reloaded
Name: Eva Ritt
Matrikel: 261414
Datum: 01.05.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
    window.addEventListener("load", init);
    let address: string = "http://localhost:8100";

    function init():void{
        writeHTML(Angebot);
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", aenderung);
            document.getElementById("kontrolle").addEventListener("click", kontrolle);
        }
    }

    function  writeHTML(_Angebot:Kathegorie):void{
        for(let key in _Angebot){
            let kathegorie:Produkt[]=_Angebot[key];
            let div:HTMLElement=document.createElement('div');
            div.innerHTML=`<p>${key}</p>
            <ul id="${key.substring(0, 3)}"></ul>`;
            document.getElementById('bestellung').appendChild(div);
            let box:HTMLElement=document.createElement('fieldset');
            
            let builder=`<legende>${key}</legende><br>`;
            for(let b:number=0; b<kathegorie.length; b++){
               builder += `<input type="${kathegorie[b].type}" name="${kathegorie[b].kathegorie}" id="${kathegorie[b].bezeichnung}" preis="${kathegorie[b].preis}" min="${kathegorie[b].min}" max="${kathegorie[b].max}" step="${kathegorie[b].step}" value="0" kategorie"${kathegorie[b].kathegorie}">
                    <label for="${kathegorie[b].bezeichnung}">${kathegorie[b].bezeichnung} ${kathegorie[b].preis.toFixed(2)} €</label>
                    <br>`;
            }
            box.setAttribute("id", key);
            box.innerHTML=builder;
            document.getElementById('angebot').appendChild(box);
        }
           
    }
    
    let input:HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    function aenderung(_event:Event):void{
        let input:HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let num:number=0
            document.getElementById("Beh").innerHTML = "";
            document.getElementById("Eis").innerHTML = "";
            document.getElementById("Top").innerHTML = "";
            document.getElementById("Lie").innerHTML = "";
            for (let w: number = 0; w < input.length; w++){
                if (input[w].name != ""){
                    if(input[w].name == "Behälter" && input[w].checked == true){
                        let ziel =document.createElement("li");
                        ziel.innerHTML=`${input[w].id}`;
                        document.getElementById("Beh").appendChild(ziel);
                    };
                    if(input[w].name == "Eissorten"){
                        let ziel =document.createElement("li");
                        if (input[w].value != "0"){
                            ziel.innerHTML=`${input[w].value}x ${input[w].id} ${Number(Number(input[w].value) * Number(input[w].getAttribute("preis"))).toFixed(2)} €`;
                            num += Number(input[w].value) * Number(input[w].getAttribute("preis"));
                            document.getElementById("Eis").appendChild(ziel);
                        };
                    };
                    if(input[w].name == "Topping" && input[w].checked == true){
                        let ziel =document.createElement("li");
                        ziel.innerHTML=`${input[w].id} ${Number(input[w].getAttribute("preis")).toFixed(2)} €`;
                        num += Number(input[w].getAttribute("preis"));
                        document.getElementById("Top").appendChild(ziel);
                    };
                    if(input[w].name == "Lieferoption" && input[w].checked == true){
                        let ziel =document.createElement("li");
                        ziel.innerHTML=`${input[w].id} ${Number(input[w].getAttribute("preis")).toFixed(2)} €`;
                        num += Number(input[w].getAttribute("preis"));
                        document.getElementById("Lie").appendChild(ziel);
                    };
                };
            };
            document.getElementById("preis").innerHTML = String(num.toFixed(2));
        };
            function kontrolle(_event:Event):void{
                let fehler:string="";
                let eisChecked:number=0;
                let behälterCheck:number=0;
                let optionChecked:number=0;
                let adressChecked:number=1;
                for(let d:number=0; d<6; d++){
                    if(input[d].name == "Postleitzahl"){
                        if(Number(input[d].value) < 10000 || Number(input[d].value) > 99999){
                            adressChecked=0;
                        }
                    }
                    if(input[d].value == ""){
                        adressChecked=0;
                    }
                }
                for(let z:number=0; z<input.length;z++){
                    if(input[z].name == "Behälter" && input[z].checked == true){
                        behälterCheck = 1;
                    }
                    if(input[z].name == "Eissorten" && Number(input[z].value) > 0){
                        eisChecked=1;
                    }
                    if(input[z].name == "Lieferoption" && input[z].checked == true){
                        optionChecked = 1;
                    }
                }
                if(adressChecked == 0){
                    fehler += "Adress Angaben" + String.fromCharCode(13);
                }
                if(eisChecked == 0){
                    fehler += "Eissorte "+ String.fromCharCode(13);
                }
                if(behälterCheck == 0){
                    fehler += "Behälter "+ String.fromCharCode(13);
                }
                if(optionChecked == 0){
                    fehler += "Lieferoption "+ String.fromCharCode(13);
                }
                
                if(fehler!=""){
                alert("Folgende Angaben fehlen: "+ String.fromCharCode(13) + fehler)
                }
                else{
                alert("Vielen Dank für Ihre Bestellung")
                }
                let schreib: XMLHttpRequest = new XMLHttpRequest();
            schreib.open("GET", address + "bestellung=" , true);
            schreib.addEventListener("readystatechange", handleStateChange);
            schreib.send();
            }  
        

            function handleStateChange(_event: ProgressEvent): void {
                let schreib: XMLHttpRequest = (<XMLHttpRequest>_event.target);
                if (schreib.readyState == XMLHttpRequest.DONE) {
                    console.log("ready: " + schreib.readyState, " | type: " + schreib.responseType, " | status:" + schreib.status, " | text:" + schreib.statusText);
                    console.log("response: " + schreib.response);
                }
            } 
        }
