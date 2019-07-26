var Endabgabe;
(function (Endabgabe) {
    class Meiner extends Endabgabe.Objekt {
        constructor() {
            super();
            this.x = 650;
            this.y = 350;
            this.s = 10; //zur Skalierung
            this.t = 1; //Referenzierung und vergleich Variable zu anderen Fischen
        }
        draw() {
            if (Endabgabe.meiner.t <= 0) {
                Endabgabe.Ende();
            }
            else if (Endabgabe.meiner.t <= 2) {
                //Kopf
                Endabgabe.crc.beginPath();
                Endabgabe.crc.moveTo(this.x, this.y);
                Endabgabe.crc.quadraticCurveTo(this.x - 20, this.y - 1.25 * 20, this.x - 54, this.y - 30);
                Endabgabe.crc.quadraticCurveTo(this.x - 2 * 20, this.y - 0, this.x - 2.4 * 20, this.y + 1.75 * 20);
                Endabgabe.crc.quadraticCurveTo(this.x - 20, this.y + 1.25 * 20, this.x - 0.2 * 20, this.y + 0.5 * 20);
                Endabgabe.crc.lineTo(this.x - 20, this.y + 0.45 * 20);
                Endabgabe.crc.lineTo(this.x, this.y);
                Endabgabe.crc.fillStyle = "lightgray";
                Endabgabe.crc.strokeStyle = "lightgray";
                Endabgabe.crc.fill();
                Endabgabe.crc.stroke();
                //Körper
                Endabgabe.crc.beginPath();
                Endabgabe.crc.moveTo(this.x - 2 * 20, this.y - 0.35 * 20);
                Endabgabe.crc.lineTo(this.x - 3 * 20, this.y - 0.25 * 20);
                Endabgabe.crc.quadraticCurveTo(this.x - 3.1 * 20, this.y - 20, this.x - 3.65 * 20, this.y - 1.4 * 20);
                Endabgabe.crc.quadraticCurveTo(this.x - 3.25 * 20, this.y - 20, this.x - 3.3 * 20, this.y - 0.2 * 20);
                Endabgabe.crc.lineTo(this.x - 4 * 20, this.y - 0.15 * 20);
                Endabgabe.crc.quadraticCurveTo(this.x - 4 * 20, this.y - 1.1 * 20, this.x - 4.5 * 20, this.y - 1.1 * 20);
                Endabgabe.crc.quadraticCurveTo(this.x - 4.25 * 20, this.y - 20, this.x - 4.4 * 20, this.y - 0.1 * 20);
                Endabgabe.crc.lineTo(this.x - 5 * 20, this.y);
                Endabgabe.crc.quadraticCurveTo(this.x - 5 * 20, this.y - 0.75 * 20, this.x - 5.5 * 20, this.y - 0.85 * 20);
                Endabgabe.crc.quadraticCurveTo(this.x - 5.3 * 20, this.y - 0.6 * 20, this.x - 5.5 * 20, this.y);
                Endabgabe.crc.lineTo(this.x - 6 * 20, this.y + 0.05 * 20);
                Endabgabe.crc.lineTo(this.x - 7.25 * 20, this.y - 2 * 20);
                Endabgabe.crc.lineTo(this.x - 7.4 * 20, this.y - 0.4 * 20);
                Endabgabe.crc.lineTo(this.x - 6.8 * 20, this.y + 0.05 * 20);
                Endabgabe.crc.lineTo(this.x - 7.4 * 20, this.y + 0.75 * 20);
                Endabgabe.crc.lineTo(this.x - 7.25 * 20, this.y + 2.4 * 20);
                Endabgabe.crc.lineTo(this.x - 6 * 20, this.y + 0.4 * 20);
                Endabgabe.crc.lineTo(this.x - 5.5 * 20, this.y + 0.4 * 20);
                Endabgabe.crc.quadraticCurveTo(this.x - 5.3 * 20, this.y + 0.6 * 20, this.x - 5.5 * 20, this.y + 1.2 * 20);
                Endabgabe.crc.quadraticCurveTo(this.x - 5 * 20, this.y + 0.75 * 20, this.x - 5 * 20, this.y + 0.45 * 20);
                Endabgabe.crc.lineTo(this.x - 4.4 * 20, this.y + 0.5 * 20);
                Endabgabe.crc.quadraticCurveTo(this.x - 4.25 * 20, this.y + 20, this.x - 4.5 * 20, this.y + 1.4 * 20);
                Endabgabe.crc.quadraticCurveTo(this.x - 4 * 20, this.y + 1.1 * 20, this.x - 4 * 20, this.y + 0.55 * 20);
                Endabgabe.crc.lineTo(this.x - 3.3 * 20, this.y + 0.6 * 20);
                Endabgabe.crc.quadraticCurveTo(this.x - 3.25 * 20, this.y + 20, this.x - 3.3 * 20, this.y + 1.6 * 20);
                Endabgabe.crc.quadraticCurveTo(this.x - 3.1 * 20, this.y + 20, this.x - 3 * 20, this.y + 0.65 * 20);
                Endabgabe.crc.lineTo(this.x - 2 * 20, this.y + 0.7 * 20);
                Endabgabe.crc.closePath();
                Endabgabe.crc.fill();
                Endabgabe.crc.stroke();
                //Auge
                Endabgabe.crc.beginPath();
                Endabgabe.crc.arc(this.x - 1.25 * 20, this.y - 0.25 * 20, 0.5 * 20, 0, 2 * Math.PI);
                Endabgabe.crc.fillStyle = "white";
                Endabgabe.crc.strokeStyle = "white";
                Endabgabe.crc.fill();
                Endabgabe.crc.stroke();
                Endabgabe.crc.closePath();
                //Pupille
                Endabgabe.crc.beginPath();
                Endabgabe.crc.arc(this.x - 1.25 * 20, this.y - 0.25 * 20, 0.25 * 20, 0, 2 * Math.PI);
                Endabgabe.crc.fillStyle = "black";
                Endabgabe.crc.strokeStyle = "black";
                Endabgabe.crc.fill();
                Endabgabe.crc.stroke();
                Endabgabe.crc.closePath();
            }
            else if (Endabgabe.meiner.t > 2 && Endabgabe.meiner.t <= 4) {
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
            else if (Endabgabe.meiner.t > 4 && Endabgabe.meiner.t < 7) {
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
                Endabgabe.crc.lineTo(this.x - 90, this.y - 22);
                Endabgabe.crc.quadraticCurveTo(this.x - 75, this.y - 0, this.x - 90, this.y + 28);
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
            else if (Endabgabe.meiner.t == 7) {
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
            else if (Endabgabe.meiner.t > 7) {
                //this.s+=1;
                //Rückenflosse
                Endabgabe.crc.beginPath();
                Endabgabe.crc.moveTo(this.x - 3 * this.s, this.y - 2 * this.s);
                Endabgabe.crc.lineTo(this.x - 4.2 * this.s, this.y - 4.2 * this.s);
                Endabgabe.crc.quadraticCurveTo(this.x - 6.6 * this.s, this.y - 5 * this.s, this.x - 9 * this.s, this.y - 3.6 * this.s);
                Endabgabe.crc.lineTo(this.x - 7 * this.s, this.y - 2 * this.s);
                Endabgabe.crc.fillStyle = "lightgreen";
                Endabgabe.crc.strokeStyle = "lightgreen";
                Endabgabe.crc.fill();
                Endabgabe.crc.stroke();
                //Kopf
                Endabgabe.crc.beginPath();
                Endabgabe.crc.moveTo(this.x, this.y);
                Endabgabe.crc.quadraticCurveTo(this.x - 2 * this.s, this.y - 2.5 * this.s, this.x - 5.4 * this.s, this.y - 3 * this.s);
                Endabgabe.crc.quadraticCurveTo(this.x - 9.5 * this.s, this.y - 3 * this.s, this.x - 12 * this.s, this.y - 0.4 * this.s); //Körper zu schwanz
                Endabgabe.crc.lineTo(this.x - 14.5 * this.s, this.y - 4 * this.s);
                Endabgabe.crc.lineTo(this.x - 14.8 * this.s, this.y - 0.8 * this.s);
                Endabgabe.crc.lineTo(this.x - 13.6 * this.s, this.y + 0.1 * this.s);
                Endabgabe.crc.lineTo(this.x - 14.8 * this.s, this.y + 1.5 * this.s);
                Endabgabe.crc.lineTo(this.x - 14.5 * this.s, this.y + 4.8 * this.s);
                Endabgabe.crc.lineTo(this.x - 12 * this.s, this.y + 0.8 * this.s);
                //überkörper
                Endabgabe.crc.quadraticCurveTo(this.x - 7 * this.s, this.y + 5 * this.s, this.x - 0.4 * this.s, this.y + 1 * this.s);
                Endabgabe.crc.lineTo(this.x - 2 * this.s, this.y + 0.9 * this.s);
                Endabgabe.crc.lineTo(this.x, this.y);
                Endabgabe.crc.fillStyle = "green";
                Endabgabe.crc.strokeStyle = "green";
                Endabgabe.crc.fill();
                Endabgabe.crc.stroke();
                //Flosse
                Endabgabe.crc.beginPath();
                Endabgabe.crc.moveTo(this.x - 5.4 * this.s, this.y + 2.4 * this.s);
                Endabgabe.crc.quadraticCurveTo(this.x - 6 * this.s, this.y + 4.2 * this.s, this.x - 7.2 * this.s, this.y + 5.2 * this.s);
                Endabgabe.crc.lineTo(this.x - 7.6 * this.s, this.y + 3 * this.s);
                Endabgabe.crc.lineTo(this.x - 6.6 * this.s, this.y + 2.4 * this.s);
                Endabgabe.crc.lineTo(this.x - 5.4 * this.s, this.y + 2.4 * this.s);
                Endabgabe.crc.fillStyle = "lightgreen";
                Endabgabe.crc.strokeStyle = "lightgreen";
                Endabgabe.crc.fill();
                Endabgabe.crc.stroke();
                //Auge
                Endabgabe.crc.beginPath();
                Endabgabe.crc.arc(this.x - 2.5 * this.s, this.y - 0.5 * this.s, 1 * this.s, 0, 2 * Math.PI);
                Endabgabe.crc.fillStyle = "white";
                Endabgabe.crc.strokeStyle = "white";
                Endabgabe.crc.fill();
                Endabgabe.crc.stroke();
                Endabgabe.crc.closePath();
                //Pupille
                Endabgabe.crc.beginPath();
                Endabgabe.crc.arc(this.x - 2.5 * this.s, this.y - 0.5 * this.s, 0.5 * this.s, 0, 2 * Math.PI);
                Endabgabe.crc.fillStyle = "black";
                Endabgabe.crc.strokeStyle = "black";
                Endabgabe.crc.fill();
                Endabgabe.crc.stroke();
                Endabgabe.crc.closePath();
            }
        }
        move() {
            //
        }
        update() {
            this.draw();
        }
    }
    Endabgabe.Meiner = Meiner;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Meiner.js.map