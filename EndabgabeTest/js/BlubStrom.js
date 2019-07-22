var Endabgabe;
(function (Endabgabe) {
    class BlubStrom extends Endabgabe.Bewegung {
        constructor() {
            super();
            this.x = Math.random() * (Math.random() * ((1200 - 1000) + 1)) + 700;
            this.y = Math.random() * (Math.random() * ((700 - 20) + 1)) + 20;
            this.r = Math.random() * (Math.random() * 20);
            this.t = 0.5;
            this.dx = Math.random() * 0;
            this.dy = Math.random() * 5 - 5;
        }
        draw() {
            let bubber = new Path2D();
            bubber.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            Endabgabe.crc.fillStyle = "#88e1ff";
            Endabgabe.crc.strokeStyle = "ffffff";
            Endabgabe.crc.fill(bubber);
            Endabgabe.crc.stroke(bubber);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < 10) {
                this.x = 700 + (Math.random() * 100);
                this.y = ((1200 - 100) + 1) + 100;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }
    Endabgabe.BlubStrom = BlubStrom;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=BlubStrom.js.map