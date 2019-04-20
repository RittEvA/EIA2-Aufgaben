namespace EisDealer {
    window.addEventListener("load", init);

    function init():void{
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", aenderung);
            document.getElementById("kontrolle").addEventListener("click", kontrolle);
        }
    }
    //let bestellung:EventTarget[]=[];
    let input:HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    function aenderung(_event:Event):void{
        let num:number=0;
            document.getElementById("Beh").innerHTML = "";
            document.getElementById("Eis").innerHTML = "";
            document.getElementById("Top").innerHTML = "";
            document.getElementById("Lie").innerHTML = "";
            for (let w: number = 0; w < input.length-1; w++){
                if (input[w].checked == true){
                    let preis: number = Number(input[w].value);
                    num += preis;
                    document.getElementById("preis").innerHTML = String(num.toFixed(2));
                    if(input[w].name == "Behaelter"){
                        let ziel =document.createElement("li");
                        ziel.innerHTML=`${input[w].id}`;
                        document.getElementById("Beh").appendChild(ziel);
                    };
                    if(input[w].name == "Eissorte"){
                        let ziel =document.createElement("li");
                        ziel.innerHTML=`${input[w].id} ${input[w].value} €`;
                        document.getElementById("Eis").appendChild(ziel);
                    };
                    if(input[w].name == "Topping"){
                        let ziel =document.createElement("li");
                        ziel.innerHTML=`${input[w].id} ${input[w].value} €`;
                        document.getElementById("Top").appendChild(ziel);
                    };
                    if(input[w].name == "Lieferoption"){
                        let ziel =document.createElement("li");
                        ziel.innerHTML=`${input[w].id} ${input[w].value} €`;
                        document.getElementById("Lie").appendChild(ziel);
                    };
                };
            }
        }
            function kontrolle(_event:Event):void{
                let fehler:string="";
                let eisChecked:number=0;
                let adressChecked:number=1;
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
                }
                for(let d:number=19; d<25; d++){
                    if(input[d].value == ""){
                        adressChecked=0;
                    }
                }
                if(adressChecked == 0){
                    fehler += "Adress Angaben" + String.fromCharCode(13);
                }
                if(fehler!=""){
                alert("Folgende Angaben fehlen: "+ String.fromCharCode(13) + fehler)
                }
                else{
                alert("Vielen Dank für Ihre Bestellung")
                }
            }    
        
    
} 
