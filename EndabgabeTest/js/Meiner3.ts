namespace Endabgabe {

    export class Meiner3 extends Meiner{
        constructor() {
            super();
        }
        draw() {
            //Rückenflosse
            crc.beginPath();
            crc.moveTo(this.x - 30, this.y - 20);
            crc.lineTo(this.x - 42, this.y - 42);
            crc.quadraticCurveTo(this.x - 66, this.y - 50, this.x - 90, this.y - 36);
            crc.lineTo(this.x - 70, this.y - 20);
            crc.fillStyle = "lightgreen";
            crc.strokeStyle = "lightgreen";
            crc.fill();
            crc.stroke();
            //Körper
            crc.beginPath();
            crc.moveTo(this.x - 40, this.y - 7);
            crc.lineTo(this.x - 60, this.y - 5);
            crc.quadraticCurveTo(this.x - 62, this.y - 20, this.x - 73, this.y - 28);//spitze1
            crc.quadraticCurveTo(this.x - 65, this.y - 20, this.x - 66, this.y - 4);
            crc.lineTo(this.x - 80, this.y - 3);
            crc.quadraticCurveTo(this.x - 80, this.y - 22, this.x - 90, this.y - 22);//spitze2
            crc.quadraticCurveTo(this.x - 85, this.y - 20, this.x - 88, this.y - 2);
            crc.lineTo(this.x - 100, this.y);
            crc.quadraticCurveTo(this.x - 100, this.y - 15, this.x - 110, this.y - 17);//spitze3
            crc.quadraticCurveTo(this.x - 106, this.y - 12, this.x - 110, this.y);
            crc.lineTo(this.x - 120, this.y + 1);
            crc.lineTo(this.x - 145, this.y - 40);
            crc.lineTo(this.x - 148, this.y - 8);
            crc.lineTo(this.x - 136, this.y + 1);
            crc.lineTo(this.x - 148, this.y + 15);
            crc.lineTo(this.x - 145, this.y + 48);
            crc.lineTo(this.x - 120, this.y + 8);
            crc.lineTo(this.x - 110, this.y + 8);
            crc.quadraticCurveTo(this.x - 106, this.y + 12, this.x - 110, this.y + 24);//spitzezu3
            crc.quadraticCurveTo(this.x - 100, this.y + 15, this.x - 100, this.y + 9);
            crc.lineTo(this.x - 88, this.y + 10);
            crc.quadraticCurveTo(this.x - 85, this.y + 20, this.x - 90, this.y + 28);//spitzeZu2
            crc.quadraticCurveTo(this.x - 80, this.y + 22, this.x - 80, this.y + 11);
            crc.lineTo(this.x - 66, this.y + 12);
            crc.quadraticCurveTo(this.x - 65, this.y + 20, this.x - 66, this.y + 32);//spitzeZu1
            crc.quadraticCurveTo(this.x - 62, this.y + 20, this.x - 60, this.y + 13);
            crc.lineTo(this.x - 40, this.y + 14);
            crc.fillStyle = "lightgrey";
            crc.strokeStyle = "lightgrey";
            crc.fill();
            crc.stroke();
            crc.closePath();

            //Kopf
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.quadraticCurveTo(this.x - 20, this.y - 25, this.x - 54, this.y - 30);
            crc.lineTo(this.x - 90, this.y - 22);
            crc.quadraticCurveTo(this.x - 75, this.y - 0, this.x - 90, this.y + 28);
            crc.quadraticCurveTo(this.x - 20, this.y + 25, this.x - 4, this.y + 10);
            crc.lineTo(this.x - 20, this.y + 9);
            crc.lineTo(this.x, this.y);
            crc.fillStyle = "green";
            crc.strokeStyle = "green";
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
    }
}