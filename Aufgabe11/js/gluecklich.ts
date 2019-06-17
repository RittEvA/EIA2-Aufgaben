namespace A11 {
    export class Gluecklich {
        x: number;
        y: number;
        dx: number;
        dy: number;
        draw(): void {
            crc.beginPath();//Schwanzflosse
            crc.moveTo(this.x + 66, this.y - 6);
            crc.quadraticCurveTo(this.x + 78, this.y - 7, this.x + 82, this.y - 19);
            crc.quadraticCurveTo(this.x + 93, this.y - 2, this.x + 84, this.y + 15);
            crc.quadraticCurveTo(this.x + 78, this.y + 3, this.x + 66, this.y + 3);
            crc.lineTo(this.x + 66, this.y - 6);
            crc.fillStyle = "red";
            crc.strokeStyle = "red";
            crc.fill();
            crc.stroke();
            crc.closePath();

            crc.beginPath();//Körper
            crc.moveTo(this.x, this.y);
            crc.quadraticCurveTo(this.x + 5, this.y - 32, this.x + 35, this.y - 35);
            crc.lineTo(this.x + 80, this.y - 35);
            crc.bezierCurveTo(this.x + 84, this.y - 23, this.x + 65, this.y - 8, this.x + 68, this.y - 0);
            crc.bezierCurveTo(this.x + 70, this.y + 10, this.x + 82, this.y + 15, this.x + 80, this.y + 30);
            crc.lineTo(this.x + 45, this.y + 30);
            crc.quadraticCurveTo(this.x + 3, this.y + 25, this.x + 0, this.y + 0);
            crc.fillStyle = "#7100ac";
            crc.strokeStyle = "#7100ac";
            crc.fill();
            crc.stroke();
            crc.closePath();

            crc.beginPath();//grinsen
            crc.moveTo(this.x + 5, this.y + 12);
            crc.quadraticCurveTo(this.x + 32, this.y + 10, this.x + 34, this.y - 10);
            crc.strokeStyle = "black";
            crc.stroke();
            crc.closePath();

            let auge1: Path2D = new Path2D();//Augapfel
            auge1.arc(this.x + 22, this.y - 12, 6, 0, 2 * Math.PI);
            crc.fillStyle = "#ffffff";
            crc.strokeStyle = "#ffffff";
            crc.fill(auge1);
            crc.stroke(auge1);


            let auge: Path2D = new Path2D();//Pupille
            auge.arc(this.x + 22, this.y - 12, 2, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.strokeStyle = "black";
            crc.fill(auge);
            crc.stroke(auge);
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
