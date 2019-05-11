namespace EisDealer1 {


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

    export interface Produkt {
        kathegorie: string;
        bezeichnung: string;
        preis: number;
        type: string;
        min: number;
        max: number;
        step: number;
        value: string;
    }


    export let Angebot: Kathegorie
        = {
        "Behaelter": [
            { bezeichnung: "Behaelter", preis: 0, type: "radio", kathegorie: "Behaelter", min: 0, max: 0, step: 0, value: "Tuete" },
            { bezeichnung: "Behaelter", preis: 0, type: "radio", kathegorie: "Behaelter", min: 0, max: 0, step: 0, value: "Becher" }
        ],
        "Eissorten": [
            { bezeichnung: "Schokolade", preis: 1, type: "number", kathegorie: "Eissorten", min: 0, max: 10, step: 1, value: "0" },
            { bezeichnung: "Vanille", preis: 1, type: "number", kathegorie: "Eissorten", min: 0, max: 10, step: 1, value: "0" },
            { bezeichnung: "Erdbeere", preis: 1, type: "number", kathegorie: "Eissorten", min: 0, max: 10, step: 1, value: "0" },
            { bezeichnung: "Himbeere", preis: 1, type: "number", kathegorie: "Eissorten", min: 0, max: 10, step: 1, value: "0" },
            { bezeichnung: "Oreo", preis: 1, type: "number", kathegorie: "Eissorten", min: 0, max: 10, step: 1, value: "0" },
            { bezeichnung: "Snickers", preis: 1, type: "number", kathegorie: "Eissorten", min: 0, max: 10, step: 1, value: "0" },
            { bezeichnung: "Pistazie", preis: 1, type: "number", kathegorie: "Eissorten", min: 0, max: 10, step: 1, value: "0" },
            { bezeichnung: "Walnuss", preis: 1, type: "number", kathegorie: "Eissorten", min: 0, max: 10, step: 1, value: "0" },
            { bezeichnung: "Raffaelo", preis: 1, type: "number", kathegorie: "Eissorten", min: 0, max: 10, step: 1, value: "0" }
        ],
        "Topping": [
            { bezeichnung: "Sahne", preis: 0.50, type: "checkbox", kathegorie: "Topping", min: 0, max: 0, step: 0, value: "0" },
            { bezeichnung: "Schockostreusel", preis: 0.30, type: "checkbox", kathegorie: "Topping", min: 0, max: 0, step: 0, value: "0" },
            { bezeichnung: "bunteStreusel", preis: 0.30, type: "checkbox", kathegorie: "Topping", min: 0, max: 0, step: 0, value: "0" },
            { bezeichnung: "Vanillesosse", preis: 0.40, type: "checkbox", kathegorie: "Topping", min: 0, max: 0, step: 0, value: "0" },
            { bezeichnung: "Schockososse", preis: 0.40, type: "checkbox", kathegorie: "Topping", min: 0, max: 0, step: 0, value: "0" },
            { bezeichnung: "Erdbeersosse", preis: 0.40, type: "checkbox", kathegorie: "Topping", min: 0, max: 0, step: 0, value: "0" }
        ],
        "Lieferoption": [
            { bezeichnung: "Lieferoption", preis: 2.00, type: "radio", kathegorie: "Lieferoption", min: 0, max: 0, step: 0, value: "sofort" },
            { bezeichnung: "Lieferoption", preis: 0.00, type: "radio", kathegorie: "Lieferoption", min: 0, max: 0, step: 0, value: "Abholder" },
            { bezeichnung: "Lieferoption", preis: 3.50, type: "radio", kathegorie: "Lieferoption", min: 0, max: 0, step: 0, value: "AufUrzeit" }
        ]
    };
}
