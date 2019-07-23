var Endabgabe;
(function (Endabgabe) {
    class Meiner2 extends Endabgabe.Meiner {
        constructor() {
            super();
        }
        draw() {
            //Körper
            Endabgabe.crc.beginPath();
            Endabgabe.crc.moveTo(this.x - 40, this.y - 7);
            Endabgabe.crc.lineTo(this.x - 60, this.y - 5);
            Endabgabe.crc.quadraticCurveTo(this.x - 62, this.y - 20, this.x - 73, this.y - 28); //spitze1
            Endabgabe.crc.quadraticCurveTo(this.x - 65, this.y - 20, this.x - 66, this.y - 4);
            Endabgabe.crc.lineTo(this.x - 80, this.y - 3);
            Endabgabe.crc.quadraticCurveTo(this.x - 80, this.y - 22, this.x - 90, this.y - 22); //spitze2
            Endabgabe.crc.quadraticCurveTo(this.x - 85, this.y - 20, this.x - 88, this.y - 2);
            Endabgabe.crc.lineTo(this.x - 100, this.y);
            Endabgabe.crc.quadraticCurveTo(this.x - 100, this.y - 15, this.x - 110, this.y - 17); //spitze3
            Endabgabe.crc.quadraticCurveTo(this.x - 106, this.y - 12, this.x - 110, this.y);
            Endabgabe.crc.lineTo(this.x - 120, this.y + 1);
            Endabgabe.crc.lineTo(this.x - 145, this.y - 40);
            Endabgabe.crc.lineTo(this.x - 148, this.y - 8);
            Endabgabe.crc.lineTo(this.x - 136, this.y + 1);
            Endabgabe.crc.lineTo(this.x - 148, this.y + 15);
            Endabgabe.crc.lineTo(this.x - 145, this.y + 48);
            Endabgabe.crc.lineTo(this.x - 120, this.y + 8);
            Endabgabe.crc.lineTo(this.x - 110, this.y + 8);
            Endabgabe.crc.quadraticCurveTo(this.x - 106, this.y + 12, this.x - 110, this.y + 24); //spitzezu3
            Endabgabe.crc.quadraticCurveTo(this.x - 100, this.y + 15, this.x - 100, this.y + 9);
            Endabgabe.crc.lineTo(this.x - 88, this.y + 10);
            Endabgabe.crc.quadraticCurveTo(this.x - 85, this.y + 20, this.x - 90, this.y + 28); //spitzeZu2
            Endabgabe.crc.quadraticCurveTo(this.x - 80, this.y + 22, this.x - 80, this.y + 11);
            Endabgabe.crc.lineTo(this.x - 66, this.y + 12);
            Endabgabe.crc.quadraticCurveTo(this.x - 65, this.y + 20, this.x - 66, this.y + 32); //spitzeZu1
            Endabgabe.crc.quadraticCurveTo(this.x - 62, this.y + 20, this.x - 60, this.y + 13);
            Endabgabe.crc.lineTo(this.x - 40, this.y + 14);
            Endabgabe.crc.fillStyle = "lightgrey";
            Endabgabe.crc.strokeStyle = "lightgrey";
            Endabgabe.crc.fill();
            Endabgabe.crc.stroke();
            Endabgabe.crc.closePath();
            //Kopf
            Endabgabe.crc.beginPath();
            Endabgabe.crc.moveTo(this.x, this.y);
            Endabgabe.crc.quadraticCurveTo(this.x - 20, this.y - 25, this.x - 54, this.y - 30);
            Endabgabe.crc.lineTo(this.x - 73, this.y - 28);
            Endabgabe.crc.quadraticCurveTo(this.x - 55, this.y - 0, this.x - 66, this.y + 32);
            Endabgabe.crc.quadraticCurveTo(this.x - 20, this.y + 25, this.x - 4, this.y + 10);
            Endabgabe.crc.lineTo(this.x - 20, this.y + 9);
            Endabgabe.crc.lineTo(this.x, this.y);
            Endabgabe.crc.fillStyle = "green";
            Endabgabe.crc.strokeStyle = "green";
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
    Endabgabe.Meiner2 = Meiner2;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Meiner2.js.map