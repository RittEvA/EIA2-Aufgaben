namespace Endabgabe {

    document.addEventListener("DOMContentLoaded", init);

    export let Spieler: string[] = [];
    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let spielerName: string;
    export let punkte: number = 0;
    export let meiner: Meiner;
    let alles: Objekt[] = [];
    let fps: number = 30;
    let timeout: number;
    let imageData: ImageData;
    let grins: Gluecklich;
    let schrei: Schrei;
    let fischstab: Fischstaebchen;
    let blubBlub: BlubStrom;
    let geist: Geist;
    let tuete: Tuete;

    export function init() {//lädt den Start Bildschirm
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", fuettern);
        crc = canvas.getContext("2d");
        document.addEventListener('keydown', bewegMeiner)
        hintergrund();
        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);
        document.getElementById("start").addEventListener("click", spielStart);
        refresh();

    }
    export function spielStart(): void {//die Fische werden gezeichnet und die Update gestartet
        
        for (let i: number = 0; i < 15; i++) {//glücklich
            grins = new Gluecklich();
            alles.push(grins);
        }

        for (let i: number = 0; i < 4; i++) {//schrei
            schrei = new Schrei();
            alles.push(schrei);
        }

        for (let i: number = 0; i < 2; i++) {//Geist
            geist = new Geist();
            alles.push(geist);
        }
        for (let i: number = 0; i < 7; i++) {//Fischstäbchen
            fischstab = new Fischstaebchen();
            alles.push(fischstab);
        }

        for (let i: number = 0; i < 80; i++) {//Blubberblasen Strom
            blubBlub = new BlubStrom();
            alles.push(blubBlub);
        }
        meiner = new Meiner();//der Fisch des Spielers
        alles.push(meiner);

       
        //let gerippe: Knochen = new Knochen();
        //alles.push(gerippe);
        update();
        //refresh();

    }

    function update(): void {//um die Animation am laufen zu halten
        startAnimation();

        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        essen();

        zeigScore();

        for (let i: number = 0; i < alles.length; i++) {
            alles[i].update();
        }
    }

    function startAnimation(): void {//Funktion mit Timeoutvariable
        timeout = window.setTimeout(update, 1000 / fps)
    }

    export function essen(): number {//es wird abgefragt welcher Fisch in meiner Nähe ist und ob er größer ist als ich
        for (let i: number = 0; i < alles.length; i++) {
            let d: number = Math.hypot(alles[i].x - meiner.x, alles[i].y - meiner.y);//Distanz zwischen Fisch des Spielers und den anderen Fischen
            if ((meiner.t == alles[i].t || meiner.t > alles[i].t) && alles[i] != meiner && alles[i].t != 0) {
                if (d < 30) {
                    //meiner.s += 0.2;//zur Skalierung/zum Wachsen
                    //abfage was für ein Fisch gefressen wurde und abhängig davon wird ein/zwei neue Fische gezeichnet
                    if (alles[i] instanceof Fischstaebchen) {
                        alles.splice(i, 1);
                        meiner.t += 0.5;//der Typ des Fisches wird größer
                        punkte += 2;
                        fischstab = new Fischstaebchen();
                        alles.push(fischstab);
                        tuete = new Tuete();
                        alles.push(tuete);
                    }
                    else if (alles[i] instanceof Schrei) {
                        alles.splice(i, 1);
                        meiner.t += 3;//der Typ des Fisches wird größer
                        punkte += 3;
                        schrei = new Schrei();
                        alles.push(schrei);
                    }
                    else if (alles[i] instanceof Geist) {
                        alles.splice(i, 1);
                        meiner.t -= 2;//der Typ des Fisches wird größer
                        punkte += 4;
                        geist = new Geist();
                        alles.push(geist);

                    }
                    else if (alles[i] instanceof Gluecklich) {
                        alles.splice(i, 1);
                        meiner.t += 0.5;//der Typ des Fisches wird größer
                        punkte += 1;
                        grins = new Gluecklich();
                        alles.push(grins);
                    }
                    else if (alles[i] instanceof BlubStrom) {
                        alles.splice(i, 1);
                        meiner.t += 0.1;//der Typ des Fisches wird größer
                        punkte += 0.5;
                        blubBlub = new BlubStrom();
                        alles.push(geist);
                    }

                    else if (alles[i] instanceof Tuete) {
                        stopAnimation();
                        alert("Plastik ist einfach nicht gesund");
                        Ende();
                    }
                }

            }
            else if (meiner.t < alles[i].t && alles[i] != meiner && alles[i].t != 0) {
                if (d < 30) {//stirb und stoppe die Animation
                    Ende();
                }
            }
        } return punkte;
    }

    export function Ende() {
        alles.splice(0, 1);
        stopAnimation();
        alert("Bist du etwa gestorben?");
        spielerName = prompt("Dein Score: " + punkte + " Wie heißt du denn?", "...");
        if (spielerName != "null" && spielerName != "..." && spielerName != "") {
            insert();
            window.location.reload();
        }
        else {
            window.location.reload();
        }
    }


    function stopAnimation(): void {//aufhören der Animation über die Timeoutvariable
        window.clearTimeout(timeout)
    }

    function zeigScore(): void {//stellt deine aktuelle Punktzahl über dem Canvas dar
        document.getElementById("score").innerHTML = "";
        let highScore = document.createElement("div");
        highScore.innerHTML = `aktueller Punktestand: ${punkte} Fischgröße: ${meiner.t}`;
        document.getElementById("score").appendChild(highScore);
    }

    function fuettern(_event: MouseEvent): void {//bei Klick auf den Canvas wir Futter gezeichnet
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let kruemel: Futter = new Futter();
        kruemel.x = x - 9;
        kruemel.y = y - 12;
        alles.push(kruemel);
        kruemel.draw();
    }

    //Steuerung des Fisches
    function bewegMeiner(_event: KeyboardEvent) {
        switch (_event.keyCode) {
            case 37:
                meiner.x -= 15;//links
                if (meiner.x < 0) {
                    meiner.x = 600;
                }
                break;

            case 38://hoch
                meiner.y -= 15;
                if (meiner.y < 0) {
                    meiner.y = 350;
                }
                break;

            case 39://rechts
                meiner.x += 15;
                if (meiner.x > 1200) {
                    meiner.x = 600;
                }
                break;

            case 40://unten
                meiner.y += 15;
                if (meiner.y > 700) {
                    meiner.y = 350;
                }
                break;

            default:
                meiner.y += 0;
        }
    }

    function hintergrund(): void {
        let wasser: Path2D = new Path2D();
        wasser.rect(0, 0, 1200, 600);
        crc.fillStyle = "#66d0f4";
        crc.strokeStyle = "#66d0f4";
        crc.fill(wasser);
        crc.stroke(wasser);

        let boden: Path2D = new Path2D();
        boden.rect(0, 600, 1200, 100);
        crc.fillStyle = "#d5b25f";
        crc.strokeStyle = "#d5b25f";
        crc.fill(boden);
        crc.stroke(boden);

        for (let i: number = 0; i < 15; i++) {//Kleine Blubberblasen
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height - 100;
            zeichneKleineBlub(x, y);
        }

        for (let i: number = 0; i < 10; i++) {//große Blubberblasen
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height - 100;
            zeichneGrosseBlub(x, y);
        }

        for (let i: number = 0; i < 8; i++) {//Pflanze
            let x: number = Math.random() * canvas.width;
            let y: number = 650;
            zeichnePflanze(x, y);
        }

        for (let i: number = 0; i < 4; i++) {//stein groß
            let x: number = Math.random() * canvas.width;
            let y: number = 700;
            zeichneStein2(x, y);
        }

        for (let i: number = 0; i < 6; i++) {//steine klein
            let x: number = Math.random() * canvas.width;
            let y: number = 700;
            zeichneStein1(x, y);
        }

    }
    function zeichneStein1(_x: number, _y: number): void {
        crc.beginPath();
        crc.moveTo(_x, _y);
        crc.lineTo(_x + 110, _y);
        crc.quadraticCurveTo(_x + 140, _y - 80, _x + 55, _y - 40)
        crc.quadraticCurveTo(_x - 20, _y - 80, _x, _y);
        crc.fillStyle = "#4b3429";
        crc.strokeStyle = "#4b3429";
        crc.fill();
        crc.stroke();
        crc.closePath();
    }

    function zeichneStein2(_x: number, _y: number): void {
        crc.beginPath();
        crc.moveTo(_x, _y);
        crc.lineTo(_x + 190, _y);
        crc.quadraticCurveTo(_x + 200, _y - 170, _x + 70, _y - 60)
        crc.quadraticCurveTo(_x - 10, _y - 60, _x, _y);
        crc.fillStyle = "grey";
        crc.strokeStyle = "grey";
        crc.fill();
        crc.stroke();
        crc.closePath();
    }

    function zeichneKleineBlub(_x: number, _y: number): void {
        let kleineBlub: Path2D = new Path2D();
        kleineBlub.arc(_x, _y, 10, 0, 2 * Math.PI);
        crc.fillStyle = "#88e1ff";
        crc.strokeStyle = "ffffff";
        crc.fill(kleineBlub);
        crc.stroke(kleineBlub);
    }

    function zeichneGrosseBlub(_x: number, _y: number): void {
        let grosseBlub: Path2D = new Path2D();
        grosseBlub.arc(_x, _y, 30, 0, 2 * Math.PI);
        crc.fillStyle = "#88e1ff";
        crc.strokeStyle = "ffffff";
        crc.fill(grosseBlub);
        crc.stroke(grosseBlub);
    }

    function zeichnePflanze(_x: number, _y: number): void {//Wasserpflanzen
        crc.beginPath();
        crc.moveTo(_x, _y)
        crc.bezierCurveTo(_x + 30, _y - 30, _x - 40, _y - 110, _x + 5, _y - 165);
        crc.moveTo(_x, _y);
        crc.bezierCurveTo(_x + 50, _y - 38, _x, _y - 90, _x + 20, _y - 120);
        crc.moveTo(_x, _y);
        crc.bezierCurveTo(_x + 40, _y, _x + 40, _y - 70, _x + 80, _y - 75);
        crc.moveTo(_x, _y);
        crc.bezierCurveTo(_x - 30, _y - 25, _x - 10, _y - 85, _x - 55, _y - 94);
        crc.moveTo(_x, _y);
        crc.quadraticCurveTo(_x - 70, _y - 10, _x - 40, _y - 60)
        crc.lineWidth = 10;
        crc.strokeStyle = "green";
        crc.stroke();
        crc.closePath();
    }
}
