var Zeichnen;
(function (Zeichnen) {
    document.addEventListener("DOMContentLoaded", init);
    let alles = [];
    //let fps: number = 30;
    //let imageData: ImageData;
    let meiner;
    let meiner2;
    let meiner3;
    let meiner4;
    function init() {
        Zeichnen.canvas = document.getElementsByTagName("canvas")[0];
        Zeichnen.crc = Zeichnen.canvas.getContext("2d");
        meiner = new Zeichnen.Meiner();
        alles.push(meiner);
        meiner2 = new Zeichnen.Meiner2();
        alles.push(meiner2);
        meiner3 = new Zeichnen.Meiner3();
        alles.push(meiner3);
        meiner4 = new Zeichnen.Meiner4();
        alles.push(meiner4);
    }
})(Zeichnen || (Zeichnen = {}));
//# sourceMappingURL=canvas.js.map