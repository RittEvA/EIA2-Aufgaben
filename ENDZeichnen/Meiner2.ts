namespace Zeichnen{

    export class Meiner2 extends Meiner {
        constructor(){
            super();
            this.x = 400;
            this.y = 250;
            this.s = 20;//zur Skalierung
            this.t = 1;//Referenzierung und vergleich Variable zu anderen Fischen
            
        }
        draw(): void {
            //Kopf
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.quadraticCurveTo(this.x - this.s, this.y - 1.25 * this.s, this.x - 2.75 * this.s, this.y - 2.6 * this.s);
            crc.quadraticCurveTo(this.x - 2*this.s, this.y - 0, this.x - 2.4*this.s, this.y + 1.75*this.s);
            crc.quadraticCurveTo(this.x - this.s, this.y + 1.25*this.s, this.x - 0.2*this.s, this.y + 0.5*this.s);
            crc.lineTo(this.x - this.s, this.y + 0.45*this.s);
            crc.lineTo(this.x, this.y);
            crc.fillStyle = "lightgray";
            crc.strokeStyle = "lightgray";
            crc.fill();
            crc.stroke();
            //Körper
            crc.beginPath();
            crc.moveTo(this.x - 2*this.s, this.y - 0.35*this.s);
            crc.lineTo(this.x - 3*this.s, this.y - 0.25*this.s);
            crc.quadraticCurveTo(this.x - 3.1*this.s, this.y - this.s, this.x - 3.65*this.s, this.y - 1.4*this.s);
            crc.quadraticCurveTo(this.x - 3.25*this.s, this.y - this.s, this.x - 3.3*this.s, this.y - 0.2*this.s);
            crc.lineTo(this.x - 4*this.s, this.y - 0.15*this.s);
            crc.quadraticCurveTo(this.x - 4*this.s, this.y - 1.1*this.s, this.x - 4.5*this.s, this.y - 1.1*this.s);
            crc.quadraticCurveTo(this.x - 4.25*this.s, this.y - this.s, this.x - 4.4*this.s, this.y - 0.1*this.s);
            crc.lineTo(this.x - 5*this.s, this.y);
            crc.quadraticCurveTo(this.x - 5*this.s, this.y - 0.75*this.s, this.x - 5.5*this.s, this.y - 0.85*this.s);
            crc.quadraticCurveTo(this.x - 5.3*this.s, this.y - 0.6*this.s, this.x - 5.5*this.s, this.y);
            crc.lineTo(this.x - 6*this.s, this.y + 0.05*this.s);
            crc.lineTo(this.x - 7.25*this.s, this.y - 2*this.s);
            crc.lineTo(this.x - 7.4*this.s, this.y - 0.4*this.s);
            crc.lineTo(this.x - 6.8*this.s, this.y + 0.05*this.s);
            crc.lineTo(this.x - 7.4*this.s, this.y + 0.75*this.s);
            crc.lineTo(this.x - 7.25*this.s, this.y + 2.4*this.s);
            crc.lineTo(this.x - 6*this.s, this.y + 0.4*this.s);
            crc.lineTo(this.x - 5.5*this.s, this.y + 0.4*this.s);
            crc.quadraticCurveTo(this.x - 5.3*this.s, this.y + 0.6*this.s, this.x - 5.5*this.s, this.y + 1.2*this.s);
            crc.quadraticCurveTo(this.x - 5*this.s, this.y + 0.75*this.s, this.x - 5*this.s, this.y + 0.45*this.s);
            crc.lineTo(this.x - 4.4*this.s, this.y + 0.5*this.s);
            crc.quadraticCurveTo(this.x - 4.25*this.s, this.y + this.s, this.x - 4.5*this.s, this.y + 1.4*this.s);
            crc.quadraticCurveTo(this.x - 4*this.s, this.y + 1.1*this.s, this.x - 4*this.s, this.y + 0.55*this.s);
            crc.lineTo(this.x - 3.3*this.s, this.y + 0.6*this.s);
            crc.quadraticCurveTo(this.x - 3.25*this.s, this.y + this.s, this.x - 3.3*this.s, this.y + 1.6*this.s);
            crc.quadraticCurveTo(this.x - 3.1*this.s, this.y + this.s, this.x - 3*this.s, this.y + 0.65*this.s);
            crc.lineTo(this.x - 2*this.s, this.y + 0.7*this.s);
            crc.closePath();
            crc.fill();
            crc.stroke();
            //Auge
            crc.beginPath();
            crc.arc(this.x - 1.25*this.s, this.y - 0.25*this.s, 0.5*this.s, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.strokeStyle = "white";
            crc.fill();
            crc.stroke();
            crc.closePath();
            //Pupille
            crc.beginPath();
            crc.arc(this.x - 1.25*this.s, this.y - 0.25*this.s, 0.25*this.s, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.strokeStyle = "black";
            crc.fill();
            crc.stroke();
            crc.closePath();
            
        }

    }
}