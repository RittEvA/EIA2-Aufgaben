var A11;
(function (A11) {
    class fischstaebchen {
        draw() {
            A11.crc.beginPath(); //Seite links
            A11.crc.moveTo(this.x, this.y);
            A11.crc.lineTo(this.x + 25, this.y + 30);
            A11.crc.lineTo(this.x + 25, this.y + 55);
            A11.crc.lineTo(this.x, this.y + 25);
            A11.crc.lineTo(this.x, this.y);
            A11.crc.fillStyle = "#d28c28";
            A11.crc.strokeStyle = "#d28c28";
            A11.crc.lineWidth = 1;
            A11.crc.fill();
            A11.crc.stroke();
            A11.crc.closePath();
            A11.crc.beginPath(); //oben
            A11.crc.moveTo(this.x, this.y);
            A11.crc.lineTo(this.x + 25, this.y + 30);
            A11.crc.lineTo(this.x + 125, this.y + 30);
            A11.crc.lineTo(this.x + 100, this.y);
            A11.crc.lineTo(this.x, this.y);
            A11.crc.fillStyle = "#ffab31";
            A11.crc.strokeStyle = "#ffab31";
            A11.crc.fill();
            A11.crc.stroke();
            A11.crc.closePath();
            A11.crc.beginPath(); //seite vorne
            A11.crc.moveTo(this.x + 25, this.y + 30);
            A11.crc.lineTo(this.x + 125, this.y + 30);
            A11.crc.lineTo(this.x + 125, this.y + 55);
            A11.crc.lineTo(this.x + 25, this.y + 55);
            A11.crc.lineTo(this.x + 25, this.y + 30);
            A11.crc.fillStyle = "#d28c28";
            A11.crc.strokeStyle = "#d28c28";
            A11.crc.fill();
            A11.crc.stroke();
            A11.crc.closePath();
            A11.crc.beginPath(); //Auge 1
            A11.crc.arc(this.x + 25, this.y + 10, 5, 0, 2 * Math.PI);
            A11.crc.fillStyle = "white";
            A11.crc.strokeStyle = "black";
            A11.crc.fill();
            A11.crc.stroke();
            A11.crc.closePath();
            A11.crc.beginPath(); //Pupille 1
            A11.crc.arc(this.x + 25, this.y + 10, 1, 0, 2 * Math.PI);
            A11.crc.fillStyle = "black";
            A11.crc.strokeStyle = "black";
            A11.crc.fill();
            A11.crc.stroke();
            A11.crc.closePath();
            A11.crc.beginPath(); //Auge 2
            A11.crc.arc(this.x + 29, this.y + 15, 5, 0, 2 * Math.PI);
            A11.crc.fillStyle = "white";
            A11.crc.strokeStyle = "black";
            A11.crc.fill();
            A11.crc.stroke();
            A11.crc.closePath();
            A11.crc.beginPath(); //Pupille 2
            A11.crc.arc(this.x + 29, this.y + 15, 1, 0, 2 * Math.PI);
            A11.crc.fillStyle = "black";
            A11.crc.strokeStyle = "black";
            A11.crc.fill();
            A11.crc.stroke();
            A11.crc.closePath();
            A11.crc.beginPath(); //Rückenflosse
            A11.crc.moveTo(this.x + 40, this.y + 15);
            A11.crc.quadraticCurveTo(this.x + 30, this.y - 10, this.x + 90, this.y - 10);
            A11.crc.quadraticCurveTo(this.x + 75, this.y, this.x + 80, this.y + 15);
            A11.crc.closePath();
            A11.crc.fillStyle = "#d28c28";
            A11.crc.strokeStyle = "#d28c28";
            A11.crc.fill();
            A11.crc.stroke();
        }
        update() {
            this.move();
            this.draw();
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
    A11.fischstaebchen = fischstaebchen;
})(A11 || (A11 = {}));
//# sourceMappingURL=fischstaebchen.js.map