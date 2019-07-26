var Endabgabe;
(function (Endabgabe) {
    class Bewegung extends Endabgabe.Objekt {
        constructor() {
            super();
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            //
        }
        draw() {
            //
        }
    }
    Endabgabe.Bewegung = Bewegung;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Bewegung.js.map