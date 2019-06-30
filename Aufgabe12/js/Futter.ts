namespace A12 {
    export class Futter extends Bewegung{
        r:number;
        constructor(){
            super();
            this.r=5;
            this.dx = 0;
            this.dy = 5;
        }
        draw():void{
            crc.beginPath();
            crc.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            crc.fillStyle = "brown";
            crc.fill();
            crc.closePath();
        }
        move(): void {
            this.y += this.dy;
            if (this.y > 650) {
                this.y = 650;
            }
        }
    }
}