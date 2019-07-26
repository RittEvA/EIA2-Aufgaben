namespace Endabgabe {

    export class Meiner4 extends Meiner {
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
            //Kopf
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.quadraticCurveTo(this.x - 20, this.y - 25, this.x - 54, this.y - 30);
            crc.quadraticCurveTo(this.x - 95, this.y - 30, this.x - 120, this.y - 4);//Körper zu schwanz
            crc.lineTo(this.x - 145, this.y - 40);
            crc.lineTo(this.x - 148, this.y - 8);
            crc.lineTo(this.x - 136, this.y + 1);
            crc.lineTo(this.x - 148, this.y + 15);
            crc.lineTo(this.x - 145, this.y + 48);
            crc.lineTo(this.x - 120, this.y + 8);

            //überkörper
            crc.quadraticCurveTo(this.x - 70, this.y + 50, this.x - 4, this.y + 10);
            crc.lineTo(this.x - 20, this.y + 9);
            crc.lineTo(this.x, this.y);
            crc.fillStyle = "green";
            crc.strokeStyle = "green";
            crc.fill();
            crc.stroke();
            //Flosse
            crc.beginPath();
            crc.moveTo(this.x - 54, this.y + 24);
            crc.quadraticCurveTo(this.x - 60, this.y + 42, this.x - 72, this.y + 52)
            crc.lineTo(this.x - 76, this.y + 30);
            crc.lineTo(this.x - 66, this.y + 24);
            crc.lineTo(this.x - 54, this.y + 24)
            crc.fillStyle = "lightgreen";
            crc.strokeStyle = "lightgreen";
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