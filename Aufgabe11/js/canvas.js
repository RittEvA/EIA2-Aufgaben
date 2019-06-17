var A11;
(function (A11) {
    document.addEventListener("DOMContentLoaded", init);
    let canvas;
    let fischstaebchen = [];
    let knochen = [];
    let glueckliche = [];
    let schreierei = [];
    let blubStrom = [];
    let fps = 30;
    let imageData;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        A11.crc = canvas.getContext("2d");
        hintergrund();
        imageData = A11.crc.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 15; i++) { //glücklich
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height - 100;
            let dx = Math.random() * 10 - 10;
            let dy = 0;
            let grins;
            grins = new A11.Gluecklich();
            grins.x = x;
            grins.y = y;
            grins.dx = dx;
            grins.dy = dy;
            glueckliche.push(grins);
            grins.draw();
        }
        for (let i = 0; i < 4; i++) { //schrei
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height - 200;
            let dx = Math.random() * 15;
            let dy = 0;
            let schrei;
            schrei = new A11.Schrei();
            schrei.x = x;
            schrei.y = y;
            schrei.dx = dx;
            schrei.dy = dy;
            schreierei.push(schrei);
            schrei.draw();
        }
        for (let i = 0; i < 5; i++) { //Gerippe
            let x = Math.random() * canvas.width;
            let y = Math.random() * (Math.random() * ((700 - 500) + 1)) + 500;
            let dx = Math.random() * 5;
            let dy = 0;
            let gerippe;
            gerippe = new A11.Knochen();
            gerippe.x = x;
            gerippe.y = y;
            gerippe.dx = dx;
            gerippe.dy = dy;
            knochen.push(gerippe);
            gerippe.draw();
        }
        for (let i = 0; i < 7; i++) { //Fischstäbchen
            let y = Math.random() * canvas.width;
            let x = Math.random() * canvas.height - 300;
            let dx = Math.random() * 10 - 10;
            let dy = 0;
            let fischstab;
            fischstab = new A11.Fischstaebchen();
            fischstab.x = x;
            fischstab.y = y;
            fischstab.dx = dx;
            fischstab.dy = dy;
            fischstaebchen.push(fischstab);
            fischstab.draw();
        }
        for (let i = 0; i < 80; i++) { //Blubberblasen Strom
            let x = Math.random() * (Math.random() * ((1200 - 1000) + 1)) + 700;
            let y = Math.random() * (Math.random() * ((700 - 20) + 1)) + 20;
            let r = Math.random() * (Math.random() * 20);
            let dx = Math.random() * 0;
            let dy = Math.random() * 5 - 5;
            let blubBlub;
            blubBlub = new A11.BlubStrom();
            blubBlub.x = x;
            blubBlub.y = y;
            blubBlub.r = r;
            blubBlub.dx = dx;
            blubBlub.dy = dy;
            blubStrom.push(blubBlub);
            blubBlub.draw();
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        A11.crc.clearRect(0, 0, canvas.width, canvas.height);
        A11.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < glueckliche.length; i++) {
            glueckliche[i].update();
        }
        for (let i = 0; i < schreierei.length; i++) {
            schreierei[i].update();
        }
        for (let i = 0; i < knochen.length; i++) {
            knochen[i].update();
        }
        for (let i = 0; i < fischstaebchen.length; i++) {
            fischstaebchen[i].update();
        }
        for (let i = 0; i < blubStrom.length; i++) {
            blubStrom[i].update();
        }
    }
    function hintergrund() {
        let wasser = new Path2D();
        wasser.rect(0, 0, 1200, 600);
        A11.crc.fillStyle = "#66d0f4";
        A11.crc.strokeStyle = "#66d0f4";
        A11.crc.fill(wasser);
        A11.crc.stroke(wasser);
        let boden = new Path2D();
        boden.rect(0, 600, 1200, 100);
        A11.crc.fillStyle = "#d5b25f";
        A11.crc.strokeStyle = "#d5b25f";
        A11.crc.fill(boden);
        A11.crc.stroke(boden);
        for (let i = 0; i < 15; i++) { //Kleine Blubberblasen
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height - 100;
            zeichneKleineBlub(x, y);
        }
        for (let i = 0; i < 10; i++) { //große Blubberblasen
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height - 100;
            zeichneGrosseBlub(x, y);
        }
        for (let i = 0; i < 8; i++) { //Pflanze
            let x = Math.random() * canvas.width;
            let y = 650;
            zeichnePflanze(x, y);
        }
        for (let i = 0; i < 4; i++) { //stein groß
            let x = Math.random() * canvas.width;
            let y = 700;
            zeichneStein2(x, y);
        }
        for (let i = 0; i < 6; i++) { //steine klein
            let x = Math.random() * canvas.width;
            let y = 700;
            zeichneStein1(x, y);
        }
    }
    function zeichneStein1(_x, _y) {
        A11.crc.beginPath();
        A11.crc.moveTo(_x, _y);
        A11.crc.lineTo(_x + 110, _y);
        A11.crc.quadraticCurveTo(_x + 140, _y - 80, _x + 55, _y - 40);
        A11.crc.quadraticCurveTo(_x - 20, _y - 80, _x, _y);
        A11.crc.fillStyle = "#4b3429";
        A11.crc.strokeStyle = "#4b3429";
        A11.crc.fill();
        A11.crc.stroke();
        A11.crc.closePath();
    }
    function zeichneStein2(_x, _y) {
        A11.crc.beginPath();
        A11.crc.moveTo(_x, _y);
        A11.crc.lineTo(_x + 190, _y);
        A11.crc.quadraticCurveTo(_x + 200, _y - 170, _x + 70, _y - 60);
        A11.crc.quadraticCurveTo(_x - 10, _y - 60, _x, _y);
        A11.crc.fillStyle = "grey";
        A11.crc.strokeStyle = "grey";
        A11.crc.fill();
        A11.crc.stroke();
        A11.crc.closePath();
    }
    function zeichneKleineBlub(_x, _y) {
        let kleineBlub = new Path2D();
        kleineBlub.arc(_x, _y, 10, 0, 2 * Math.PI);
        A11.crc.fillStyle = "#88e1ff";
        A11.crc.strokeStyle = "ffffff";
        A11.crc.fill(kleineBlub);
        A11.crc.stroke(kleineBlub);
    }
    function zeichneGrosseBlub(_x, _y) {
        let grosseBlub = new Path2D();
        grosseBlub.arc(_x, _y, 30, 0, 2 * Math.PI);
        A11.crc.fillStyle = "#88e1ff";
        A11.crc.strokeStyle = "ffffff";
        A11.crc.fill(grosseBlub);
        A11.crc.stroke(grosseBlub);
    }
    function zeichnePflanze(_x, _y) {
        A11.crc.beginPath();
        A11.crc.moveTo(_x, _y);
        A11.crc.bezierCurveTo(_x + 30, _y - 30, _x - 40, _y - 110, _x + 5, _y - 165);
        A11.crc.moveTo(_x, _y);
        A11.crc.bezierCurveTo(_x + 50, _y - 38, _x, _y - 90, _x + 20, _y - 120);
        A11.crc.moveTo(_x, _y);
        A11.crc.bezierCurveTo(_x + 40, _y, _x + 40, _y - 70, _x + 80, _y - 75);
        A11.crc.moveTo(_x, _y);
        A11.crc.bezierCurveTo(_x - 30, _y - 25, _x - 10, _y - 85, _x - 55, _y - 94);
        A11.crc.moveTo(_x, _y);
        A11.crc.quadraticCurveTo(_x - 70, _y - 10, _x - 40, _y - 60);
        A11.crc.lineWidth = 10;
        A11.crc.strokeStyle = "green";
        A11.crc.stroke();
        A11.crc.closePath();
    }
})(A11 || (A11 = {}));
//# sourceMappingURL=canvas.js.map