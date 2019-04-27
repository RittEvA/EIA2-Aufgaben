namespace EisDealer{

   /*
Aufgabe: Aufgabe 5, Eis Dealer reloaded
Name: Eva Ritt
Matrikel: 261414
Datum: 24.04.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

export interface Kathegorie {
    [key: string]: Produkt[];
}

export interface Produkt{
    kathegorie:string;
    bezeichnung:string;
    preis:number;
    type:string;
    min:number;
    max:number;
    step:number;
}


export let Angebot: Kathegorie
		= {
		"Behälter": [
			{ bezeichnung: "Tüte", preis: 0, type:"radio", kathegorie:"Behälter", min:0, max:0, step:0},
			{ bezeichnung: "Becher", preis: 0, type:"radio", kathegorie:"Behälter",min:0, max:0, step:0}
		],
		"Eissorten": [
			{ bezeichnung: "Schokolade", preis: 1, type:"number", kathegorie:"Eissorten", min:0, max:10, step:1},
            { bezeichnung: "Vanille", preis: 1, type:"number", kathegorie:"Eissorten", min:0, max:10, step:1},
            { bezeichnung: "Erdbeere", preis: 1, type:"number", kathegorie:"Eissorten", min:0, max:10, step:1},
            { bezeichnung: "Himbeere", preis: 1, type:"number", kathegorie:"Eissorten", min:0, max:10, step:1},
            { bezeichnung: "Oreo", preis: 1, type:"number", kathegorie:"Eissorten", min:0, max:10, step:1},
            { bezeichnung: "Snickers", preis: 1, type:"number", kathegorie:"Eissorten", min:0, max:10, step:1},
            { bezeichnung: "Pistazie", preis: 1, type:"number", kathegorie:"Eissorten", min:0, max:10, step:1},
            { bezeichnung: "Walnuss", preis: 1, type:"number", kathegorie:"Eissorten", min:0, max:10, step:1},
            { bezeichnung: "Raffaelo", preis: 1, type:"number", kathegorie:"Eissorten", min:0, max:10, step:1}
        ],
        "Topping": [
			{ bezeichnung: "Sahne", preis: 0.50, type:"checkbox", kathegorie:"Topping", min:0, max:0, step:0},
            { bezeichnung: "Schockostreusel", preis: 0.30, type:"checkbox", kathegorie:"Topping", min:0, max:0, step:0},
            { bezeichnung: "bunteStreusel", preis: 0.30, type:"checkbox", kathegorie:"Topping", min:0, max:0, step:0},
            { bezeichnung: "Vanillesoße", preis: 0.40, type:"checkbox", kathegorie:"Topping", min:0, max:0, step:0},
            { bezeichnung: "Schockosoße", preis: 0.40, type:"checkbox", kathegorie:"Topping", min:0, max:0, step:0},
            { bezeichnung: "Erdbeersoße", preis: 0.40, type:"checkbox", kathegorie:"Topping", min:0, max:0, step:0}
        ],
        "Lieferoption": [
			{ bezeichnung: "sofort", preis: 2.00, type:"radio", kathegorie:"Lieferoption", min:0, max:0, step:0},
            { bezeichnung: "Abholer", preis: 0.00, type:"radio", kathegorie:"Lieferoption", min:0, max:0, step:0},
            { bezeichnung: "AufUhrzeit", preis: 3.50, type:"radio", kathegorie:"Lieferoption", min:0, max:0, step:0}
		]
    };
}
/*
writeHTML(_event:Event):void{
    let k:number=0;
    while(k<Angebot.length){
        writeFielset(Angebot[k]);
        k++;
    }

}
writeFielset(_kathegorie:Produkt):void{
    let fielset:HTMLElement=document.createElement('fieldset');
    let kathegorie=`<legende>${_kathegorie}</legende>`
        writeInput()
        writeLabel();
    fildset.innerHTML=kathegorie;
    document.getElementById('').appendChild(fielset);
    let bestellung=`<p>${_kathegorie}</p>
        <ul id=${_kathegorie}></ul>`;
    document.getElementById('bestellung').appendChild(bestellung)
}
writeInput():void{
    for(){
    let input:HTMLElement=document.createElement('input');
    input.attributes('id','${}');
    let produkt=``
    input.innerHTML
    document.appendChild(input);
}
writeLabel(:void){
    let label:HTML
}
}*/
/* for(let t:number=0; t<Number(Angebot.length); t++){
                alert(Angebot.key[t])
                let div:HTMLElement=document.createElement('div')
                let bestellung:string=`<p>${Angebot[t]}</p>`;
                //<ul id=${}></ul>
               
                div.innerHTML=bestellung;
                document.getElementById('bestellung').appendChild(div);
                let fieldset:HTMLElement=document.createElement('fieldset');
                let kathegorie=`<legende>${Angebot[t]}</legende>`;
                for(let b:number=0; b<Angebot[t].length; b++){
                    kathegorie += `<input type:"${Angebot[t][b].type}" name="${Angebot[t][b].kathegorie}" id="${Angebot[t][b].bezeichnung}" preis="${Angebot[t][b].preis}">
                    <label for="${Angebot[t][b].bezeichnung}">${Angebot[t][b].bezeichnung}</label>
                    <br>`;
                };
                fieldset.innerHTML=kathegorie;
                document.getElementById('').appendChild(fieldset);
            }
        }*/