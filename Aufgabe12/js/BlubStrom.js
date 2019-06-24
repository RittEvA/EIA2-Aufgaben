var A12;
(function (A12) {
    class BlubStrom extends A12.Objekte {
        draw() {
            let bubber = new Path2D();
            bubber.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            A12.crc.fillStyle = "#88e1ff";
            A12.crc.strokeStyle = "ffffff";
            A12.crc.fill(bubber);
            A12.crc.stroke(bubber);
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
    A12.BlubStrom = BlubStrom;
})(A12 || (A12 = {}));
//# sourceMappingURL=BlubStrom.js.map