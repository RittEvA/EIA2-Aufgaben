namespace Endabgabe {

    export class Tuete extends Bewegung {
        constructor() {
            super();
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - 100;
            this.t = 1;
            this.dx = Math.random() * 10 - 10;
            this.dy = 0;
        }
        draw(): void {
            //hänkel
            crc.beginPath();
            crc.moveTo(this.x + 13, this.y - 33);
            crc.lineTo(this.x + 25, this.y - 48);
            crc.bezierCurveTo(this.x + 30, this.y - 64, this.x + 47, this.y - 62, this.x + 52, this.y - 69);
            crc.quadraticCurveTo(this.x + 58, this.y - 73, this.x + 65, this.y - 59);
            crc.lineTo(this.x + 62, this.y - 57);
            crc.quadraticCurveTo(this.x + 59, this.y - 68, this.x + 53, this.y - 63);
            crc.lineTo(this.x + 44, this.y - 52);
            crc.quadraticCurveTo(this.x + 36, this.y - 53, this.x + 43, this.y - 44);
            crc.lineTo(this.x + 13, this.y - 33)
            crc.fillStyle = "#b09800";
            crc.strokeStyle = "#b09800";
            crc.fill();
            crc.stroke();
            crc.closePath();
            //Grundtüte
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.bezierCurveTo(this.x, this.y - 60, this.x + 50, this.y - 35, this.x + 57, this.y - 55);
            crc.quadraticCurveTo(this.x + 85, this.y - 65, this.x + 95, this.y - 50);
            crc.bezierCurveTo(this.x + 104, this.y - 26, this.x + 75, this.y - 20, this.x + 77, this.y - 14);
            crc.quadraticCurveTo(this.x + 82, this.y - 4, this.x + 75, this.y);
            crc.bezierCurveTo(this.x + 66, this.y + 24, this.x + 40, this.y + 4, this.x + 35, this.y + 7);
            crc.lineTo(this.x + 21, this.y + 15);
            crc.quadraticCurveTo(this.x + 14, this.y + 12, this.x + 17, this.y + 20);
            crc.quadraticCurveTo(this.x + 6, this.y + 20, this.x + 4, this.y + 13);
            crc.quadraticCurveTo(this.x + 10, this.y + 5, this.x, this.y);
            crc.fillStyle = "#ffdc00";
            crc.strokeStyle = "#b09800";
            //Hänkelloch
            crc.fill();
            crc.stroke();
            crc.beginPath();
            crc.moveTo(this.x + 45, this.y - 34);
            crc.bezierCurveTo(this.x + 48, this.y - 48, this.x + 62, this.y - 40, this.x + 65, this.y - 47);
            crc.quadraticCurveTo(this.x + 76, this.y - 57, this.x + 85, this.y - 48);
            crc.quadraticCurveTo(this.x + 100, this.y - 33, this.x + 80, this.y - 28);
            crc.bezierCurveTo(this.x + 68, this.y - 35, this.x + 57, this.y - 20, this.x + 50, this.y - 25);
            crc.quadraticCurveTo(this.x + 43, this.y - 30, this.x + 45, this.y - 34)
            crc.fillStyle = "#66d0f4";
            crc.strokeStyle = "#b09800";
            crc.fill();
            crc.stroke();
            crc.closePath();
            //Augenbraue
            crc.beginPath();
            crc.moveTo(this.x + 15, this.y - 18);
            crc.quadraticCurveTo(this.x + 20, this.y - 15, this.x + 22, this.y - 17);
            crc.lineTo(this.x + 33, this.y - 23);
            crc.lineTo(this.x + 40, this.y - 20);
            crc.lineTo(this.x + 34, this.y - 21);
            crc.lineTo(this.x + 18, this.y - 12);
            crc.lineTo(this.x + 15, this.y - 18);
            crc.fillStyle = "black";
            crc.strokeStyle = "black";
            crc.fill();
            crc.stroke();
            crc.closePath();
            //Auge: Pupille
            crc.beginPath();
            crc.arc(this.x + 25, this.y - 14, 2.5, 0, 2 * Math.PI)
            crc.fillStyle = "black";
            crc.strokeStyle = "black";
            crc.fill();
            crc.stroke();
            crc.closePath();
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