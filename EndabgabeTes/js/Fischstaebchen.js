var A12;
(function (A12) {
    class Fischstaebchen extends A12.Bewegung {
        constructor() {
            super();
            this.y = Math.random() * A12.canvas.width;
            this.x = Math.random() * A12.canvas.height - 300;
            this.dx = Math.random() * 10 - 10;
            this.dy = 0;
        }
        draw() {
            A12.crc.beginPath(); //Seite links
            A12.crc.moveTo(this.x, this.y);
            A12.crc.lineTo(this.x + 25, this.y + 30);
            A12.crc.lineTo(this.x + 25, this.y + 55);
            A12.crc.lineTo(this.x, this.y + 25);
            A12.crc.lineTo(this.x, this.y);
            A12.crc.fillStyle = "#d28c28";
            A12.crc.strokeStyle = "#d28c28";
            A12.crc.lineWidth = 1;
            A12.crc.fill();
            A12.crc.stroke();
            A12.crc.closePath();
            A12.crc.beginPath(); //oben
            A12.crc.moveTo(this.x, this.y);
            A12.crc.lineTo(this.x + 25, this.y + 30);
            A12.crc.lineTo(this.x + 125, this.y + 30);
            A12.crc.lineTo(this.x + 100, this.y);
            A12.crc.lineTo(this.x, this.y);
            A12.crc.fillStyle = "#ffab31";
            A12.crc.strokeStyle = "#ffab31";
            A12.crc.fill();
            A12.crc.stroke();
            A12.crc.closePath();
            A12.crc.beginPath(); //seite vorne
            A12.crc.moveTo(this.x + 25, this.y + 30);
            A12.crc.lineTo(this.x + 125, this.y + 30);
            A12.crc.lineTo(this.x + 125, this.y + 55);
            A12.crc.lineTo(this.x + 25, this.y + 55);
            A12.crc.lineTo(this.x + 25, this.y + 30);
            A12.crc.fillStyle = "#d28c28";
            A12.crc.strokeStyle = "#d28c28";
            A12.crc.fill();
            A12.crc.stroke();
            A12.crc.closePath();
            A12.crc.beginPath(); //Auge 1
            A12.crc.arc(this.x + 25, this.y + 10, 5, 0, 2 * Math.PI);
            A12.crc.fillStyle = "white";
            A12.crc.strokeStyle = "black";
            A12.crc.fill();
            A12.crc.stroke();
            A12.crc.closePath();
            A12.crc.beginPath(); //Pupille 1
            A12.crc.arc(this.x + 25, this.y + 10, 1, 0, 2 * Math.PI);
            A12.crc.fillStyle = "black";
            A12.crc.strokeStyle = "black";
            A12.crc.fill();
            A12.crc.stroke();
            A12.crc.closePath();
            A12.crc.beginPath(); //Auge 2
            A12.crc.arc(this.x + 29, this.y + 15, 5, 0, 2 * Math.PI);
            A12.crc.fillStyle = "white";
            A12.crc.strokeStyle = "black";
            A12.crc.fill();
            A12.crc.stroke();
            A12.crc.closePath();
            A12.crc.beginPath(); //Pupille 2
            A12.crc.arc(this.x + 29, this.y + 15, 1, 0, 2 * Math.PI);
            A12.crc.fillStyle = "black";
            A12.crc.strokeStyle = "black";
            A12.crc.fill();
            A12.crc.stroke();
            A12.crc.closePath();
            A12.crc.beginPath(); //Rückenflosse
            A12.crc.moveTo(this.x + 40, this.y + 15);
            A12.crc.quadraticCurveTo(this.x + 30, this.y - 10, this.x + 90, this.y - 10);
            A12.crc.quadraticCurveTo(this.x + 75, this.y, this.x + 80, this.y + 15);
            A12.crc.closePath();
            A12.crc.fillStyle = "#d28c28";
            A12.crc.strokeStyle = "#d28c28";
            A12.crc.fill();
            A12.crc.stroke();
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
    A12.Fischstaebchen = Fischstaebchen;
})(A12 || (A12 = {}));
//# sourceMappingURL=Fischstaebchen.js.map