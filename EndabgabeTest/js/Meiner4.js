var Endabgabe;
(function (Endabgabe) {
    class Meiner4 extends Endabgabe.Meiner {
        constructor() {
            super();
        }
        draw() {
            //Rückenflosse
            Endabgabe.crc.beginPath();
            Endabgabe.crc.moveTo(this.x - 30, this.y - 20);
            Endabgabe.crc.lineTo(this.x - 42, this.y - 42);
            Endabgabe.crc.quadraticCurveTo(this.x - 66, this.y - 50, this.x - 90, this.y - 36);
            Endabgabe.crc.lineTo(this.x - 70, this.y - 20);
            Endabgabe.crc.fillStyle = "lightgreen";
            Endabgabe.crc.strokeStyle = "lightgreen";
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
            //Kopf
            Endabgabe.crc.beginPath();
            Endabgabe.crc.moveTo(this.x, this.y);
            Endabgabe.crc.quadraticCurveTo(this.x - 20, this.y - 25, this.x - 54, this.y - 30);
            Endabgabe.crc.quadraticCurveTo(this.x - 95, this.y - 30, this.x - 120, this.y - 4); //Körper zu schwanz
            Endabgabe.crc.lineTo(this.x - 145, this.y - 40);
            Endabgabe.crc.lineTo(this.x - 148, this.y - 8);
            Endabgabe.crc.lineTo(this.x - 136, this.y + 1);
            Endabgabe.crc.lineTo(this.x - 148, this.y + 15);
            Endabgabe.crc.lineTo(this.x - 145, this.y + 48);
            Endabgabe.crc.lineTo(this.x - 120, this.y + 8);
            //überkörper
            Endabgabe.crc.quadraticCurveTo(this.x - 70, this.y + 50, this.x - 4, this.y + 10);
            Endabgabe.crc.lineTo(this.x - 20, this.y + 9);
            Endabgabe.crc.lineTo(this.x, this.y);
            Endabgabe.crc.fillStyle = "green";
            Endabgabe.crc.strokeStyle = "green";
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
            //Flosse
            Endabgabe.crc.beginPath();
            Endabgabe.crc.moveTo(this.x - 54, this.y + 24);
            Endabgabe.crc.quadraticCurveTo(this.x - 60, this.y + 42, this.x - 72, this.y + 52);
            Endabgabe.crc.lineTo(this.x - 76, this.y + 30);
            Endabgabe.crc.lineTo(this.x - 66, this.y + 24);
            Endabgabe.crc.lineTo(this.x - 54, this.y + 24);
            Endabgabe.crc.fillStyle = "lightgreen";
            Endabgabe.crc.strokeStyle = "lightgreen";
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
            //Auge
            Endabgabe.crc.beginPath();
            Endabgabe.crc.arc(this.x - 25, this.y - 5, 10, 0, 2 * Math.PI);
            Endabgabe.crc.fillStyle = "white";
            Endabgabe.crc.strokeStyle = "white";
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
            //Pupille
            Endabgabe.crc.beginPath();
            Endabgabe.crc.arc(this.x - 25, this.y - 5, 5, 0, 2 * Math.PI);
            Endabgabe.crc.fillStyle = "black";
            Endabgabe.crc.strokeStyle = "black";
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
        }
    }
    Endabgabe.Meiner4 = Meiner4;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Meiner4.js.map