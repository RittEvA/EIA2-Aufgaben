var Endabgabe;
(function (Endabgabe) {
    class Fischstaebchen extends Endabgabe.Bewegung {
        constructor() {
            super();
            this.y = Math.random() * Endabgabe.canvas.width;
            this.x = Math.random() * Endabgabe.canvas.height - 300;
            this.t = 4;
            this.dx = Math.random() * 10 - 10;
            this.dy = 0;
        }
        draw() {
            Endabgabe.crc.beginPath(); //Seite links
            Endabgabe.crc.moveTo(this.x, this.y);
            Endabgabe.crc.lineTo(this.x + 25, this.y + 30);
            Endabgabe.crc.lineTo(this.x + 25, this.y + 55);
            Endabgabe.crc.lineTo(this.x, this.y + 25);
            Endabgabe.crc.lineTo(this.x, this.y);
            Endabgabe.crc.fillStyle = "#d28c28";
            Endabgabe.crc.strokeStyle = "#d28c28";
            Endabgabe.crc.lineWidth = 1;
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
            Endabgabe.crc.beginPath(); //oben
            Endabgabe.crc.moveTo(this.x, this.y);
            Endabgabe.crc.lineTo(this.x + 25, this.y + 30);
            Endabgabe.crc.lineTo(this.x + 125, this.y + 30);
            Endabgabe.crc.lineTo(this.x + 100, this.y);
            Endabgabe.crc.lineTo(this.x, this.y);
            Endabgabe.crc.fillStyle = "#ffab31";
            Endabgabe.crc.strokeStyle = "#ffab31";
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
            Endabgabe.crc.beginPath(); //seite vorne
            Endabgabe.crc.moveTo(this.x + 25, this.y + 30);
            Endabgabe.crc.lineTo(this.x + 125, this.y + 30);
            Endabgabe.crc.lineTo(this.x + 125, this.y + 55);
            Endabgabe.crc.lineTo(this.x + 25, this.y + 55);
            Endabgabe.crc.lineTo(this.x + 25, this.y + 30);
            Endabgabe.crc.fillStyle = "#d28c28";
            Endabgabe.crc.strokeStyle = "#d28c28";
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
            Endabgabe.crc.beginPath(); //Auge 1
            Endabgabe.crc.arc(this.x + 25, this.y + 10, 5, 0, 2 * Math.PI);
            Endabgabe.crc.fillStyle = "white";
            Endabgabe.crc.strokeStyle = "black";
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
            Endabgabe.crc.beginPath(); //Pupille 1
            Endabgabe.crc.arc(this.x + 25, this.y + 10, 1, 0, 2 * Math.PI);
            Endabgabe.crc.fillStyle = "black";
            Endabgabe.crc.strokeStyle = "black";
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
            Endabgabe.crc.beginPath(); //Auge 2
            Endabgabe.crc.arc(this.x + 29, this.y + 15, 5, 0, 2 * Math.PI);
            Endabgabe.crc.fillStyle = "white";
            Endabgabe.crc.strokeStyle = "black";
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
            Endabgabe.crc.beginPath(); //Pupille 2
            Endabgabe.crc.arc(this.x + 29, this.y + 15, 1, 0, 2 * Math.PI);
            Endabgabe.crc.fillStyle = "black";
            Endabgabe.crc.strokeStyle = "black";
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
            Endabgabe.crc.beginPath(); //Rückenflosse
            Endabgabe.crc.moveTo(this.x + 40, this.y + 15);
            Endabgabe.crc.quadraticCurveTo(this.x + 30, this.y - 10, this.x + 90, this.y - 10);
            Endabgabe.crc.quadraticCurveTo(this.x + 75, this.y, this.x + 80, this.y + 15);
            Endabgabe.crc.closePath();
            Endabgabe.crc.fillStyle = "#d28c28";
            Endabgabe.crc.strokeStyle = "#d28c28";
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
        }
        move() {
            if (this.x < -130) {
                this.x = 1220;
                this.y = Math.random() * 700 - 300;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }
    Endabgabe.Fischstaebchen = Fischstaebchen;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Fischstaebchen.js.map