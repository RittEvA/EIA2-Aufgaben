namespace Zeichnen{
    document.addEventListener("DOMContentLoaded", init);
    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let alles:Meiner[] = [];
    //let fps: number = 30;
    //let imageData: ImageData;
    let meiner: Meiner;
    let meiner2: Meiner;
    let meiner3: Meiner;
    let meiner4:Meiner;
    function init():void{
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        
        meiner= new Meiner();
        alles.push(meiner);

        meiner2= new Meiner2();
        alles.push(meiner2);

        meiner3= new Meiner3();
        alles.push(meiner3);

        meiner4= new Meiner4();
        alles.push(meiner4);
    }
}