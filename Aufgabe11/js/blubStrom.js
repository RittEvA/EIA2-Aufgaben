var A11;
(function (A11) {
    class blubStrom {
        draw() {
            let bubber = new Path2D();
            bubber.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            A11.crc.fillStyle = "#88e1ff";
            A11.crc.strokeStyle = "ffffff";
            A11.crc.fill(bubber);
            A11.crc.stroke(bubber);
        }
        update() {
            this.move();
            this.draw();
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
    A11.blubStrom = blubStrom;
})(A11 || (A11 = {}));
//# sourceMappingURL=blubStrom.js.map