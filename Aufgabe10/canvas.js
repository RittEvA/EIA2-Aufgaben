document.addEventListener("DOMContentLoaded", init);
let crc;
let canvas;
function init() {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    hintergrund();
    for (let i = 0; i < 15; i++) { //Kleine Blubberblasen
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height - 100;
        kleineBlub(x, y);
    }
    for (let i = 0; i < 10; i++) { //große Blubberblasen
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height - 100;
        grosseBlub(x, y);
    }
    for (let i = 0; i < 6; i++) { //grinse Fisch
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height - 100;
        gluecklich(x, y);
    }
    for (let i = 0; i < 4; i++) { //schrei Fisch
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height - 200;
        schrei(x, y);
    }
    for (let i = 0; i < 3; i++) { //Gerippe
        let x = Math.random() * canvas.width;
        let y = Math.random() * (Math.random() * ((700 - 500) + 1)) + 500;
        knochen(x, y);
    }
    for (let i = 0; i < 8; i++) { //Pflanze
        let x = Math.random() * canvas.width;
        let y = 650;
        pflanze(x, y);
    }
    for (let i = 0; i < 5; i++) { //Fischstäbchen
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height - 400;
        fischstäbchen(x, y);
    }
    for (let i = 0; i < 80; i++) { //Blubberblasen strom
        let x = Math.random() * (Math.random() * ((1200 - 1000) + 1)) + 700;
        let y = Math.random() * (Math.random() * ((700 - 20) + 1)) + 20;
        blubStrom(x, y);
    }
    for (let i = 0; i < 4; i++) { //stein groß
        let x = Math.random() * canvas.width;
        let y = 700;
        stein2(x, y);
    }
    for (let i = 0; i < 6; i++) { //steine klein
        let x = Math.random() * canvas.width;
        let y = 700;
        stein1(x, y);
    }
}
function hintergrund() {
    let wasser = new Path2D();
    wasser.rect(0, 0, 1200, 600);
    crc.fillStyle = "#66d0f4";
    crc.strokeStyle = "#66d0f4";
    crc.fill(wasser);
    crc.stroke(wasser);
    let boden = new Path2D();
    boden.rect(0, 600, 1200, 100);
    crc.fillStyle = "#d5b25f";
    crc.strokeStyle = "#d5b25f";
    crc.fill(boden);
    crc.stroke(boden);
}
function stein1(_x, _y) {
    crc.beginPath();
    crc.moveTo(_x, _y);
    crc.lineTo(_x + 110, _y);
    crc.quadraticCurveTo(_x + 140, _y - 80, _x + 55, _y - 40);
    crc.quadraticCurveTo(_x - 20, _y - 80, _x, _y);
    crc.fillStyle = "#4b3429";
    crc.strokeStyle = "#4b3429";
    crc.fill();
    crc.stroke();
    crc.closePath();
}
function stein2(_x, _y) {
    crc.beginPath();
    crc.moveTo(_x, _y);
    crc.lineTo(_x + 190, _y);
    crc.quadraticCurveTo(_x + 200, _y - 170, _x + 70, _y - 60);
    crc.quadraticCurveTo(_x - 10, _y - 60, _x, _y);
    crc.fillStyle = "grey";
    crc.strokeStyle = "grey";
    crc.fill();
    crc.stroke();
    crc.closePath();
}
function kleineBlub(_x, _y) {
    let kleineBlub = new Path2D();
    kleineBlub.arc(_x, _y, 10, 0, 2 * Math.PI);
    crc.fillStyle = "#88e1ff";
    crc.strokeStyle = "ffffff";
    crc.fill(kleineBlub);
    crc.stroke(kleineBlub);
}
function grosseBlub(_x, _y) {
    let grosseBlub = new Path2D();
    grosseBlub.arc(_x, _y, 30, 0, 2 * Math.PI);
    crc.fillStyle = "#88e1ff";
    crc.strokeStyle = "ffffff";
    crc.fill(grosseBlub);
    crc.stroke(grosseBlub);
}
function blubStrom(_x, _y) {
    let bubber = new Path2D();
    bubber.arc(_x, _y, Math.random() * (Math.random() * 20), 0, 2 * Math.PI);
    crc.fillStyle = "#88e1ff";
    crc.strokeStyle = "ffffff";
    crc.fill(bubber);
    crc.stroke(bubber);
}
function gluecklich(_x, _y) {
    crc.beginPath(); //Schwanzflosse
    crc.moveTo(_x + 66, _y - 6);
    crc.quadraticCurveTo(_x + 78, _y - 7, _x + 82, _y - 19);
    crc.quadraticCurveTo(_x + 93, _y - 2, _x + 84, _y + 15);
    crc.quadraticCurveTo(_x + 78, _y + 3, _x + 66, _y + 3);
    crc.lineTo(_x + 66, _y - 6);
    crc.fillStyle = "red";
    crc.strokeStyle = "red";
    crc.fill();
    crc.stroke();
    crc.closePath();
    crc.beginPath(); //Körper
    crc.moveTo(_x, _y);
    crc.quadraticCurveTo(_x + 5, _y - 32, _x + 35, _y - 35);
    crc.lineTo(_x + 80, _y - 35);
    crc.bezierCurveTo(_x + 84, _y - 23, _x + 65, _y - 8, _x + 68, _y - 0);
    crc.bezierCurveTo(_x + 70, _y + 10, _x + 82, _y + 15, _x + 80, _y + 30);
    crc.lineTo(_x + 45, _y + 30);
    crc.quadraticCurveTo(_x + 3, _y + 25, _x + 0, _y + 0);
    crc.fillStyle = "#7100ac";
    crc.strokeStyle = "#7100ac";
    crc.fill();
    crc.stroke();
    crc.closePath();
    crc.beginPath(); //grinsen
    crc.moveTo(_x + 5, _y + 12);
    crc.quadraticCurveTo(_x + 32, _y + 10, _x + 34, _y - 10);
    crc.strokeStyle = "black";
    crc.stroke();
    crc.closePath();
    let auge1 = new Path2D(); //Augapfel
    auge1.arc(_x + 22, _y - 12, 6, 0, 2 * Math.PI);
    crc.fillStyle = "#ffffff";
    crc.strokeStyle = "#ffffff";
    crc.fill(auge1);
    crc.stroke(auge1);
    let auge = new Path2D(); //Pupille
    auge.arc(_x + 22, _y - 12, 2, 0, 2 * Math.PI);
    crc.fillStyle = "black";
    crc.strokeStyle = "black";
    crc.fill(auge);
    crc.stroke(auge);
}
function schrei(_x, _y) {
    //Körper
    crc.beginPath();
    crc.moveTo(_x, _y);
    crc.quadraticCurveTo(_x - 25, _y - 58, _x - 56, _y - 60);
    crc.quadraticCurveTo(_x - 115, _y - 35, _x - 140, _y + 20);
    crc.quadraticCurveTo(_x - 145, _y - 11, _x - 170, _y - 33);
    crc.quadraticCurveTo(_x - 180, _y - 5, _x - 154, _y + 30);
    crc.quadraticCurveTo(_x - 170, _y + 54, _x - 164, _y + 72);
    crc.quadraticCurveTo(_x - 140, _y + 55, _x - 144, _y + 40);
    crc.quadraticCurveTo(_x - 84, _y + 62, _x - 18, _y + 35);
    crc.quadraticCurveTo(_x - 40, _y + 45, _x - 70, _y + 35);
    crc.quadraticCurveTo(_x - 20, _y - 30, _x - 0, _y - 0);
    crc.strokeStyle = "#e84578";
    crc.fillStyle = "#e84578";
    crc.fill();
    crc.stroke();
    crc.closePath();
    //Auge
    crc.beginPath();
    crc.moveTo(_x - 45, _y - 40);
    crc.quadraticCurveTo(_x - 35, _y - 37, _x - 27, _y - 24);
    crc.quadraticCurveTo(_x - 40, _y - 32, _x - 40, _y - 31);
    crc.strokeStyle = "black";
    crc.stroke();
    crc.closePath();
    //Flosse
    crc.beginPath();
    crc.moveTo(_x - 90, _y + 42);
    crc.quadraticCurveTo(_x - 80, _y + 55, _x - 119, _y + 78);
    crc.quadraticCurveTo(_x - 115, _y + 55, _x - 95, _y + 42);
    crc.strokeStyle = "#e84578";
    crc.fillStyle = "#e84578";
    crc.fill();
    crc.stroke();
    crc.closePath();
}
function knochen(_x, _y) {
    //Kopf
    crc.beginPath();
    crc.moveTo(_x, _y);
    crc.quadraticCurveTo(_x - 20, _y - 25, _x - 55, _y - 52);
    crc.quadraticCurveTo(_x - 40, _y - 0, _x - 48, _y + 35);
    crc.quadraticCurveTo(_x - 20, _y + 25, _x - 4, _y + 10);
    crc.lineTo(_x - 20, _y + 9);
    crc.lineTo(_x, _y);
    crc.fillStyle = "lightgray";
    crc.strokeStyle = "lightgray";
    crc.fill();
    crc.stroke();
    //Körper
    crc.beginPath();
    crc.moveTo(_x - 40, _y - 7);
    crc.lineTo(_x - 60, _y - 5);
    crc.quadraticCurveTo(_x - 62, _y - 20, _x - 73, _y - 28);
    crc.quadraticCurveTo(_x - 65, _y - 20, _x - 66, _y - 4);
    crc.lineTo(_x - 80, _y - 3);
    crc.quadraticCurveTo(_x - 80, _y - 22, _x - 90, _y - 22);
    crc.quadraticCurveTo(_x - 85, _y - 20, _x - 88, _y - 2);
    crc.lineTo(_x - 100, _y);
    crc.quadraticCurveTo(_x - 100, _y - 15, _x - 110, _y - 17);
    crc.quadraticCurveTo(_x - 106, _y - 12, _x - 110, _y);
    crc.lineTo(_x - 120, _y + 1);
    crc.lineTo(_x - 145, _y - 40);
    crc.lineTo(_x - 148, _y - 8);
    crc.lineTo(_x - 136, _y + 1);
    crc.lineTo(_x - 148, _y + 15);
    crc.lineTo(_x - 145, _y + 48);
    crc.lineTo(_x - 120, _y + 8);
    crc.lineTo(_x - 110, _y + 8);
    crc.quadraticCurveTo(_x - 106, _y + 12, _x - 110, _y + 24);
    crc.quadraticCurveTo(_x - 100, _y + 15, _x - 100, _y + 9);
    crc.lineTo(_x - 88, _y + 10);
    crc.quadraticCurveTo(_x - 85, _y + 20, _x - 90, _y + 28);
    crc.quadraticCurveTo(_x - 80, _y + 22, _x - 80, _y + 11);
    crc.lineTo(_x - 66, _y + 12);
    crc.quadraticCurveTo(_x - 65, _y + 20, _x - 66, _y + 32);
    crc.quadraticCurveTo(_x - 62, _y + 20, _x - 60, _y + 13);
    crc.lineTo(_x - 40, _y + 14);
    crc.closePath();
    crc.fill();
    crc.stroke();
    //Auge
    crc.beginPath();
    crc.arc(_x - 25, _y - 5, 10, 0, 2 * Math.PI);
    crc.fillStyle = "white";
    crc.strokeStyle = "white";
    crc.fill();
    crc.stroke();
    crc.closePath();
    //Pupille
    crc.beginPath();
    crc.arc(_x - 25, _y - 5, 5, 0, 2 * Math.PI);
    crc.fillStyle = "black";
    crc.strokeStyle = "black";
    crc.fill();
    crc.stroke();
    crc.closePath();
}
function pflanze(_x, _y) {
    crc.beginPath();
    crc.moveTo(_x, _y);
    crc.bezierCurveTo(_x + 30, _y - 30, _x - 40, _y - 110, _x + 5, _y - 165);
    crc.moveTo(_x, _y);
    crc.bezierCurveTo(_x + 50, _y - 38, _x, _y - 90, _x + 20, _y - 120);
    crc.moveTo(_x, _y);
    crc.bezierCurveTo(_x + 40, _y, _x + 40, _y - 70, _x + 80, _y - 75);
    crc.moveTo(_x, _y);
    crc.bezierCurveTo(_x - 30, _y - 25, _x - 10, _y - 85, _x - 55, _y - 94);
    crc.moveTo(_x, _y);
    crc.quadraticCurveTo(_x - 70, _y - 10, _x - 40, _y - 60);
    crc.lineWidth = 10;
    crc.strokeStyle = "green";
    crc.stroke();
    crc.closePath();
}
function fischstäbchen(_x, _y) {
    crc.beginPath(); //Seite links
    crc.moveTo(_x, _y);
    crc.lineTo(_x + 25, _y + 30);
    crc.lineTo(_x + 25, _y + 55);
    crc.lineTo(_x, _y + 25);
    crc.lineTo(_x, _y);
    crc.fillStyle = "#d28c28";
    crc.strokeStyle = "#d28c28";
    crc.lineWidth = 1;
    crc.fill();
    crc.stroke();
    crc.closePath();
    crc.beginPath(); //oben
    crc.moveTo(_x, _y);
    crc.lineTo(_x + 25, _y + 30);
    crc.lineTo(_x + 125, _y + 30);
    crc.lineTo(_x + 100, _y);
    crc.lineTo(_x, _y);
    crc.fillStyle = "#ffab31";
    crc.strokeStyle = "#ffab31";
    crc.fill();
    crc.stroke();
    crc.closePath();
    crc.beginPath(); //seite vorne
    crc.moveTo(_x + 25, _y + 30);
    crc.lineTo(_x + 125, _y + 30);
    crc.lineTo(_x + 125, _y + 55);
    crc.lineTo(_x + 25, _y + 55);
    crc.lineTo(_x + 25, _y + 30);
    crc.fillStyle = "#d28c28";
    crc.strokeStyle = "#d28c28";
    crc.fill();
    crc.stroke();
    crc.closePath();
    crc.beginPath(); //Auge 1
    crc.arc(_x + 25, _y + 10, 5, 0, 2 * Math.PI);
    crc.fillStyle = "white";
    crc.strokeStyle = "black";
    crc.fill();
    crc.stroke();
    crc.closePath();
    crc.beginPath(); //Pupille 1
    crc.arc(_x + 25, _y + 10, 1, 0, 2 * Math.PI);
    crc.fillStyle = "black";
    crc.strokeStyle = "black";
    crc.fill();
    crc.stroke();
    crc.closePath();
    crc.beginPath(); //Auge 2
    crc.arc(_x + 29, _y + 15, 5, 0, 2 * Math.PI);
    crc.fillStyle = "white";
    crc.strokeStyle = "black";
    crc.fill();
    crc.stroke();
    crc.closePath();
    crc.beginPath(); //Pupille 2
    crc.arc(_x + 29, _y + 15, 1, 0, 2 * Math.PI);
    crc.fillStyle = "black";
    crc.strokeStyle = "black";
    crc.fill();
    crc.stroke();
    crc.closePath();
    crc.beginPath(); //Rückenflosse
    crc.moveTo(_x + 40, _y + 15);
    crc.quadraticCurveTo(_x + 30, _y - 10, _x + 90, _y - 10);
    crc.quadraticCurveTo(_x + 75, _y, _x + 80, _y + 15);
    crc.closePath();
    crc.fillStyle = "#d28c28";
    crc.strokeStyle = "#d28c28";
    crc.fill();
    crc.stroke();
}
//# sourceMappingURL=canvas.js.map