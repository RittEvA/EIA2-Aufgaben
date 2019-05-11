
namespace EisDealer1 {
    /*
Aufgabe: Aufgabe 6, Eis Dealer server
Name: Eva Ritt
Matrikel: 261414
Datum: 01.05.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
    window.addEventListener("DOMContentLoaded", init);
    
    //let address: string = 'https://eia2-rittevaa.herokuapp.com';
    //let zuServer:string= 'https://eia2-rittevaa.herokuapp.com/?';
    
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
            if(key == "Behaelter" || key == "Lieferoption"){
                let builder=`<legende>${key}</legende><br>`;
                for(let b:number=0; b<kathegorie.length; b++){
                    builder += `<input type="${kathegorie[b].type}" kategorie="${kathegorie[b].kathegorie}" name="${kathegorie[b].bezeichnung}" preis="${kathegorie[b].preis}" min="${kathegorie[b].min}" max="${kathegorie[b].max}" step="${kathegorie[b].step}" value="${kathegorie[b].value}">
                     <label for="${kathegorie[b].bezeichnung}">${kathegorie[b].value} ${kathegorie[b].preis.toFixed(2)} €</label>
                     <br>`;
                }
                box.setAttribute("id", key);
                box.innerHTML=builder;
                document.getElementById('angebot').appendChild(box);
            }
            else{let builder=`<legende>${key}</legende><br>`;
                for(let b:number=0; b<kathegorie.length; b++){
                    builder += `<input type="${kathegorie[b].type}" kategorie="${kathegorie[b].kathegorie}" name="${kathegorie[b].bezeichnung}" preis="${kathegorie[b].preis}" min="${kathegorie[b].min}" max="${kathegorie[b].max}" step="${kathegorie[b].step}" value="${kathegorie[b].value}">
                     <label for="${kathegorie[b].bezeichnung}">${kathegorie[b].bezeichnung} ${kathegorie[b].preis.toFixed(2)} €</label>
                     <br>`;
                }
                box.setAttribute("id", key);
                box.innerHTML=builder;
                document.getElementById('angebot').appendChild(box);
        }
        }
           
    }
    
    let input:HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    function aenderung(_event:Event):void{
       
        let num:number=0
            document.getElementById("Beh").innerHTML = "";
            document.getElementById("Eis").innerHTML = "";
            document.getElementById("Top").innerHTML = "";
            document.getElementById("Lie").innerHTML = "";
            for (let w: number = 0; w < input.length; w++){
                if (input[w].getAttribute("kategorie") != ""){
                    if(input[w].getAttribute("kategorie") == "Behaelter" && input[w].checked == true){
                        let ziel =document.createElement("li");
                        ziel.innerHTML=`${input[w].value}`;
                        document.getElementById("Beh").appendChild(ziel);
                    };
                    if(input[w].getAttribute("kategorie") == "Eissorten"){
                        let ziel =document.createElement("li");
                        if (input[w].value != "0"){
                            ziel.innerHTML=`${input[w].value}x ${input[w].name} ${Number(Number(input[w].value) * Number(input[w].getAttribute("preis"))).toFixed(2)} €`;
                            num += Number(input[w].value) * Number(input[w].getAttribute("preis"));
                            document.getElementById("Eis").appendChild(ziel);
                        };
                    };
                    if(input[w].getAttribute("kategorie") == "Topping" && input[w].checked == true){
                        let ziel =document.createElement("li");
                        ziel.innerHTML=`${input[w].name} ${Number(input[w].getAttribute("preis")).toFixed(2)} €`;
                        num += Number(input[w].getAttribute("preis"));
                        document.getElementById("Top").appendChild(ziel);
                    };
                    if(input[w].getAttribute("kategorie") == "Lieferoption" && input[w].checked == true){
                        let ziel =document.createElement("li");
                        ziel.innerHTML=`${input[w].value} ${Number(input[w].getAttribute("preis")).toFixed(2)} €`;
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
                let behaelterCheck:number=0;
                let optionChecked:number=0;
                let adressChecked:number=1;
                for(let d:number=0; d<6; d++){
                    if(input[d].getAttribute("kategorie") == "Postleitzahl"){
                        if(Number(input[d].value) < 10000 || Number(input[d].value) > 99999){
                            adressChecked=0;
                        }
                    }
                    if(input[d].value == ""){
                        adressChecked=0;
                    }
                }
                for(let z:number=0; z<input.length;z++){
                    if(input[z].getAttribute("kategorie") == "Behaelter" && input[z].checked == true){
                        behaelterCheck = 1;
                    }
                    if(input[z].getAttribute("kategorie") == "Eissorten" && Number(input[z].value) > 0){
                        eisChecked=1;
                    }
                    if(input[z].getAttribute("kategorie")== "Lieferoption" && input[z].checked == true){
                        optionChecked = 1;
                    }
                }
                if(adressChecked == 0){
                    fehler += "Adress Angaben" + String.fromCharCode(13);
                }
                if(eisChecked == 0){
                    fehler += "Eissorte "+ String.fromCharCode(13);
                }
                if(behaelterCheck == 0){
                    fehler += "Behaelter "+ String.fromCharCode(13);
                }
                if(optionChecked == 0){
                    fehler += "Lieferoption "+ String.fromCharCode(13);
                }
                
                if(fehler!=""){
                    alert("Folgende Angaben fehlen: "+ String.fromCharCode(13) + fehler)
                }
                else{
                    alert("Vielen Dank für Ihre Bestellung")
                    datenÜbergeben();
                }
                
            } 
            function datenÜbergeben(){
                //let zuServer:string='https://eia2-rittevaa.herokuapp.com/?';
                let zuServer:string='https://localhost:8100/?';
                    let input:HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
                    for(let i:number=0; i<input.length; i++){
                        
                        if(input[i].getAttribute("kategorie") == "Eissorten" && Number(input[i].value) >0 || input[i].type == "radio" && input[i].checked == true){
                        zuServer +=`${input[i].name}=${input[i].value}&`;
                        }
                        if(input[i].type == "checkbox" && input[i].checked == true ){
                            zuServer += `${input[i].name}&`
                        }
                    }
                    alert(zuServer)
                    //sendRequestWithCustomData(zuServer);
                    let xhr: XMLHttpRequest = new XMLHttpRequest();
                    xhr.open("GET", zuServer , true);
                    xhr.addEventListener("readystatechange", handleStateChange);
                    xhr.send();

                    
            }
          /* function sendRequestWithCustomData(_zuServer:string): void {
                let xhr: XMLHttpRequest = new XMLHttpRequest();
                xhr.open("GET", _zuServer , true);
                xhr.addEventListener("readystatechange", handleStateChange);
                xhr.send();
            }*/
        
            function handleStateChange(_event: ProgressEvent): void {
                let xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    document.getElementById('submit').innerHTML = "";
                    let htmlStr:string =`<p>${xhr.response}</p>`;
                    document.getElementById('submit').innerHTML =htmlStr;
                }
            
            }
}
