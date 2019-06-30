namespace A12{
    export class BlubStrom extends Bewegung{
        r: number;
        constructor(){
            super();
            this.x = Math.random() * (Math.random() * ((1200 - 1000) + 1)) + 700;
            this.y = Math.random() * (Math.random() * ((700 - 20) + 1)) + 20;
            this.r =Math.random() * (Math.random() * 20);
            this.dx = Math.random() * 0;
            this.dy = Math.random()*5-5;
        }
        draw(): void {
            let bubber: Path2D = new Path2D();
            bubber.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            crc.fillStyle = "#88e1ff";
            crc.strokeStyle = "ffffff";
            crc.fill(bubber);
            crc.stroke(bubber);
        }

        move(): void {
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
}