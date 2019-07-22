var Zeichnen;
(function (Zeichnen) {
    class Meiner {
        constructor() {
            this.x = 650;
            this.y = 350;
            this.s = 20; //zur Skalierung
            this.t = 1; //Referenzierung und vergleich Variable zu anderen Fischen
        }
        draw() {
            //Kopf
            Zeichnen.crc.beginPath();
            Zeichnen.crc.moveTo(this.x, this.y);
            Zeichnen.crc.quadraticCurveTo(this.x - this.s, this.y - 1.25 * this.s, this.x - 2.75 * this.s, this.y - 2.6 * this.s);
            Zeichnen.crc.quadraticCurveTo(this.x - 2 * this.s, this.y - 0, this.x - 2.4 * this.s, this.y + 1.75 * this.s);
            Zeichnen.crc.quadraticCurveTo(this.x - this.s, this.y + 1.25 * this.s, this.x - 0.2 * this.s, this.y + 0.5 * this.s);
            Zeichnen.crc.lineTo(this.x - this.s, this.y + 0.45 * this.s);
            Zeichnen.crc.lineTo(this.x, this.y);
            Zeichnen.crc.fillStyle = "lightgray";
            Zeichnen.crc.strokeStyle = "lightgray";
            Zeichnen.crc.fill();
            Zeichnen.crc.stroke();
            //Körper
            Zeichnen.crc.beginPath();
            Zeichnen.crc.moveTo(this.x - 2 * this.s, this.y - 0.35 * this.s);
            Zeichnen.crc.lineTo(this.x - 3 * this.s, this.y - 0.25 * this.s);
            Zeichnen.crc.quadraticCurveTo(this.x - 3.1 * this.s, this.y - this.s, this.x - 3.65 * this.s, this.y - 1.4 * this.s);
            Zeichnen.crc.quadraticCurveTo(this.x - 3.25 * this.s, this.y - this.s, this.x - 3.3 * this.s, this.y - 0.2 * this.s);
            Zeichnen.crc.lineTo(this.x - 4 * this.s, this.y - 0.15 * this.s);
            Zeichnen.crc.quadraticCurveTo(this.x - 4 * this.s, this.y - 1.1 * this.s, this.x - 4.5 * this.s, this.y - 1.1 * this.s);
            Zeichnen.crc.quadraticCurveTo(this.x - 4.25 * this.s, this.y - this.s, this.x - 4.4 * this.s, this.y - 0.1 * this.s);
            Zeichnen.crc.lineTo(this.x - 5 * this.s, this.y);
            Zeichnen.crc.quadraticCurveTo(this.x - 5 * this.s, this.y - 0.75 * this.s, this.x - 5.5 * this.s, this.y - 0.85 * this.s);
            Zeichnen.crc.quadraticCurveTo(this.x - 5.3 * this.s, this.y - 0.6 * this.s, this.x - 5.5 * this.s, this.y);
            Zeichnen.crc.lineTo(this.x - 6 * this.s, this.y + 0.05 * this.s);
            Zeichnen.crc.lineTo(this.x - 7.25 * this.s, this.y - 2 * this.s);
            Zeichnen.crc.lineTo(this.x - 7.4 * this.s, this.y - 0.4 * this.s);
            Zeichnen.crc.lineTo(this.x - 6.8 * this.s, this.y + 0.05 * this.s);
            Zeichnen.crc.lineTo(this.x - 7.4 * this.s, this.y + 0.75 * this.s);
            Zeichnen.crc.lineTo(this.x - 7.25 * this.s, this.y + 2.4 * this.s);
            Zeichnen.crc.lineTo(this.x - 6 * this.s, this.y + 0.4 * this.s);
            Zeichnen.crc.lineTo(this.x - 5.5 * this.s, this.y + 0.4 * this.s);
            Zeichnen.crc.quadraticCurveTo(this.x - 5.3 * this.s, this.y + 0.6 * this.s, this.x - 5.5 * this.s, this.y + 1.2 * this.s);
            Zeichnen.crc.quadraticCurveTo(this.x - 5 * this.s, this.y + 0.75 * this.s, this.x - 5 * this.s, this.y + 0.45 * this.s);
            Zeichnen.crc.lineTo(this.x - 4.4 * this.s, this.y + 0.5 * this.s);
            Zeichnen.crc.quadraticCurveTo(this.x - 4.25 * this.s, this.y + this.s, this.x - 4.5 * this.s, this.y + 1.4 * this.s);
            Zeichnen.crc.quadraticCurveTo(this.x - 4 * this.s, this.y + 1.1 * this.s, this.x - 4 * this.s, this.y + 0.55 * this.s);
            Zeichnen.crc.lineTo(this.x - 3.3 * this.s, this.y + 0.6 * this.s);
            Zeichnen.crc.quadraticCurveTo(this.x - 3.25 * this.s, this.y + this.s, this.x - 3.3 * this.s, this.y + 1.6 * this.s);
            Zeichnen.crc.quadraticCurveTo(this.x - 3.1 * this.s, this.y + this.s, this.x - 3 * this.s, this.y + 0.65 * this.s);
            Zeichnen.crc.lineTo(this.x - 2 * this.s, this.y + 0.7 * this.s);
            Zeichnen.crc.closePath();
            Zeichnen.crc.fill();
            Zeichnen.crc.stroke();
            //Auge
            Zeichnen.crc.beginPath();
            Zeichnen.crc.arc(this.x - 1.25 * this.s, this.y - 0.25 * this.s, 0.5 * this.s, 0, 2 * Math.PI);
            Zeichnen.crc.fillStyle = "white";
            Zeichnen.crc.strokeStyle = "white";
            Zeichnen.crc.fill();
            Zeichnen.crc.stroke();
            Zeichnen.crc.closePath();
            //Pupille
            Zeichnen.crc.beginPath();
            Zeichnen.crc.arc(this.x - 1.25 * this.s, this.y - 0.25 * this.s, 0.25 * this.s, 0, 2 * Math.PI);
            Zeichnen.crc.fillStyle = "black";
            Zeichnen.crc.strokeStyle = "black";
            Zeichnen.crc.fill();
            Zeichnen.crc.stroke();
            Zeichnen.crc.closePath();
        }
        move(_event) {
            /*switch(_event.keyCode){
            case 40:
                this.y+=2;
                this.draw();
                break;
            case 38:
                this.y-=2;
                this.draw();
                break;
            default:
                this.y+=0;
                this.draw();
            }*/
        }
        update() {
            this.draw();
        }
    }
    Zeichnen.Meiner = Meiner;
})(Zeichnen || (Zeichnen = {}));
//# sourceMappingURL=Meiner.js.map