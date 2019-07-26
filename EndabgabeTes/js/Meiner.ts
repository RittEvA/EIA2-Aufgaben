namespace A12 {
    export class Meiner extends Bewegung {
        
        constructor(){
            super();
            this.x = 600;
            this.y = 350;
            this.dx = 0;
            this.dy = 2;
        }
        draw(): void {
            //Kopf
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.quadraticCurveTo(this.x - 20, this.y - 25, this.x - 55, this.y - 52);
            crc.quadraticCurveTo(this.x - 40, this.y - 0, this.x - 48, this.y + 35);
            crc.quadraticCurveTo(this.x - 20, this.y + 25, this.x - 4, this.y + 10);
            crc.lineTo(this.x - 20, this.y + 9);
            crc.lineTo(this.x, this.y);
            crc.fillStyle = "lightgray";
            crc.strokeStyle = "lightgray";
            crc.fill();
            crc.stroke();
            //Körper
            crc.beginPath();
            crc.moveTo(this.x - 40, this.y - 7);
            crc.lineTo(this.x - 60, this.y - 5);
            crc.quadraticCurveTo(this.x - 62, this.y - 20, this.x - 73, this.y - 28);
            crc.quadraticCurveTo(this.x - 65, this.y - 20, this.x - 66, this.y - 4);
            crc.lineTo(this.x - 80, this.y - 3);
            crc.quadraticCurveTo(this.x - 80, this.y - 22, this.x - 90, this.y - 22);
            crc.quadraticCurveTo(this.x - 85, this.y - 20, this.x - 88, this.y - 2);
            crc.lineTo(this.x - 100, this.y);
            crc.quadraticCurveTo(this.x - 100, this.y - 15, this.x - 110, this.y - 17);
            crc.quadraticCurveTo(this.x - 106, this.y - 12, this.x - 110, this.y);
            crc.lineTo(this.x - 120, this.y + 1);
            crc.lineTo(this.x - 145, this.y - 40);
            crc.lineTo(this.x - 148, this.y - 8);
            crc.lineTo(this.x - 136, this.y + 1);
            crc.lineTo(this.x - 148, this.y + 15);
            crc.lineTo(this.x - 145, this.y + 48);
            crc.lineTo(this.x - 120, this.y + 8);
            crc.lineTo(this.x - 110, this.y + 8);
            crc.quadraticCurveTo(this.x - 106, this.y + 12, this.x - 110, this.y + 24);
            crc.quadraticCurveTo(this.x - 100, this.y + 15, this.x - 100, this.y + 9);
            crc.lineTo(this.x - 88, this.y + 10);
            crc.quadraticCurveTo(this.x - 85, this.y + 20, this.x - 90, this.y + 28);
            crc.quadraticCurveTo(this.x - 80, this.y + 22, this.x - 80, this.y + 11);
            crc.lineTo(this.x - 66, this.y + 12);
            crc.quadraticCurveTo(this.x - 65, this.y + 20, this.x - 66, this.y + 32);
            crc.quadraticCurveTo(this.x - 62, this.y + 20, this.x - 60, this.y + 13);
            crc.lineTo(this.x - 40, this.y + 14);
            crc.closePath();
            crc.fill();
            crc.stroke();
            //Auge
            crc.beginPath();
            crc.arc(this.x - 25, this.y - 5, 10, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.strokeStyle = "white";
            crc.fill();
            crc.stroke();
            crc.closePath();
            //Pupille
            crc.beginPath();
            crc.arc(this.x - 25, this.y - 5, 5, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.strokeStyle = "black";
            crc.fill();
            crc.stroke();
            crc.closePath();
        }

        move(): void {

            
            
            this.x += this.dx;
            this.y += this.dy;
        }
    }
    }