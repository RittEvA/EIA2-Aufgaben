var A12;
(function (A12) {
    class Futter extends A12.Bewegung {
        constructor() {
            super();
            this.r = 5;
            this.dx = 0;
            this.dy = 5;
        }
        draw() {
            A12.crc.beginPath();
            A12.crc.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            A12.crc.fillStyle = "brown";
            A12.crc.fill();
            A12.crc.closePath();
        }
        move() {
            this.y += this.dy;
            if (this.y > 650) {
                this.y = 650;
            }
        }
    }
    A12.Futter = Futter;
})(A12 || (A12 = {}));
//# sourceMappingURL=Futter.js.map