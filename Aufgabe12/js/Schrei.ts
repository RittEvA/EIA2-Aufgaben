
namespace A12 {
    export class Schrei extends Objekte{
      
        draw(): void {
            //Körper
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.quadraticCurveTo(this.x - 25, this.y - 58, this.x - 56, this.y - 60);
            crc.quadraticCurveTo(this.x - 115, this.y - 35, this.x - 140, this.y + 20);
            crc.quadraticCurveTo(this.x - 145, this.y - 11, this.x - 170, this.y - 33);
            crc.quadraticCurveTo(this.x - 180, this.y - 5, this.x - 154, this.y + 30);
            crc.quadraticCurveTo(this.x - 170, this.y + 54, this.x - 164, this.y + 72);
            crc.quadraticCurveTo(this.x - 140, this.y + 55, this.x - 144, this.y + 40);
            crc.quadraticCurveTo(this.x - 84, this.y + 62, this.x - 18, this.y + 35);
            crc.quadraticCurveTo(this.x - 40, this.y + 45, this.x - 70, this.y + 35);
            crc.quadraticCurveTo(this.x - 20, this.y - 30, this.x - 0, this.y - 0);
            crc.strokeStyle = "#e84578";
            crc.fillStyle = "#e84578";
            crc.fill();
            crc.stroke();
            crc.closePath();

            //Auge
            crc.beginPath();
            crc.moveTo(this.x - 45, this.y - 40);
            crc.quadraticCurveTo(this.x - 35, this.y - 37, this.x - 27, this.y - 24);
            crc.quadraticCurveTo(this.x - 40, this.y - 32, this.x - 40, this.y - 31);
            crc.strokeStyle = "black";
            crc.stroke();
            crc.closePath();

            //Flosse
            crc.beginPath();
            crc.moveTo(this.x - 90, this.y + 42);
            crc.quadraticCurveTo(this.x - 80, this.y + 55, this.x - 119, this.y + 78);
            crc.quadraticCurveTo(this.x - 115, this.y + 55, this.x - 95, this.y + 42);
            crc.strokeStyle = "#e84578";
            crc.fillStyle = "#e84578";
            crc.fill();
            crc.stroke();
            crc.closePath();
        }
        

        move(): void {
            if (this.x > 1300) {
                this.y = Math.random() * 700 - 200;
                this.x = 0; 
            }

            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }
}