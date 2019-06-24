namespace A12 {
    export class BlubStrom extends Objekte{
        r:number;
       
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