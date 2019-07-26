var Endabgabe;
(function (Endabgabe) {
    class Futter extends Endabgabe.Bewegung {
        constructor() {
            super();
            this.r = 5;
            this.t = 6;
            this.dx = 0;
            this.dy = 5;
        }
        draw() {
            Endabgabe.crc.beginPath();
            Endabgabe.crc.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            Endabgabe.crc.fillStyle = "brown";
            Endabgabe.crc.fill();
            Endabgabe.crc.closePath();
        }
        move() {
            this.y += this.dy;
            if (this.y > 650) {
                this.y = 650;
            }
        }
    }
    Endabgabe.Futter = Futter;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Futter.js.map