var Endabgabe;
(function (Endabgabe) {
    class Geist extends Endabgabe.Bewegung {
        constructor() {
            super();
            this.x = Math.random() * Endabgabe.canvas.width;
            this.y = Math.random() * Endabgabe.canvas.height - 100;
            this.t = 1;
            this.dx = Math.random() * 5 - 5;
            this.dy = 0;
        }
        draw() {
            //Flosse1
            Endabgabe.crc.beginPath();
            Endabgabe.crc.moveTo(this.x + 58, this.y + 24);
            Endabgabe.crc.quadraticCurveTo(this.x + 68, this.y + 50, this.x + 72, this.y + 46);
            Endabgabe.crc.lineTo(this.x + 74, this.y + 30);
            Endabgabe.crc.quadraticCurveTo(this.x + 72, this.y + 20, this.x + 58, this.y + 24);
            Endabgabe.crc.strokeStyle = "grey";
            Endabgabe.crc.fillStyle = "grey";
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
            //Flosse2
            Endabgabe.crc.beginPath();
            Endabgabe.crc.moveTo(this.x + 93, this.y + 20);
            Endabgabe.crc.quadraticCurveTo(this.x + 110, this.y + 30, this.x + 130, this.y + 24);
            Endabgabe.crc.lineTo(this.x + 112, this.y + 18);
            Endabgabe.crc.quadraticCurveTo(this.x + 100, this.y + 12, this.x + 93, this.y + 20);
            Endabgabe.crc.strokeStyle = "grey";
            Endabgabe.crc.fillStyle = "grey";
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
            //Tuch
            Endabgabe.crc.beginPath();
            Endabgabe.crc.moveTo(this.x, this.y);
            Endabgabe.crc.quadraticCurveTo(this.x + 40, this.y - 20, this.x + 80, this.y - 20);
            Endabgabe.crc.bezierCurveTo(this.x + 84, this.y - 20, this.x + 90, this.y - 38, this.x + 94, this.y - 36);
            Endabgabe.crc.lineTo(this.x + 100, this.y - 18); //Rückenflosse
            Endabgabe.crc.bezierCurveTo(this.x + 112, this.y - 18, this.x + 128, this.y - 8, this.x + 140, this.y - 10);
            Endabgabe.crc.bezierCurveTo(this.x + 136, this.y - 24, this.x + 148, this.y - 30, this.x + 150, this.y - 40);
            Endabgabe.crc.bezierCurveTo(this.x + 156, this.y - 34, this.x + 150, this.y - 4, this.x + 160, this.y + 8); //Schwanzflosse
            Endabgabe.crc.quadraticCurveTo(this.x + 162, this.y + 6, this.x + 160, this.y + 10);
            Endabgabe.crc.bezierCurveTo(this.x + 150, this.y + 8, this.x + 134, this.y + 20, this.x + 134, this.y + 8);
            //crc.moveTo(this.x+136,this.y+13);
            Endabgabe.crc.bezierCurveTo(this.x + 120, this.y + 12, this.x + 116, this.y + 22, this.x + 110, this.y + 20);
            Endabgabe.crc.bezierCurveTo(this.x + 106, this.y + 22, this.x + 100, this.y + 18, this.x + 94, this.y + 24);
            //crc.moveTo(this.x+98,this.y+14);
            Endabgabe.crc.lineTo(this.x + 94, this.y + 24);
            Endabgabe.crc.bezierCurveTo(this.x + 86, this.y + 20, this.x + 82, this.y + 36, this.x + 74, this.y + 36);
            Endabgabe.crc.bezierCurveTo(this.x + 68, this.y + 36, this.x + 70, this.y + 24, this.x + 56, this.y + 26);
            Endabgabe.crc.quadraticCurveTo(this.x + 42, this.y + 30, this.x + 52, this.y + 30);
            Endabgabe.crc.bezierCurveTo(this.x + 52, this.y + 40, this.x + 58, this.y + 32, this.x + 32, this.y + 40);
            Endabgabe.crc.quadraticCurveTo(this.x + 40, this.y + 20, this.x + 14, this.y + 14);
            Endabgabe.crc.bezierCurveTo(this.x + 12, this.y + 12, this.x + 22, this.y + 10, this.x + 8, this.y + 8);
            Endabgabe.crc.quadraticCurveTo(this.x + 4, this.y + 8, this.x, this.y);
            Endabgabe.crc.strokeStyle = "white";
            Endabgabe.crc.fillStyle = "white";
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
            //Auge
            Endabgabe.crc.beginPath();
            Endabgabe.crc.arc(this.x + 20, this.y - 4, 1, 0, 2 * Math.PI);
            Endabgabe.crc.strokeStyle = "black";
            Endabgabe.crc.fillStyle = "black";
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
            //Kieme 1
            Endabgabe.crc.beginPath();
            Endabgabe.crc.moveTo(this.x + 64, this.y - 12);
            Endabgabe.crc.quadraticCurveTo(this.x + 68, this.y, this.x + 66, this.y + 10);
            Endabgabe.crc.strokeStyle = "grey";
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
            //Kieme 2
            Endabgabe.crc.beginPath();
            Endabgabe.crc.moveTo(this.x + 70, this.y - 11);
            Endabgabe.crc.quadraticCurveTo(this.x + 73, this.y, this.x + 70, this.y + 9);
            Endabgabe.crc.strokeStyle = "grey";
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
            //Kieme 3
            Endabgabe.crc.beginPath();
            Endabgabe.crc.moveTo(this.x + 75, this.y - 11);
            Endabgabe.crc.quadraticCurveTo(this.x + 79, this.y, this.x + 75, this.y + 11);
            Endabgabe.crc.strokeStyle = "grey";
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            if (this.x < -100) {
                this.y = Math.random() * 700 - 100;
                this.x = 1220;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }
    Endabgabe.Geist = Geist;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Geist.js.map