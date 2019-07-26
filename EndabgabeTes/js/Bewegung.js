var A12;
(function (A12) {
    class Bewegung {
        constructor() {
            //
        }
        draw() {
            //
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += 2;
        }
    }
    A12.Bewegung = Bewegung;
})(A12 || (A12 = {}));
//# sourceMappingURL=Bewegung.js.map