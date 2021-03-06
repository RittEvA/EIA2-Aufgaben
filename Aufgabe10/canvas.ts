

document.addEventListener("DOMContentLoaded", init);
let crc: CanvasRenderingContext2D;
let canvas: HTMLCanvasElement;

function init(): void {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    hintergrund();

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

    for (let i: number = 0; i < 6; i++) {//grinse Fisch
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height - 100;
        zeichneGluecklich(x, y);
    }
    for (let i: number = 0; i < 4; i++) {//schrei Fisch
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height - 200;
        zeichneSchrei(x, y);
    }
    for (let i: number = 0; i < 3; i++) {//Gerippe
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * (Math.random() * ((700 - 500) + 1)) + 500;
        zeichneKnochen(x, y);
    }
    for (let i: number = 0; i < 2; i++) {//Meiner2
        let x: number = 500;
        let y: number = 400;
        zeichneMeiner2(x, y);
    }
    for (let i: number = 0; i < 8; i++) {//Pflanze
        let x: number = Math.random() * canvas.width;
        let y: number = 650;
        zeichnePflanze(x, y);
    }
    for (let i: number = 0; i < 5; i++) {//Fischstäbchen
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height - 400;
        zeichneFischstäbchen(x, y);
    }
    for (let i: number = 0; i < 2; i++) {//Geist
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height - 400;
        zeichneGeist(x, y);
    }
    for (let i: number = 0; i < 80; i++) {//Blubberblasen strom
        let x: number = Math.random() * (Math.random() * ((1200 - 1000) + 1)) + 700;
        let y: number = Math.random() * (Math.random() * ((700 - 20) + 1)) + 20;
        zeichneBlubStrom(x, y);
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
function zeichneBlubStrom(_x: number, _y: number): void {
    let bubber: Path2D = new Path2D();
    bubber.arc(_x, _y, Math.random() * (Math.random() * 20), 0, 2 * Math.PI);
    crc.fillStyle = "#88e1ff";
    crc.strokeStyle = "ffffff";
    crc.fill(bubber);
    crc.stroke(bubber);
}
function zeichneGluecklich(_x: number, _y: number): void {
    crc.beginPath();//Schwanzflosse
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

    crc.beginPath();//Körper
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

    crc.beginPath();//grinsen
    crc.moveTo(_x + 5, _y + 12);
    crc.quadraticCurveTo(_x + 32, _y + 10, _x + 34, _y - 10);
    crc.strokeStyle = "black";
    crc.stroke();
    crc.closePath();

    let auge1: Path2D = new Path2D();//Augapfel
    auge1.arc(_x + 22, _y - 12, 6, 0, 2 * Math.PI);
    crc.fillStyle = "#ffffff";
    crc.strokeStyle = "#ffffff";
    crc.fill(auge1);
    crc.stroke(auge1);


    let auge: Path2D = new Path2D();//Pupille
    auge.arc(_x + 22, _y - 12, 2, 0, 2 * Math.PI);
    crc.fillStyle = "black";
    crc.strokeStyle = "black";
    crc.fill(auge);
    crc.stroke(auge);

}
function zeichneGeist(_x: number, _y: number): void {
    //Flosse1
    crc.beginPath();
    crc.moveTo(_x + 58, _y + 24);
    crc.quadraticCurveTo(_x + 68, _y + 50, _x + 72, _y + 46);
    crc.lineTo(_x + 74, _y + 30);
    crc.quadraticCurveTo(_x + 72, _y + 20, _x + 58, _y + 24)
    crc.strokeStyle = "grey";
    crc.fillStyle = "grey";
    crc.fill();
    crc.stroke();
    crc.closePath();
    //Flosse2
    crc.beginPath();
    crc.moveTo(_x + 93, _y + 20);
    crc.quadraticCurveTo(_x + 110, _y + 30, _x + 130, _y + 24);
    crc.lineTo(_x + 112, _y + 18);
    crc.quadraticCurveTo(_x + 100, _y + 12, _x + 93, _y + 20);
    crc.strokeStyle = "grey";
    crc.fillStyle = "grey";
    crc.fill();
    crc.stroke();
    crc.closePath();
    //Tuch
    crc.beginPath();
    crc.moveTo(_x, _y);
    crc.quadraticCurveTo(_x + 40, _y - 20, _x + 80, _y - 20);
    crc.bezierCurveTo(_x + 84, _y - 20, _x + 90, _y - 38, _x + 94, _y - 36);
    crc.lineTo(_x + 100, _y - 18);//Rückenflosse
    crc.bezierCurveTo(_x + 112, _y - 18, _x + 128, _y - 8, _x + 140, _y - 10);
    crc.bezierCurveTo(_x + 136, _y - 24, _x + 148, _y - 30, _x + 150, _y - 40);
    crc.bezierCurveTo(_x + 156, _y - 34, _x + 150, _y - 4, _x + 160, _y + 8);//Schwanzflosse
    crc.quadraticCurveTo(_x + 162, _y + 6, _x + 160, _y + 10);
    crc.bezierCurveTo(_x + 150, _y + 8, _x + 134, _y + 20, _x + 134, _y + 8);
    //crc.moveTo(_x+136,_y+13);
    crc.bezierCurveTo(_x + 120, _y + 12, _x + 116, _y + 22, _x + 110, _y + 20);
    crc.bezierCurveTo(_x + 106, _y + 22, _x + 100, _y + 18, _x + 94, _y + 24);
    //crc.moveTo(_x+98,_y+14);
    crc.lineTo(_x + 94, _y + 24);
    crc.bezierCurveTo(_x + 86, _y + 20, _x + 82, _y + 36, _x + 74, _y + 36);
    crc.bezierCurveTo(_x + 68, _y + 36, _x + 70, _y + 24, _x + 56, _y + 26);
    crc.quadraticCurveTo(_x + 42, _y + 30, _x + 52, _y + 30);
    crc.bezierCurveTo(_x + 52, _y + 40, _x + 58, _y + 32, _x + 32, _y + 40);
    crc.quadraticCurveTo(_x + 40, _y + 20, _x + 14, _y + 14);
    crc.bezierCurveTo(_x + 12, _y + 12, _x + 22, _y + 10, _x + 8, _y + 8);
    crc.quadraticCurveTo(_x + 4, _y + 8, _x, _y);
    crc.strokeStyle = "white";
    crc.fillStyle = "white";
    crc.fill();
    crc.stroke();
    crc.closePath();
    //Auge
    crc.beginPath();
    crc.arc(_x + 20, _y - 4, 1, 0, 2 * Math.PI);
    crc.strokeStyle = "black";
    crc.fillStyle = "black";
    crc.fill();
    crc.stroke();
    crc.closePath();
    //Kieme 1
    crc.beginPath();
    crc.moveTo(_x + 64, _y - 12);
    crc.quadraticCurveTo(_x + 68, _y, _x + 66, _y + 10);
    crc.strokeStyle = "grey";
    crc.stroke();
    crc.closePath();
    //Kieme 2
    crc.beginPath();
    crc.moveTo(_x + 70, _y - 11);
    crc.quadraticCurveTo(_x + 73, _y, _x + 70, _y + 9);
    crc.strokeStyle = "grey";
    crc.stroke();
    crc.closePath();
    //Kieme 3
    crc.beginPath();
    crc.moveTo(_x + 75, _y - 11);
    crc.quadraticCurveTo(_x + 79, _y, _x + 75, _y + 11);
    crc.strokeStyle = "grey";
    crc.stroke();
    crc.closePath();
}
function zeichneSchrei(_x: number, _y: number): void {
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
function zeichneKnochen(_x: number, _y: number): void {//Gerippe
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
function zeichneFischstäbchen(_x: number, _y: number): void {
    crc.beginPath();//Seite links
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
    crc.beginPath();//oben
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
    crc.beginPath();//seite vorne
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
    crc.beginPath();//Auge 1
    crc.arc(_x + 25, _y + 10, 5, 0, 2 * Math.PI);
    crc.fillStyle = "white";
    crc.strokeStyle = "black";
    crc.fill();
    crc.stroke();
    crc.closePath();
    crc.beginPath();//Pupille 1
    crc.arc(_x + 25, _y + 10, 1, 0, 2 * Math.PI);
    crc.fillStyle = "black";
    crc.strokeStyle = "black";
    crc.fill();
    crc.stroke();
    crc.closePath();
    crc.beginPath();//Auge 2
    crc.arc(_x + 29, _y + 15, 5, 0, 2 * Math.PI);
    crc.fillStyle = "white";
    crc.strokeStyle = "black";
    crc.fill();
    crc.stroke();
    crc.closePath();
    crc.beginPath();//Pupille 2
    crc.arc(_x + 29, _y + 15, 1, 0, 2 * Math.PI);
    crc.fillStyle = "black";
    crc.strokeStyle = "black";
    crc.fill();
    crc.stroke();
    crc.closePath();
    crc.beginPath();//Rückenflosse
    crc.moveTo(_x + 40, _y + 15);
    crc.quadraticCurveTo(_x + 30, _y - 10, _x + 90, _y - 10);
    crc.quadraticCurveTo(_x + 75, _y, _x + 80, _y + 15);
    crc.closePath();
    crc.fillStyle = "#d28c28";
    crc.strokeStyle = "#d28c28";
    crc.fill();
    crc.stroke();

}
function zeichneMeiner2(_x: number, _y: number): void {//Gerippe
    //hänkel
    crc.beginPath();
    crc.moveTo(_x+13,_y-33);
    crc.lineTo(_x+25,_y-48);
    crc.bezierCurveTo(_x+30,_y-64,_x+47,_y-62,_x+52,_y-69);
    crc.quadraticCurveTo(_x+58,_y-73,_x+65,_y-59);
    crc.lineTo(_x+62,_y-57);
    crc.quadraticCurveTo(_x+59,_y-68,_x+53,_y-63);
    crc.lineTo(_x+44,_y-52);
    crc.quadraticCurveTo(_x+36,_y-53,_x+43,_y-44);
    crc.lineTo(_x+13,_y-33)
    crc.fillStyle = "#b09800";
    crc.strokeStyle = "#b09800";
    crc.fill();
    crc.stroke();
    crc.closePath();
    //Grundtüte
    crc.beginPath();
    crc.moveTo(_x,_y);
    crc.bezierCurveTo(_x,_y-60,_x+50,_y-35,_x+57,_y-55);
    crc.quadraticCurveTo(_x+85,_y-65,_x+95,_y-50);
    crc.bezierCurveTo(_x+104,_y-26,_x+75,_y-20,_x+77,_y-14);
    crc.quadraticCurveTo(_x+82,_y-4,_x+75,_y);
    crc.bezierCurveTo(_x+66,_y+24,_x+40,_y+4,_x+35,_y+7);
    crc.lineTo(_x+21,_y+15);
    crc.quadraticCurveTo(_x+14,_y+12,_x+17,_y+20);
    crc.quadraticCurveTo(_x+6,_y+20,_x+4,_y+13);
    crc.quadraticCurveTo(_x+10,_y+5,_x,_y);
    crc.fillStyle = "#ffdc00";
    crc.strokeStyle = "#b09800";
    //Hänkelloch
    crc.fill();
    crc.stroke();
    crc.beginPath();
    crc.moveTo(_x+45,_y-34);
    crc.bezierCurveTo(_x+48,_y-48,_x+62,_y-40,_x+65,_y-47);
    crc.quadraticCurveTo(_x+76,_y-57,_x+85,_y-48);
    crc.quadraticCurveTo(_x+100,_y-33,_x+80,_y-28);
    crc.bezierCurveTo(_x+68,_y-35,_x+57,_y-20,_x+50,_y-25);
    crc.quadraticCurveTo(_x+43,_y-30,_x+45,_y-34)
    crc.fillStyle = "#66d0f4";
    crc.strokeStyle = "#b09800";
    crc.fill();
    crc.stroke();
    crc.closePath();
    //Augenbraue
    crc.beginPath();
    crc.moveTo(_x+15,_y-18);
    crc.quadraticCurveTo(_x+20,_y-15,_x+22,_y-17);
    crc.lineTo(_x+33,_y-23);
    crc.lineTo(_x+40,_y-20);
    crc.lineTo(_x+34,_y-21);
    crc.lineTo(_x+18,_y-12);
    crc.lineTo(_x+15,_y-18);
    crc.fillStyle = "black";
    crc.strokeStyle = "black";
    crc.fill();
    crc.stroke();
    crc.closePath();
    //Auge: Pupille
    crc.beginPath();
    crc.arc(_x+25,_y-14,2.5,0,2*Math.PI)
    crc.fillStyle = "black";
    crc.strokeStyle = "black";
    crc.fill();
    crc.stroke();
    crc.closePath();

    
    

}
