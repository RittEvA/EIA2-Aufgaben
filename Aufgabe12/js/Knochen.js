var A12;
(function (A12) {
    class Knochen extends A12.Bewegung {
        constructor() {
            super();
            this.x = Math.random() * A12.canvas.width;
            this.y = Math.random() * (Math.random() * ((700 - 500) + 1)) + 500;
            this.dx = Math.random() * 5;
            this.dy = 0;
        }
        draw() {
            //Kopf
            A12.crc.beginPath();
            A12.crc.moveTo(this.x, this.y);
            A12.crc.quadraticCurveTo(this.x - 20, this.y - 25, this.x - 55, this.y - 52);
            A12.crc.quadraticCurveTo(this.x - 40, this.y - 0, this.x - 48, this.y + 35);
            A12.crc.quadraticCurveTo(this.x - 20, this.y + 25, this.x - 4, this.y + 10);
            A12.crc.lineTo(this.x - 20, this.y + 9);
            A12.crc.lineTo(this.x, this.y);
            A12.crc.fillStyle = "lightgray";
            A12.crc.strokeStyle = "lightgray";
            A12.crc.fill();
            A12.crc.stroke();
            //Körper
            A12.crc.beginPath();
            A12.crc.moveTo(this.x - 40, this.y - 7);
            A12.crc.lineTo(this.x - 60, this.y - 5);
            A12.crc.quadraticCurveTo(this.x - 62, this.y - 20, this.x - 73, this.y - 28);
            A12.crc.quadraticCurveTo(this.x - 65, this.y - 20, this.x - 66, this.y - 4);
            A12.crc.lineTo(this.x - 80, this.y - 3);
            A12.crc.quadraticCurveTo(this.x - 80, this.y - 22, this.x - 90, this.y - 22);
            A12.crc.quadraticCurveTo(this.x - 85, this.y - 20, this.x - 88, this.y - 2);
            A12.crc.lineTo(this.x - 100, this.y);
            A12.crc.quadraticCurveTo(this.x - 100, this.y - 15, this.x - 110, this.y - 17);
            A12.crc.quadraticCurveTo(this.x - 106, this.y - 12, this.x - 110, this.y);
            A12.crc.lineTo(this.x - 120, this.y + 1);
            A12.crc.lineTo(this.x - 145, this.y - 40);
            A12.crc.lineTo(this.x - 148, this.y - 8);
            A12.crc.lineTo(this.x - 136, this.y + 1);
            A12.crc.lineTo(this.x - 148, this.y + 15);
            A12.crc.lineTo(this.x - 145, this.y + 48);
            A12.crc.lineTo(this.x - 120, this.y + 8);
            A12.crc.lineTo(this.x - 110, this.y + 8);
            A12.crc.quadraticCurveTo(this.x - 106, this.y + 12, this.x - 110, this.y + 24);
            A12.crc.quadraticCurveTo(this.x - 100, this.y + 15, this.x - 100, this.y + 9);
            A12.crc.lineTo(this.x - 88, this.y + 10);
            A12.crc.quadraticCurveTo(this.x - 85, this.y + 20, this.x - 90, this.y + 28);
            A12.crc.quadraticCurveTo(this.x - 80, this.y + 22, this.x - 80, this.y + 11);
            A12.crc.lineTo(this.x - 66, this.y + 12);
            A12.crc.quadraticCurveTo(this.x - 65, this.y + 20, this.x - 66, this.y + 32);
            A12.crc.quadraticCurveTo(this.x - 62, this.y + 20, this.x - 60, this.y + 13);
            A12.crc.lineTo(this.x - 40, this.y + 14);
            A12.crc.closePath();
            A12.crc.fill();
            A12.crc.stroke();
            //Auge
            A12.crc.beginPath();
            A12.crc.arc(this.x - 25, this.y - 5, 10, 0, 2 * Math.PI);
            A12.crc.fillStyle = "white";
            A12.crc.strokeStyle = "white";
            A12.crc.fill();
            A12.crc.stroke();
            A12.crc.closePath();
            //Pupille
            A12.crc.beginPath();
            A12.crc.arc(this.x - 25, this.y - 5, 5, 0, 2 * Math.PI);
            A12.crc.fillStyle = "black";
            A12.crc.strokeStyle = "black";
            A12.crc.fill();
            A12.crc.stroke();
            A12.crc.closePath();
        }
        move() {
            if (this.x > 1500) {
                this.x = 0;
                this.y = Math.random() * (Math.random() * ((700 - 500) + 1)) + 500;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
    }
    A12.Knochen = Knochen;
})(A12 || (A12 = {}));
//# sourceMappingURL=Knochen.js.map