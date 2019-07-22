namespace Endabgabe {

    export class Bewegung extends Objekt {
        dx: number;
        dy: number;


        constructor() {
            super();
        }
        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            //

        }
        draw() {
            //
        }

    }
}