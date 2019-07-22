namespace Endabgabe {

    export class Geist extends Bewegung {
        constructor() {
            super();
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - 100;
            this.t = 7;
            this.dx = Math.random() * 10 - 10;
            this.dy = 0;
        }
        draw(): void {
            //Flosse1
            crc.beginPath();
            crc.moveTo(this.x + 58, this.y + 24);
            crc.quadraticCurveTo(this.x + 68, this.y + 50, this.x + 72, this.y + 46);
            crc.lineTo(this.x + 74, this.y + 30);
            crc.quadraticCurveTo(this.x + 72, this.y + 20, this.x + 58, this.y + 24)
            crc.strokeStyle = "grey";
            crc.fillStyle = "grey";
            crc.fill();
            crc.stroke();
            crc.closePath();
            //Flosse2
            crc.beginPath();
            crc.moveTo(this.x + 93, this.y + 20);
            crc.quadraticCurveTo(this.x + 110, this.y + 30, this.x + 130, this.y + 24);
            crc.lineTo(this.x + 112, this.y + 18);
            crc.quadraticCurveTo(this.x + 100, this.y + 12, this.x + 93, this.y + 20);
            crc.strokeStyle = "grey";
            crc.fillStyle = "grey";
            crc.fill();
            crc.stroke();
            crc.closePath();
            //Tuch
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.quadraticCurveTo(this.x + 40, this.y - 20, this.x + 80, this.y - 20);
            crc.bezierCurveTo(this.x + 84, this.y - 20, this.x + 90, this.y - 38, this.x + 94, this.y - 36);
            crc.lineTo(this.x + 100, this.y - 18);//Rückenflosse
            crc.bezierCurveTo(this.x + 112, this.y - 18, this.x + 128, this.y - 8, this.x + 140, this.y - 10);
            crc.bezierCurveTo(this.x + 136, this.y - 24, this.x + 148, this.y - 30, this.x + 150, this.y - 40);
            crc.bezierCurveTo(this.x + 156, this.y - 34, this.x + 150, this.y - 4, this.x + 160, this.y + 8);//Schwanzflosse
            crc.quadraticCurveTo(this.x + 162, this.y + 6, this.x + 160, this.y + 10);
            crc.bezierCurveTo(this.x + 150, this.y + 8, this.x + 134, this.y + 20, this.x + 134, this.y + 8);
            //crc.moveTo(this.x+136,this.y+13);
            crc.bezierCurveTo(this.x + 120, this.y + 12, this.x + 116, this.y + 22, this.x + 110, this.y + 20);
            crc.bezierCurveTo(this.x + 106, this.y + 22, this.x + 100, this.y + 18, this.x + 94, this.y + 24);
            //crc.moveTo(this.x+98,this.y+14);
            crc.lineTo(this.x + 94, this.y + 24);
            crc.bezierCurveTo(this.x + 86, this.y + 20, this.x + 82, this.y + 36, this.x + 74, this.y + 36);
            crc.bezierCurveTo(this.x + 68, this.y + 36, this.x + 70, this.y + 24, this.x + 56, this.y + 26);
            crc.quadraticCurveTo(this.x + 42, this.y + 30, this.x + 52, this.y + 30);
            crc.bezierCurveTo(this.x + 52, this.y + 40, this.x + 58, this.y + 32, this.x + 32, this.y + 40);
            crc.quadraticCurveTo(this.x + 40, this.y + 20, this.x + 14, this.y + 14);
            crc.bezierCurveTo(this.x + 12, this.y + 12, this.x + 22, this.y + 10, this.x + 8, this.y + 8);
            crc.quadraticCurveTo(this.x + 4, this.y + 8, this.x, this.y);
            crc.strokeStyle = "white";
            crc.fillStyle = "white";
            crc.fill();
            crc.stroke();
            crc.closePath();
            //Auge
            crc.beginPath();
            crc.arc(this.x + 20, this.y - 4, 1, 0, 2 * Math.PI);
            crc.strokeStyle = "black";
            crc.fillStyle = "black";
            crc.fill();
            crc.stroke();
            crc.closePath();
            //Kieme 1
            crc.beginPath();
            crc.moveTo(this.x + 64, this.y - 12);
            crc.quadraticCurveTo(this.x + 68, this.y, this.x + 66, this.y + 10);
            crc.strokeStyle = "grey";
            crc.stroke();
            crc.closePath();
            //Kieme 2
            crc.beginPath();
            crc.moveTo(this.x + 70, this.y - 11);
            crc.quadraticCurveTo(this.x + 73, this.y, this.x + 70, this.y + 9);
            crc.strokeStyle = "grey";
            crc.stroke();
            crc.closePath();
            //Kieme 3
            crc.beginPath();
            crc.moveTo(this.x + 75, this.y - 11);
            crc.quadraticCurveTo(this.x + 79, this.y, this.x + 75, this.y + 11);
            crc.strokeStyle = "grey";
            crc.stroke();
            crc.closePath();
        }
        update(): void {
            this.move();
            this.draw();
        }

        move(): void {

            if (this.x < -100) {

                this.y = Math.random() * 700 - 100;
                this.x = 1220;

            }

            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }

}