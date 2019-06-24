var A12;
(function (A12) {
    class Gluecklich extends A12.Objekte {
        constructor() {
            let x = Math.random() * A12.canvas.width;
            let y = Math.random() * A12.canvas.height - 100;
            let dx = Math.random() * 10 - 10;
            let dy = 0;
            super();
        }
        draw() {
            A12.crc.beginPath(); //Schwanzflosse
            A12.crc.moveTo(this.x + 66, this.y - 6);
            A12.crc.quadraticCurveTo(this.x + 78, this.y - 7, this.x + 82, this.y - 19);
            A12.crc.quadraticCurveTo(this.x + 93, this.y - 2, this.x + 84, this.y + 15);
            A12.crc.quadraticCurveTo(this.x + 78, this.y + 3, this.x + 66, this.y + 3);
            A12.crc.lineTo(this.x + 66, this.y - 6);
            A12.crc.fillStyle = "red";
            A12.crc.strokeStyle = "red";
            A12.crc.fill();
            A12.crc.stroke();
            A12.crc.closePath();
            A12.crc.beginPath(); //Körper
            A12.crc.moveTo(this.x, this.y);
            A12.crc.quadraticCurveTo(this.x + 5, this.y - 32, this.x + 35, this.y - 35);
            A12.crc.lineTo(this.x + 80, this.y - 35);
            A12.crc.bezierCurveTo(this.x + 84, this.y - 23, this.x + 65, this.y - 8, this.x + 68, this.y - 0);
            A12.crc.bezierCurveTo(this.x + 70, this.y + 10, this.x + 82, this.y + 15, this.x + 80, this.y + 30);
            A12.crc.lineTo(this.x + 45, this.y + 30);
            A12.crc.quadraticCurveTo(this.x + 3, this.y + 25, this.x + 0, this.y + 0);
            A12.crc.fillStyle = "#7100ac";
            A12.crc.strokeStyle = "#7100ac";
            A12.crc.fill();
            A12.crc.stroke();
            A12.crc.closePath();
            A12.crc.beginPath(); //grinsen
            A12.crc.moveTo(this.x + 5, this.y + 12);
            A12.crc.quadraticCurveTo(this.x + 32, this.y + 10, this.x + 34, this.y - 10);
            A12.crc.strokeStyle = "black";
            A12.crc.stroke();
            A12.crc.closePath();
            let auge1 = new Path2D(); //Augapfel
            auge1.arc(this.x + 22, this.y - 12, 6, 0, 2 * Math.PI);
            A12.crc.fillStyle = "#ffffff";
            A12.crc.strokeStyle = "#ffffff";
            A12.crc.fill(auge1);
            A12.crc.stroke(auge1);
            let auge = new Path2D(); //Pupille
            auge.arc(this.x + 22, this.y - 12, 2, 0, 2 * Math.PI);
            A12.crc.fillStyle = "black";
            A12.crc.strokeStyle = "black";
            A12.crc.fill(auge);
            A12.crc.stroke(auge);
            super.draw();
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
    A12.Gluecklich = Gluecklich;
})(A12 || (A12 = {}));
//# sourceMappingURL=Gluecklich.js.map