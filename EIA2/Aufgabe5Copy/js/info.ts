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
}


export let Angebot: Kathegorie
		= {
		"Behälter": [
			{ bezeichnung: "Tüte", preis: 0, type:"radio", kathegorie:"Behälter"},
			{ bezeichnung: "Becher", preis: 0, type:"radio", kathegorie:"Behälter"}
		],
		"Eissorten": [
			{ bezeichnung: "Schokolade", preis: 1, type:"checkbox", kathegorie:"Eissorten"},
            { bezeichnung: "Vanille", preis: 1, type:"checkbox", kathegorie:"Eissorten"},
            { bezeichnung: "Erdbeere", preis: 1, type:"checkbox", kathegorie:"Eissorten"},
            { bezeichnung: "Himbeere", preis: 1, type:"checkbox", kathegorie:"Eissorten"},
            { bezeichnung: "Oreo", preis: 1, type:"checkbox", kathegorie:"Eissorten"},
            { bezeichnung: "Snickers", preis: 1, type:"checkbox", kathegorie:"Eissorten"},
            { bezeichnung: "Pistazie", preis: 1, type:"checkbox", kathegorie:"Eissorten"},
            { bezeichnung: "Walnuss", preis: 1, type:"checkbox", kathegorie:"Eissorten"},
            { bezeichnung: "Raffaelo", preis: 1, type:"checkbox", kathegorie:"Eissorten"}
        ],
        "Topping": [
			{ bezeichnung: "Sahne", preis: 0.50, type:"checkbox", kathegorie:"Topping"},
            { bezeichnung: "Schockostreusel", preis: 0.30, type:"checkbox", kathegorie:"Topping"},
            { bezeichnung: "bunteStreusel", preis: 0.30, type:"checkbox", kathegorie:"Topping"},
            { bezeichnung: "Vanillesoße", preis: 0.40, type:"checkbox", kathegorie:"Topping"},
            { bezeichnung: "Schockosoße", preis: 0.40, type:"checkbox", kathegorie:"Topping"},
            { bezeichnung: "Erdbeersoße", preis: 0.40, type:"checkbox", kathegorie:"Topping"}
        ],
        "Lieferoption": [
			{ bezeichnung: "sofort", preis: 0, type:"radio", kathegorie:"Behälter"},
            { bezeichnung: "Abholer", preis: 0, type:"radio", kathegorie:"Behälter"},
            { bezeichnung: "AufUhrzeit", preis: 0, type:"radio", kathegorie:"Behälter"}
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