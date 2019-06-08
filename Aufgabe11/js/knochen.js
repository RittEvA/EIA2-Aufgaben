var A11;
(function (A11) {
    class knochen {
        draw() {
            //Kopf
            A11.crc.beginPath();
            A11.crc.moveTo(this.x, this.y);
            A11.crc.quadraticCurveTo(this.x - 20, this.y - 25, this.x - 55, this.y - 52);
            A11.crc.quadraticCurveTo(this.x - 40, this.y - 0, this.x - 48, this.y + 35);
            A11.crc.quadraticCurveTo(this.x - 20, this.y + 25, this.x - 4, this.y + 10);
            A11.crc.lineTo(this.x - 20, this.y + 9);
            A11.crc.lineTo(this.x, this.y);
            A11.crc.fillStyle = "lightgray";
            A11.crc.strokeStyle = "lightgray";
            A11.crc.fill();
            A11.crc.stroke();
            //Körper
            A11.crc.beginPath();
            A11.crc.moveTo(this.x - 40, this.y - 7);
            A11.crc.lineTo(this.x - 60, this.y - 5);
            A11.crc.quadraticCurveTo(this.x - 62, this.y - 20, this.x - 73, this.y - 28);
            A11.crc.quadraticCurveTo(this.x - 65, this.y - 20, this.x - 66, this.y - 4);
            A11.crc.lineTo(this.x - 80, this.y - 3);
            A11.crc.quadraticCurveTo(this.x - 80, this.y - 22, this.x - 90, this.y - 22);
            A11.crc.quadraticCurveTo(this.x - 85, this.y - 20, this.x - 88, this.y - 2);
            A11.crc.lineTo(this.x - 100, this.y);
            A11.crc.quadraticCurveTo(this.x - 100, this.y - 15, this.x - 110, this.y - 17);
            A11.crc.quadraticCurveTo(this.x - 106, this.y - 12, this.x - 110, this.y);
            A11.crc.lineTo(this.x - 120, this.y + 1);
            A11.crc.lineTo(this.x - 145, this.y - 40);
            A11.crc.lineTo(this.x - 148, this.y - 8);
            A11.crc.lineTo(this.x - 136, this.y + 1);
            A11.crc.lineTo(this.x - 148, this.y + 15);
            A11.crc.lineTo(this.x - 145, this.y + 48);
            A11.crc.lineTo(this.x - 120, this.y + 8);
            A11.crc.lineTo(this.x - 110, this.y + 8);
            A11.crc.quadraticCurveTo(this.x - 106, this.y + 12, this.x - 110, this.y + 24);
            A11.crc.quadraticCurveTo(this.x - 100, this.y + 15, this.x - 100, this.y + 9);
            A11.crc.lineTo(this.x - 88, this.y + 10);
            A11.crc.quadraticCurveTo(this.x - 85, this.y + 20, this.x - 90, this.y + 28);
            A11.crc.quadraticCurveTo(this.x - 80, this.y + 22, this.x - 80, this.y + 11);
            A11.crc.lineTo(this.x - 66, this.y + 12);
            A11.crc.quadraticCurveTo(this.x - 65, this.y + 20, this.x - 66, this.y + 32);
            A11.crc.quadraticCurveTo(this.x - 62, this.y + 20, this.x - 60, this.y + 13);
            A11.crc.lineTo(this.x - 40, this.y + 14);
            A11.crc.closePath();
            A11.crc.fill();
            A11.crc.stroke();
            //Auge
            A11.crc.beginPath();
            A11.crc.arc(this.x - 25, this.y - 5, 10, 0, 2 * Math.PI);
            A11.crc.fillStyle = "white";
            A11.crc.strokeStyle = "white";
            A11.crc.fill();
            A11.crc.stroke();
            A11.crc.closePath();
            //Pupille
            A11.crc.beginPath();
            A11.crc.arc(this.x - 25, this.y - 5, 5, 0, 2 * Math.PI);
            A11.crc.fillStyle = "black";
            A11.crc.strokeStyle = "black";
            A11.crc.fill();
            A11.crc.stroke();
            A11.crc.closePath();
        }
        update() {
            this.move();
            this.draw();
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
    A11.knochen = knochen;
})(A11 || (A11 = {}));
//# sourceMappingURL=knochen.js.map