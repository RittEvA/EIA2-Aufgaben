var A11;
(function (A11) {
    class schrei {
        draw() {
            //Körper
            A11.crc.beginPath();
            A11.crc.moveTo(this.x, this.y);
            A11.crc.quadraticCurveTo(this.x - 25, this.y - 58, this.x - 56, this.y - 60);
            A11.crc.quadraticCurveTo(this.x - 115, this.y - 35, this.x - 140, this.y + 20);
            A11.crc.quadraticCurveTo(this.x - 145, this.y - 11, this.x - 170, this.y - 33);
            A11.crc.quadraticCurveTo(this.x - 180, this.y - 5, this.x - 154, this.y + 30);
            A11.crc.quadraticCurveTo(this.x - 170, this.y + 54, this.x - 164, this.y + 72);
            A11.crc.quadraticCurveTo(this.x - 140, this.y + 55, this.x - 144, this.y + 40);
            A11.crc.quadraticCurveTo(this.x - 84, this.y + 62, this.x - 18, this.y + 35);
            A11.crc.quadraticCurveTo(this.x - 40, this.y + 45, this.x - 70, this.y + 35);
            A11.crc.quadraticCurveTo(this.x - 20, this.y - 30, this.x - 0, this.y - 0);
            A11.crc.strokeStyle = "#e84578";
            A11.crc.fillStyle = "#e84578";
            A11.crc.fill();
            A11.crc.stroke();
            A11.crc.closePath();
            //Auge
            A11.crc.beginPath();
            A11.crc.moveTo(this.x - 45, this.y - 40);
            A11.crc.quadraticCurveTo(this.x - 35, this.y - 37, this.x - 27, this.y - 24);
            A11.crc.quadraticCurveTo(this.x - 40, this.y - 32, this.x - 40, this.y - 31);
            A11.crc.strokeStyle = "black";
            A11.crc.stroke();
            A11.crc.closePath();
            //Flosse
            A11.crc.beginPath();
            A11.crc.moveTo(this.x - 90, this.y + 42);
            A11.crc.quadraticCurveTo(this.x - 80, this.y + 55, this.x - 119, this.y + 78);
            A11.crc.quadraticCurveTo(this.x - 115, this.y + 55, this.x - 95, this.y + 42);
            A11.crc.strokeStyle = "#e84578";
            A11.crc.fillStyle = "#e84578";
            A11.crc.fill();
            A11.crc.stroke();
            A11.crc.closePath();
        }
        update() {
            this.move();
            this.draw();
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
    A11.schrei = schrei;
})(A11 || (A11 = {}));
//# sourceMappingURL=schrei.js.map