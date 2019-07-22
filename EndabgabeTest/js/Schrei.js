var Endabgabe;
(function (Endabgabe) {
    class Schrei extends Endabgabe.Bewegung {
        constructor() {
            super();
            this.x = Math.random() * Endabgabe.canvas.width;
            this.y = Math.random() * Endabgabe.canvas.height - 200;
            this.t = 5;
            this.dx = Math.random() * 15 - 15;
            this.dy = 0;
        }
        draw() {
            //Körper
            Endabgabe.crc.beginPath();
            Endabgabe.crc.moveTo(this.x, this.y);
            Endabgabe.crc.quadraticCurveTo(this.x + 25, this.y - 58, this.x + 56, this.y - 60);
            Endabgabe.crc.quadraticCurveTo(this.x + 115, this.y - 35, this.x + 140, this.y + 20);
            Endabgabe.crc.quadraticCurveTo(this.x + 145, this.y - 11, this.x + 170, this.y - 33);
            Endabgabe.crc.quadraticCurveTo(this.x + 180, this.y - 5, this.x + 154, this.y + 30);
            Endabgabe.crc.quadraticCurveTo(this.x + 170, this.y + 54, this.x + 164, this.y + 72);
            Endabgabe.crc.quadraticCurveTo(this.x + 140, this.y + 55, this.x + 144, this.y + 40);
            Endabgabe.crc.quadraticCurveTo(this.x + 84, this.y + 62, this.x + 18, this.y + 35);
            Endabgabe.crc.quadraticCurveTo(this.x + 40, this.y + 45, this.x + 70, this.y + 35);
            Endabgabe.crc.quadraticCurveTo(this.x + 20, this.y - 30, this.x + 0, this.y - 0);
            Endabgabe.crc.strokeStyle = "#e84578";
            Endabgabe.crc.fillStyle = "#e84578";
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
            //Auge
            Endabgabe.crc.beginPath();
            Endabgabe.crc.moveTo(this.x + 45, this.y - 40);
            Endabgabe.crc.quadraticCurveTo(this.x + 35, this.y - 37, this.x + 27, this.y - 24);
            Endabgabe.crc.quadraticCurveTo(this.x + 40, this.y - 32, this.x + 40, this.y - 31);
            Endabgabe.crc.strokeStyle = "black";
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
            //Flosse
            Endabgabe.crc.beginPath();
            Endabgabe.crc.moveTo(this.x + 90, this.y + 42);
            Endabgabe.crc.quadraticCurveTo(this.x + 80, this.y + 55, this.x + 119, this.y + 78);
            Endabgabe.crc.quadraticCurveTo(this.x + 115, this.y + 55, this.x + 95, this.y + 42);
            Endabgabe.crc.strokeStyle = "#e84578";
            Endabgabe.crc.fillStyle = "#e84578";
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
        }
        move() {
            if (this.x > 1300) {
                this.y = Math.random() * 700 - 200;
                this.x = 0;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }
    Endabgabe.Schrei = Schrei;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Schrei.js.map