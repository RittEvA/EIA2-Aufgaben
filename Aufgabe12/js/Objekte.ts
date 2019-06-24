namespace A12 {
    export class Objekte{
        x: number;
		y: number;
		dx: number;
        dy: number;
        
        constructor(){
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height - 100;
            let dx: number = Math.random() * 10 - 10;
            let dy: number = 0;
        }

        draw(): void {
            //
        }
        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
          //
            }
    }
}