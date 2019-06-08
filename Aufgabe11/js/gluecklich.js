var A11;
(function (A11) {
    class gluecklich {
        draw() {
            A11.crc.beginPath(); //Schwanzflosse
            A11.crc.moveTo(this.x + 66, this.y - 6);
            A11.crc.quadraticCurveTo(this.x + 78, this.y - 7, this.x + 82, this.y - 19);
            A11.crc.quadraticCurveTo(this.x + 93, this.y - 2, this.x + 84, this.y + 15);
            A11.crc.quadraticCurveTo(this.x + 78, this.y + 3, this.x + 66, this.y + 3);
            A11.crc.lineTo(this.x + 66, this.y - 6);
            A11.crc.fillStyle = "red";
            A11.crc.strokeStyle = "red";
            A11.crc.fill();
            A11.crc.stroke();
            A11.crc.closePath();
            A11.crc.beginPath(); //Körper
            A11.crc.moveTo(this.x, this.y);
            A11.crc.quadraticCurveTo(this.x + 5, this.y - 32, this.x + 35, this.y - 35);
            A11.crc.lineTo(this.x + 80, this.y - 35);
            A11.crc.bezierCurveTo(this.x + 84, this.y - 23, this.x + 65, this.y - 8, this.x + 68, this.y - 0);
            A11.crc.bezierCurveTo(this.x + 70, this.y + 10, this.x + 82, this.y + 15, this.x + 80, this.y + 30);
            A11.crc.lineTo(this.x + 45, this.y + 30);
            A11.crc.quadraticCurveTo(this.x + 3, this.y + 25, this.x + 0, this.y + 0);
            A11.crc.fillStyle = "#7100ac";
            A11.crc.strokeStyle = "#7100ac";
            A11.crc.fill();
            A11.crc.stroke();
            A11.crc.closePath();
            A11.crc.beginPath(); //grinsen
            A11.crc.moveTo(this.x + 5, this.y + 12);
            A11.crc.quadraticCurveTo(this.x + 32, this.y + 10, this.x + 34, this.y - 10);
            A11.crc.strokeStyle = "black";
            A11.crc.stroke();
            A11.crc.closePath();
            let auge1 = new Path2D(); //Augapfel
            auge1.arc(this.x + 22, this.y - 12, 6, 0, 2 * Math.PI);
            A11.crc.fillStyle = "#ffffff";
            A11.crc.strokeStyle = "#ffffff";
            A11.crc.fill(auge1);
            A11.crc.stroke(auge1);
            let auge = new Path2D(); //Pupille
            auge.arc(this.x + 22, this.y - 12, 2, 0, 2 * Math.PI);
            A11.crc.fillStyle = "black";
            A11.crc.strokeStyle = "black";
            A11.crc.fill(auge);
            A11.crc.stroke(auge);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            if (this.x < -100) {
                this.y = 1220;
                this.x = Math.random() * 700 - 100;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }
    A11.gluecklich = gluecklich;
})(A11 || (A11 = {}));
//# sourceMappingURL=gluecklich.js.map