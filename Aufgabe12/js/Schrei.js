var A12;
(function (A12) {
    class Schrei extends A12.Bewegung {
        constructor() {
            super();
            this.x = Math.random() * A12.canvas.width;
            this.y = Math.random() * A12.canvas.height - 200;
            this.dx = Math.random() * 15;
            this.dy = 0;
        }
        draw() {
            //Körper
            A12.crc.beginPath();
            A12.crc.moveTo(this.x, this.y);
            A12.crc.quadraticCurveTo(this.x - 25, this.y - 58, this.x - 56, this.y - 60);
            A12.crc.quadraticCurveTo(this.x - 115, this.y - 35, this.x - 140, this.y + 20);
            A12.crc.quadraticCurveTo(this.x - 145, this.y - 11, this.x - 170, this.y - 33);
            A12.crc.quadraticCurveTo(this.x - 180, this.y - 5, this.x - 154, this.y + 30);
            A12.crc.quadraticCurveTo(this.x - 170, this.y + 54, this.x - 164, this.y + 72);
            A12.crc.quadraticCurveTo(this.x - 140, this.y + 55, this.x - 144, this.y + 40);
            A12.crc.quadraticCurveTo(this.x - 84, this.y + 62, this.x - 18, this.y + 35);
            A12.crc.quadraticCurveTo(this.x - 40, this.y + 45, this.x - 70, this.y + 35);
            A12.crc.quadraticCurveTo(this.x - 20, this.y - 30, this.x - 0, this.y - 0);
            A12.crc.strokeStyle = "#e84578";
            A12.crc.fillStyle = "#e84578";
            A12.crc.fill();
            A12.crc.stroke();
            A12.crc.closePath();
            //Auge
            A12.crc.beginPath();
            A12.crc.moveTo(this.x - 45, this.y - 40);
            A12.crc.quadraticCurveTo(this.x - 35, this.y - 37, this.x - 27, this.y - 24);
            A12.crc.quadraticCurveTo(this.x - 40, this.y - 32, this.x - 40, this.y - 31);
            A12.crc.strokeStyle = "black";
            A12.crc.stroke();
            A12.crc.closePath();
            //Flosse
            A12.crc.beginPath();
            A12.crc.moveTo(this.x - 90, this.y + 42);
            A12.crc.quadraticCurveTo(this.x - 80, this.y + 55, this.x - 119, this.y + 78);
            A12.crc.quadraticCurveTo(this.x - 115, this.y + 55, this.x - 95, this.y + 42);
            A12.crc.strokeStyle = "#e84578";
            A12.crc.fillStyle = "#e84578";
            A12.crc.fill();
            A12.crc.stroke();
            A12.crc.closePath();
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
    A12.Schrei = Schrei;
})(A12 || (A12 = {}));
//# sourceMappingURL=Schrei.js.map