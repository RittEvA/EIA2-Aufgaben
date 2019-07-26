namespace A12 {

    document.addEventListener("DOMContentLoaded", init);
    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let alles:Bewegung[] = [];
    //let fischstaebchen: Fischstaebchen[] = [];
    //let knochen: Knochen[] = [];
    //let glueckliche: Gluecklich[] = [];
    //let schreierei: Schrei[] = [];
    //let blubStrom: BlubStrom[] = [];
    //let futter: Futter[]=[];
    let fps: number = 30;
    let imageData: ImageData;

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", fuettern);
        crc = canvas.getContext("2d");
        hintergrund();
        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);
        for (let i: number = 0; i < 15; i++) {//glücklich
            let grins: Gluecklich = new Gluecklich();
            alles.push(grins);
            //grins.draw();
        }

        for (let i: number = 0; i < 4; i++) {//schrei
            let schrei: Schrei = new Schrei();
            alles.push(schrei);
            schrei.draw();
        }

        for (let i: number = 0; i < 5; i++) {//Gerippe
            let gerippe: Knochen = new Knochen();
            alles.push(gerippe);
            gerippe.draw();
        }

        for (let i: number = 0; i < 7; i++) {//Fischstäbchen
            let fischstab: Fischstaebchen = new Fischstaebchen();
            alles.push(fischstab);
            fischstab.draw();
        }

        for (let i: number = 0; i < 80; i++) {//Blubberblasen Strom
            let blubBlub: BlubStrom = new BlubStrom();
            alles.push(blubBlub);
            blubBlub.draw();
        }
        let meiner: Meiner = new Meiner();
        alles.push(meiner);
        meiner.draw();

        update();

    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        /*for (let i: number = 0; i < glueckliche.length; i++) {
            glueckliche[i].update();
        }
        for (let i: number = 0; i < schreierei.length; i++) {
            schreierei[i].update();
        }
        for (let i:number = 0; i<knochen.length; i++){
            knochen[i].update();
        }
        for (let i: number = 0; i < fischstaebchen.length; i++) {
            fischstaebchen[i].update();
        } 
       for (let i: number = 0; i < blubStrom.length; i++) {
            blubStrom[i].update();
        }
        for(let i: number = 0; i<futter.length; i++){
            futter[i].update();
        }*/
        for (let i: number = 0; i<alles.length; i++){
            alles[i].update();
        }
    }

    function fuettern(_event: MouseEvent):void{
        let x: number = _event.clientX;
		let y: number = _event.clientY;
		let kruemel: Futter = new Futter();
		kruemel.x = x - 9;
		kruemel.y = y - 12;
		alles.push(kruemel);
		kruemel.draw();
    }

    function hintergrund(): void {
        let wasser: Path2D = new Path2D();
        wasser.rect(0, 0, 1200, 600);
        crc.fillStyle = "#66d0f4";
        crc.strokeStyle = "#66d0f4";
        crc.fill(wasser);
        crc.stroke(wasser);

        let boden: Path2D = new Path2D();
        boden.rect(0, 600, 1200, 100);
        crc.fillStyle = "#d5b25f";
        crc.strokeStyle = "#d5b25f";
        crc.fill(boden);
        crc.stroke(boden);

        for(let i:number=0; i<15; i++){//Kleine Blubberblasen
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height-100;
            zeichneKleineBlub(x, y);
        }
        for(let i:number=0; i<10; i++){//große Blubberblasen
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height-100;
            zeichneGrosseBlub(x, y);
        }

        for(let i:number=0; i<8; i++){//Pflanze
            let x: number = Math.random() * canvas.width;
            let y: number = 650;
            zeichnePflanze(x, y);
        }

        for(let i:number = 0; i<4; i++){//stein groß
            let x: number = Math.random() * canvas.width;
            let y: number = 700;
            zeichneStein2(x,y);
        }
        for (let i:number =0; i<6; i++){//steine klein
            let x: number = Math.random() * canvas.width;
            let y: number = 700;
            zeichneStein1(x,y);
        }

    }
    function zeichneStein1(_x:number, _y:number):void{
        crc.beginPath();
        crc.moveTo(_x,_y);
        crc.lineTo(_x+110, _y);
        crc.quadraticCurveTo(_x+140,_y-80,_x+55,_y-40)
        crc.quadraticCurveTo(_x-20, _y-80, _x, _y);
        crc.fillStyle = "#4b3429";
        crc.strokeStyle = "#4b3429";
        crc.fill();
        crc.stroke();
        crc.closePath();
    }
    function zeichneStein2(_x:number, _y:number):void{
        crc.beginPath();
        crc.moveTo(_x,_y);
        crc.lineTo(_x+190, _y);
        crc.quadraticCurveTo(_x+200,_y-170,_x+70,_y-60)
        crc.quadraticCurveTo(_x-10, _y-60, _x, _y);
        crc.fillStyle = "grey";
        crc.strokeStyle = "grey";
        crc.fill();
        crc.stroke();
        crc.closePath();
    }
    function zeichneKleineBlub(_x:number, _y:number):void{
        let kleineBlub: Path2D = new Path2D();
        kleineBlub.arc(_x, _y, 10, 0, 2 * Math.PI);
        crc.fillStyle = "#88e1ff";
        crc.strokeStyle = "ffffff";
        crc.fill(kleineBlub);
        crc.stroke(kleineBlub);
    }
    function zeichneGrosseBlub(_x:number, _y:number):void{
        let grosseBlub: Path2D = new Path2D();
        grosseBlub.arc(_x, _y, 30, 0, 2 * Math.PI);
        crc.fillStyle = "#88e1ff";
        crc.strokeStyle = "ffffff";
        crc.fill(grosseBlub);
        crc.stroke(grosseBlub);
    }
    function zeichnePflanze(_x:number, _y:number):void{//Wasserpflanzen
        crc.beginPath();
        crc.moveTo(_x, _y)
        crc.bezierCurveTo(_x+30, _y-30, _x-40, _y-110, _x+5, _y-165);
        crc.moveTo(_x, _y);
        crc.bezierCurveTo(_x+50, _y-38, _x, _y-90, _x+20, _y-120);
        crc.moveTo(_x, _y);
        crc.bezierCurveTo(_x+40, _y, _x+40, _y-70, _x+80, _y-75);
        crc.moveTo(_x, _y);
        crc.bezierCurveTo(_x-30, _y-25, _x-10, _y-85, _x-55, _y-94);
        crc.moveTo(_x, _y);
        crc.quadraticCurveTo(_x-70, _y-10, _x-40, _y-60)
        crc.lineWidth = 10;
        crc.strokeStyle ="green";
        crc.stroke();
        crc.closePath();
    }



}