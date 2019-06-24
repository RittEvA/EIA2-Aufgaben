namespace A11 {
    export class Fischstaebchen {
        x: number;
        y: number;
        dx: number;
        dy: number;
        draw(): void {
            crc.beginPath();//Seite links
            crc.moveTo(this.x, this.y);
            crc.lineTo(this.x + 25, this.y + 30);
            crc.lineTo(this.x + 25, this.y + 55);
            crc.lineTo(this.x, this.y + 25);
            crc.lineTo(this.x, this.y);
            crc.fillStyle = "#d28c28";
            crc.strokeStyle = "#d28c28";
            crc.lineWidth = 1;
            crc.fill();
            crc.stroke();
            crc.closePath();
            crc.beginPath();//oben
            crc.moveTo(this.x, this.y);
            crc.lineTo(this.x + 25, this.y + 30);
            crc.lineTo(this.x + 125, this.y + 30);
            crc.lineTo(this.x + 100, this.y);
            crc.lineTo(this.x, this.y);
            crc.fillStyle = "#ffab31";
            crc.strokeStyle = "#ffab31";
            crc.fill();
            crc.stroke();
            crc.closePath();
            crc.beginPath();//seite vorne
            crc.moveTo(this.x + 25, this.y + 30);
            crc.lineTo(this.x + 125, this.y + 30);
            crc.lineTo(this.x + 125, this.y + 55);
            crc.lineTo(this.x + 25, this.y + 55);
            crc.lineTo(this.x + 25, this.y + 30);
            crc.fillStyle = "#d28c28";
            crc.strokeStyle = "#d28c28";
            crc.fill();
            crc.stroke();
            crc.closePath();
            crc.beginPath();//Auge 1
            crc.arc(this.x + 25, this.y + 10, 5, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.strokeStyle = "black";
            crc.fill();
            crc.stroke();
            crc.closePath();
            crc.beginPath();//Pupille 1
            crc.arc(this.x + 25, this.y + 10, 1, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.strokeStyle = "black";
            crc.fill();
            crc.stroke();
            crc.closePath();
            crc.beginPath();//Auge 2
            crc.arc(this.x + 29, this.y + 15, 5, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.strokeStyle = "black";
            crc.fill();
            crc.stroke();
            crc.closePath();
            crc.beginPath();//Pupille 2
            crc.arc(this.x + 29, this.y + 15, 1, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.strokeStyle = "black";
            crc.fill();
            crc.stroke();
            crc.closePath();
            crc.beginPath();//Rückenflosse
            crc.moveTo(this.x + 40, this.y + 15);
            crc.quadraticCurveTo(this.x + 30, this.y - 10, this.x + 90, this.y - 10);
            crc.quadraticCurveTo(this.x + 75, this.y, this.x + 80, this.y + 15);
            crc.closePath();
            crc.fillStyle = "#d28c28";
            crc.strokeStyle = "#d28c28";
            crc.fill();
            crc.stroke();
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
           
            if (this.x < -130) {
                this.x = 1220;
                this.y = Math.random() * 700 - 300; 
            }

            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        
        }
    }
}