var Endabgabe;
(function (Endabgabe) {
    document.addEventListener("DOMContentLoaded", init);
    let alles = [];
    let fps = 30;
    let imageData;
    let meiner;
    let grins;
    let schrei;
    let fischstab;
    let blubBlub;
    let geist;
    let timeout;
    Endabgabe.punkte = 0;
    function init() {
        Endabgabe.canvas = document.getElementsByTagName("canvas")[0];
        Endabgabe.canvas.addEventListener("click", fuettern);
        Endabgabe.crc = Endabgabe.canvas.getContext("2d");
        document.addEventListener('keydown', bewegMeiner);
        hintergrund();
        imageData = Endabgabe.crc.getImageData(0, 0, Endabgabe.canvas.width, Endabgabe.canvas.height);
        for (let i = 0; i < 15; i++) { //glücklich
            grins = new Endabgabe.Gluecklich();
            alles.push(grins);
        }
        for (let i = 0; i < 4; i++) { //schrei
            schrei = new Endabgabe.Schrei();
            alles.push(schrei);
        }
        /*for (let i: number = 0; i < 5; i++) {//Gerippe
            let gerippe: Knochen = new Knochen();
            alles.push(gerippe);
        }*/
        for (let i = 0; i < 2; i++) {
            geist = new Endabgabe.Geist();
            alles.push(geist);
        }
        for (let i = 0; i < 7; i++) { //Fischstäbchen
            fischstab = new Endabgabe.Fischstaebchen();
            alles.push(fischstab);
        }
        for (let i = 0; i < 80; i++) { //Blubberblasen Strom
            blubBlub = new Endabgabe.BlubStrom();
            alles.push(blubBlub);
        }
        meiner = new Endabgabe.Meiner();
        alles.push(meiner);
        //let gerippe: Knochen = new Knochen();
        //alles.push(gerippe);
        update();
    }
    Endabgabe.init = init;
    function essen() {
        for (let i = 0; i < alles.length; i++) {
            let d = Math.hypot(alles[i].x - meiner.x, alles[i].y - meiner.y); //Distanz zwischen Fisch des Spielers und den anderen Fischen
            if ((meiner.t == alles[i].t || meiner.t > alles[i].t) && alles[i] != meiner && alles[i].t != 0) {
                if (d < 30) {
                    alles.splice(i, 1);
                    meiner.s += 0.2;
                    meiner.t += 0.2;
                    Endabgabe.punkte += 1;
                    if (alles[i] instanceof Endabgabe.Fischstaebchen) {
                        fischstab = new Endabgabe.Fischstaebchen();
                        alles.push(fischstab);
                    }
                    else if (alles[i] instanceof Endabgabe.Schrei) {
                        schrei = new Endabgabe.Schrei();
                        alles.push(schrei);
                    }
                    else if (alles[i] instanceof Endabgabe.Geist) {
                        for (let i = 0; i < 3; i++) {
                            geist = new Endabgabe.Geist();
                            alles.push(geist);
                        }
                    }
                    else if (alles[i] instanceof Endabgabe.Gluecklich) {
                        grins = new Endabgabe.Gluecklich();
                        alles.push(grins);
                    }
                }
            }
            else if (meiner.t < alles[i].t && alles[i] != meiner && alles[i].t != 0) {
                if (d < 30) { //stirb und 
                    alles.splice(0, 1);
                    stopAnimation();
                    Endabgabe.spielerName = prompt("Dein Score: " + Endabgabe.punkte + " Wie heißt du denn?", "...");
                    if (Endabgabe.spielerName != "") {
                        Endabgabe.insert();
                        Endabgabe.refresh();
                    }
                }
            }
        }
        return Endabgabe.punkte;
    }
    Endabgabe.essen = essen;
    function skalieren() {
        if (meiner.t <= 0) {
            //game over
        }
        else if (meiner.t <= 3) {
            //draw();
        }
        else if (meiner.t > 3 || meiner.t <= 6) {
            //drawNew();
        }
        else if (meiner.t > 6 || meiner.t < 9) {
            //drawNewer();
        }
        else if (meiner.t == 9) {
            //drawNewerNew();
        }
        else if (meiner.t > 9) {
            //drawNewerNew();
            meiner.s += 0.2;
        }
    }
    function update() {
        startAnimation();
        Endabgabe.crc.clearRect(0, 0, Endabgabe.canvas.width, Endabgabe.canvas.height);
        Endabgabe.crc.putImageData(imageData, 0, 0);
        essen();
        zeigScore();
        for (let i = 0; i < alles.length; i++) {
            alles[i].update();
        }
    }
    function startAnimation() {
        timeout = window.setTimeout(update, 1000 / fps);
    }
    function stopAnimation() {
        window.clearTimeout(timeout);
    }
    function fuettern(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let kruemel = new Endabgabe.Futter();
        kruemel.x = x - 9;
        kruemel.y = y - 12;
        alles.push(kruemel);
        kruemel.draw();
    }
    function zeigScore() {
        document.getElementById("score").innerHTML = "";
        let highScore = document.createElement("div");
        highScore.innerHTML = `aktueller Punktestand: ${Endabgabe.punkte}`;
        document.getElementById("score").appendChild(highScore);
    }
    function hintergrund() {
        let wasser = new Path2D();
        wasser.rect(0, 0, 1200, 600);
        Endabgabe.crc.fillStyle = "#66d0f4";
        Endabgabe.crc.strokeStyle = "#66d0f4";
        Endabgabe.crc.fill(wasser);
        Endabgabe.crc.stroke(wasser);
        let boden = new Path2D();
        boden.rect(0, 600, 1200, 100);
        Endabgabe.crc.fillStyle = "#d5b25f";
        Endabgabe.crc.strokeStyle = "#d5b25f";
        Endabgabe.crc.fill(boden);
        Endabgabe.crc.stroke(boden);
        for (let i = 0; i < 15; i++) { //Kleine Blubberblasen
            let x = Math.random() * Endabgabe.canvas.width;
            let y = Math.random() * Endabgabe.canvas.height - 100;
            zeichneKleineBlub(x, y);
        }
        for (let i = 0; i < 10; i++) { //große Blubberblasen
            let x = Math.random() * Endabgabe.canvas.width;
            let y = Math.random() * Endabgabe.canvas.height - 100;
            zeichneGrosseBlub(x, y);
        }
        for (let i = 0; i < 8; i++) { //Pflanze
            let x = Math.random() * Endabgabe.canvas.width;
            let y = 650;
            zeichnePflanze(x, y);
        }
        for (let i = 0; i < 4; i++) { //stein groß
            let x = Math.random() * Endabgabe.canvas.width;
            let y = 700;
            zeichneStein2(x, y);
        }
        for (let i = 0; i < 6; i++) { //steine klein
            let x = Math.random() * Endabgabe.canvas.width;
            let y = 700;
            zeichneStein1(x, y);
        }
    }
    function zeichneStein1(_x, _y) {
        Endabgabe.crc.beginPath();
        Endabgabe.crc.moveTo(_x, _y);
        Endabgabe.crc.lineTo(_x + 110, _y);
        Endabgabe.crc.quadraticCurveTo(_x + 140, _y - 80, _x + 55, _y - 40);
        Endabgabe.crc.quadraticCurveTo(_x - 20, _y - 80, _x, _y);
        Endabgabe.crc.fillStyle = "#4b3429";
        Endabgabe.crc.strokeStyle = "#4b3429";
        Endabgabe.crc.fill();
        Endabgabe.crc.stroke();
        Endabgabe.crc.closePath();
    }
    function zeichneStein2(_x, _y) {
        Endabgabe.crc.beginPath();
        Endabgabe.crc.moveTo(_x, _y);
        Endabgabe.crc.lineTo(_x + 190, _y);
        Endabgabe.crc.quadraticCurveTo(_x + 200, _y - 170, _x + 70, _y - 60);
        Endabgabe.crc.quadraticCurveTo(_x - 10, _y - 60, _x, _y);
        Endabgabe.crc.fillStyle = "grey";
        Endabgabe.crc.strokeStyle = "grey";
        Endabgabe.crc.fill();
        Endabgabe.crc.stroke();
        Endabgabe.crc.closePath();
    }
    function zeichneKleineBlub(_x, _y) {
        let kleineBlub = new Path2D();
        kleineBlub.arc(_x, _y, 10, 0, 2 * Math.PI);
        Endabgabe.crc.fillStyle = "#88e1ff";
        Endabgabe.crc.strokeStyle = "ffffff";
        Endabgabe.crc.fill(kleineBlub);
        Endabgabe.crc.stroke(kleineBlub);
    }
    function zeichneGrosseBlub(_x, _y) {
        let grosseBlub = new Path2D();
        grosseBlub.arc(_x, _y, 30, 0, 2 * Math.PI);
        Endabgabe.crc.fillStyle = "#88e1ff";
        Endabgabe.crc.strokeStyle = "ffffff";
        Endabgabe.crc.fill(grosseBlub);
        Endabgabe.crc.stroke(grosseBlub);
    }
    function zeichnePflanze(_x, _y) {
        Endabgabe.crc.beginPath();
        Endabgabe.crc.moveTo(_x, _y);
        Endabgabe.crc.bezierCurveTo(_x + 30, _y - 30, _x - 40, _y - 110, _x + 5, _y - 165);
        Endabgabe.crc.moveTo(_x, _y);
        Endabgabe.crc.bezierCurveTo(_x + 50, _y - 38, _x, _y - 90, _x + 20, _y - 120);
        Endabgabe.crc.moveTo(_x, _y);
        Endabgabe.crc.bezierCurveTo(_x + 40, _y, _x + 40, _y - 70, _x + 80, _y - 75);
        Endabgabe.crc.moveTo(_x, _y);
        Endabgabe.crc.bezierCurveTo(_x - 30, _y - 25, _x - 10, _y - 85, _x - 55, _y - 94);
        Endabgabe.crc.moveTo(_x, _y);
        Endabgabe.crc.quadraticCurveTo(_x - 70, _y - 10, _x - 40, _y - 60);
        Endabgabe.crc.lineWidth = 10;
        Endabgabe.crc.strokeStyle = "green";
        Endabgabe.crc.stroke();
        Endabgabe.crc.closePath();
    }
    //Steuerung des Fisches
    function bewegMeiner(_event) {
        switch (_event.keyCode) {
            case 37:
                meiner.x -= 15; //links
                if (meiner.x < 0) {
                    meiner.x = 600;
                }
                break;
            case 38: //hoch
                meiner.y -= 15;
                if (meiner.y < 0) {
                    meiner.y = 350;
                }
                break;
            case 39: //rechts
                meiner.x += 15;
                if (meiner.x > 1200) {
                    meiner.x = 600;
                }
                break;
            case 40: //unten
                meiner.y += 15;
                if (meiner.y > 700) {
                    meiner.y = 350;
                }
                break;
            default:
                meiner.y += 0;
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=canvas.js.map