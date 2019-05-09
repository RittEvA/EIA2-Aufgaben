namespace EisDealer{

   /*
Aufgabe: Aufgabe 6, Eis Dealer reloaded
Name: Eva Ritt
Matrikel: 261414
Datum: 01.05.2019
	
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
		"Behaelter": [
			{ bezeichnung: "Tuete", preis: 0, type:"radio", kathegorie:"Behaelter", min:0, max:0, step:0},
			{ bezeichnung: "Becher", preis: 0, type:"radio", kathegorie:"Behaelter",min:0, max:0, step:0}
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
