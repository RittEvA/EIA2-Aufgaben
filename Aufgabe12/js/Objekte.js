var A12;
(function (A12) {
    class Objekte {
        constructor() {
            let x = Math.random() * A12.canvas.width;
            let y = Math.random() * A12.canvas.height - 100;
            let dx = Math.random() * 10 - 10;
            let dy = 0;
        }
        draw() {
            //
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            //
        }
    }
    A12.Objekte = Objekte;
})(A12 || (A12 = {}));
//# sourceMappingURL=Objekte.js.map