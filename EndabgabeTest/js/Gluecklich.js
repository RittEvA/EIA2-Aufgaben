var Endabgabe;
(function (Endabgabe) {
    class Gluecklich extends Endabgabe.Bewegung {
        constructor() {
            super();
            this.x = Math.random() * Endabgabe.canvas.width;
            this.y = Math.random() * Endabgabe.canvas.height - 100;
            this.t = 0.7;
            this.dx = Math.random() * 10 - 10;
            this.dy = 0;
        }
        draw() {
            Endabgabe.crc.beginPath(); //Schwanzflosse
            Endabgabe.crc.moveTo(this.x + 66, this.y - 6);
            Endabgabe.crc.quadraticCurveTo(this.x + 78, this.y - 7, this.x + 82, this.y - 19);
            Endabgabe.crc.quadraticCurveTo(this.x + 93, this.y - 2, this.x + 84, this.y + 15);
            Endabgabe.crc.quadraticCurveTo(this.x + 78, this.y + 3, this.x + 66, this.y + 3);
            Endabgabe.crc.lineTo(this.x + 66, this.y - 6);
            Endabgabe.crc.fillStyle = "red";
            Endabgabe.crc.strokeStyle = "red";
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
            Endabgabe.crc.beginPath(); //Körper
            Endabgabe.crc.moveTo(this.x, this.y);
            Endabgabe.crc.quadraticCurveTo(this.x + 5, this.y - 32, this.x + 35, this.y - 35);
            Endabgabe.crc.lineTo(this.x + 80, this.y - 35);
            Endabgabe.crc.bezierCurveTo(this.x + 84, this.y - 23, this.x + 65, this.y - 8, this.x + 68, this.y - 0);
            Endabgabe.crc.bezierCurveTo(this.x + 70, this.y + 10, this.x + 82, this.y + 15, this.x + 80, this.y + 30);
            Endabgabe.crc.lineTo(this.x + 45, this.y + 30);
            Endabgabe.crc.quadraticCurveTo(this.x + 3, this.y + 25, this.x + 0, this.y + 0);
            Endabgabe.crc.fillStyle = "#7100ac";
            Endabgabe.crc.strokeStyle = "#7100ac";
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
            Endabgabe.crc.beginPath(); //grinsen
            Endabgabe.crc.moveTo(this.x + 5, this.y + 12);
            Endabgabe.crc.quadraticCurveTo(this.x + 32, this.y + 10, this.x + 34, this.y - 10);
            Endabgabe.crc.strokeStyle = "black";
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
            let auge1 = new Path2D(); //Augapfel
            auge1.arc(this.x + 22, this.y - 12, 6, 0, 2 * Math.PI);
            Endabgabe.crc.fillStyle = "#ffffff";
            Endabgabe.crc.strokeStyle = "#ffffff";
            Endabgabe.crc.fill(auge1);
            Endabgabe.crc.stroke(auge1);
            let auge = new Path2D(); //Pupille
            auge.arc(this.x + 22, this.y - 12, 2, 0, 2 * Math.PI);
            Endabgabe.crc.fillStyle = "black";
            Endabgabe.crc.strokeStyle = "black";
            Endabgabe.crc.fill(auge);
            Endabgabe.crc.stroke(auge);
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
    Endabgabe.Gluecklich = Gluecklich;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Gluecklich.js.map