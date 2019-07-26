var Endabgabe;
(function (Endabgabe) {
    document.addEventListener("DOMContentLoaded", init);
    Endabgabe.Spieler = [];
    Endabgabe.punkte = 0;
    let alles = [];
    let fps = 30;
    let timeout;
    let imageData;
    let grins;
    let schrei;
    let fischstab;
    let blubBlub;
    let geist;
    let tuete;
    function init() {
        Endabgabe.canvas = document.getElementsByTagName("canvas")[0];
        Endabgabe.crc = Endabgabe.canvas.getContext("2d");
        Endabgabe.canvas.addEventListener("click", fuettern);
        document.addEventListener('keydown', bewegMeiner);
        document.getElementById("start").addEventListener("click", spielStart);
        hintergrund();
        imageData = Endabgabe.crc.getImageData(0, 0, Endabgabe.canvas.width, Endabgabe.canvas.height);
        Endabgabe.refresh();
        alert("Dein Fisch(Gerippe):\nlässt sich mit den Pfeiltasten bewegen\nZiel:\nVersuche die anderen Fische zu fressen und an ihnen zu wachsen, ansonsten weiche ihnen aus.\nAuch die Blubberblasen können dir helfen zu wachsen.\nZuerst kannst du die lila Fische, dann die Fischstäbchen und zum Schluss die Pinken fressen.\nDen Geisterhai kannst du von Anfang an fressen, aber nimm dich in acht: Er nimmt dir deine Größe wieder!\nDie Plastiktüte entsteht, wenn du ein Fischstäbchen frisst und diese wird dich immer töten.\nViel Spaß:)");
    }
    Endabgabe.init = init;
    function spielStart() {
        for (let i = 0; i < 15; i++) { //glücklich
            grins = new Endabgabe.Gluecklich();
            alles.push(grins);
        }
        for (let i = 0; i < 4; i++) { //schrei
            schrei = new Endabgabe.Schrei();
            alles.push(schrei);
        }
        for (let i = 0; i < 2; i++) { //Geist
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
        Endabgabe.meiner = new Endabgabe.Meiner(); //der Fisch des Spielers
        alles.push(Endabgabe.meiner);
        update();
    }
    Endabgabe.spielStart = spielStart;
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
    function essen() {
        for (let i = 0; i < alles.length; i++) {
            let d = Math.hypot(alles[i].x - Endabgabe.meiner.x, alles[i].y - Endabgabe.meiner.y); //Distanz zwischen Fisch des Spielers und den anderen Fischen
            if ((Endabgabe.meiner.t == alles[i].t || Endabgabe.meiner.t > alles[i].t) && alles[i] != Endabgabe.meiner && alles[i].t != 0) {
                if (d < 30) {
                    if (Endabgabe.meiner.t > 8) {
                        if (alles[i] instanceof Endabgabe.Geist) {
                            Endabgabe.meiner.s -= 2;
                        }
                        else {
                            Endabgabe.meiner.s += 0.5;
                        }
                    }
                    //abfage was für ein Fisch gefressen wurde und abhängig davon wird ein/zwei neue Fische gezeichnet
                    if (alles[i] instanceof Endabgabe.Fischstaebchen) {
                        alles.splice(i, 1);
                        Endabgabe.meiner.t += 1; //der Typ des Fisches wird größer
                        Endabgabe.punkte += 2;
                        fischstab = new Endabgabe.Fischstaebchen();
                        alles.push(fischstab);
                        tuete = new Endabgabe.Tuete();
                        alles.push(tuete);
                    }
                    else if (alles[i] instanceof Endabgabe.Schrei) {
                        alles.splice(i, 1);
                        Endabgabe.meiner.t += 3; //der Typ des Fisches wird größer
                        Endabgabe.punkte += 3;
                        //if(meiner.t<8){
                        //  meiner.s+=0.1;
                        //alert(meiner.s);
                        // }
                        schrei = new Endabgabe.Schrei();
                        alles.push(schrei);
                    }
                    else if (alles[i] instanceof Endabgabe.Geist) {
                        alles.splice(i, 1);
                        Endabgabe.meiner.t -= 2; //der Typ des Fisches wird kleiner
                        Endabgabe.punkte += 4;
                        geist = new Endabgabe.Geist();
                        alles.push(geist);
                    }
                    else if (alles[i] instanceof Endabgabe.Gluecklich) {
                        alles.splice(i, 1);
                        Endabgabe.meiner.t += 0.5; //der Typ des Fisches wird größer
                        Endabgabe.punkte += 1;
                        // if(meiner.t<8){
                        //meiner.s+=0.1;
                        //alert(meiner.s);
                        //}
                        grins = new Endabgabe.Gluecklich();
                        alles.push(grins);
                    }
                    else if (alles[i] instanceof Endabgabe.BlubStrom) {
                        alles.splice(i, 1);
                        Endabgabe.meiner.t += 0.1; //der Typ des Fisches wird größer
                        Endabgabe.punkte += 0.5;
                        blubBlub = new Endabgabe.BlubStrom();
                        alles.push(geist);
                    }
                    else if (alles[i] instanceof Endabgabe.Tuete) {
                        stopAnimation();
                        alert("Plastik ist einfach nicht gesund");
                        Ende();
                    }
                }
            }
            else if (Endabgabe.meiner.t < alles[i].t && alles[i] != Endabgabe.meiner && alles[i].t != 0) {
                if (d < 30) { //stirb und stoppe die Animation
                    Ende();
                }
            }
        }
        return Endabgabe.punkte;
    }
    Endabgabe.essen = essen;
    function Ende() {
        alles.splice(0, 1);
        stopAnimation();
        alert("Bist du etwa gestorben?");
        Endabgabe.spielerName = prompt("Dein Score: " + Endabgabe.punkte + " Wie heißt du denn?", "...");
        if (Endabgabe.spielerName != "null" && Endabgabe.spielerName != "..." && Endabgabe.spielerName != "") {
            Endabgabe.insert();
            window.location.reload();
        }
        else {
            window.location.reload();
        }
    }
    Endabgabe.Ende = Ende;
    function stopAnimation() {
        window.clearTimeout(timeout);
    }
    function zeigScore() {
        document.getElementById("score").innerHTML = "";
        let highScore = document.createElement("div");
        highScore.innerHTML = `aktueller Punktestand: ${Endabgabe.punkte} Fischgröße: ${Endabgabe.meiner.t}`;
        document.getElementById("score").appendChild(highScore);
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
    //Steuerung des Fisches
    function bewegMeiner(_event) {
        switch (_event.keyCode) {
            case 37:
                Endabgabe.meiner.x -= 15; //links
                if (Endabgabe.meiner.x < 0) {
                    Endabgabe.meiner.x = 600;
                }
                break;
            case 38: //hoch
                Endabgabe.meiner.y -= 15;
                if (Endabgabe.meiner.y < 0) {
                    Endabgabe.meiner.y = 350;
                }
                break;
            case 39: //rechts
                Endabgabe.meiner.x += 15;
                if (Endabgabe.meiner.x > 1200) {
                    Endabgabe.meiner.x = 600;
                }
                break;
            case 40: //unten
                Endabgabe.meiner.y += 15;
                if (Endabgabe.meiner.y > 700) {
                    Endabgabe.meiner.y = 350;
                }
                break;
            default:
                Endabgabe.meiner.y += 0;
        }
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
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=canvas.js.map