import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {
  smoke : HTMLImageElement;
  timeZero : Date;
  numberOfTrailParticles : number = 10;
  particleArray : any[] = [];

  ngOnInit() {

    this.smoke = new Image();
    this.smoke.src = '../../assets/img/smoke.png';

    this.timeZero = new Date();
    for(let i = 0; i < this.numberOfTrailParticles; i++){
      this.particleArray.push({
        seed: Math.random(),
        color: this.getRandomColor(),
        speed: 0.1,
        previousYLocation: 0
    });
    }

    // Initiate drawing on canvas
    this.draw();
  }

  draw = () => {
    const canvas = <HTMLCanvasElement> document.getElementById('canvas-graphic');
    const ctx = canvas.getContext('2d');

    ctx.canvas.width = 200;
    ctx.canvas.height = window.innerHeight/2 + 48;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const time = new Date();

    const medianXLocation = ctx.canvas.width/2;
    const xRange = 96/6;
    const maxYLocation = ctx.canvas.height + 10 - 96;

    this.particleArray.forEach( (particle, index) => {
      ctx.save();
      const xOffset = this.particleArray[this.numberOfTrailParticles - 1 - index].seed * xRange - xRange/2;
      const xLocation = medianXLocation + xOffset;
      const timeDelta = time.getTime() - this.timeZero.getTime();
      const yOffset = (timeDelta * particle.speed + particle.seed * maxYLocation ) % maxYLocation;
      const yLocation = 96 - 10 + yOffset;
      if(yLocation < particle.previousYLocation){
        particle.color = this.getRandomColor();
      }
      particle.previousYLocation = yLocation;
      ctx.translate(xLocation, yLocation);
      const rotationDirection = particle.seed < 0.5 ? 1 : -1;
      ctx.rotate((Math.PI * time.getSeconds() + Math.PI / 1000 * time.getMilliseconds() + particle.seed)*rotationDirection);
      ctx.drawImage(this.smoke, -16, -16);
      const randomAlpha = Math.random();
      ctx.strokeStyle = 'rgba(' + particle.color + ', ' + randomAlpha +')';
      const randomScale = Math.random()*0.8 + 0.5;
      ctx.beginPath();
      ctx.moveTo(0,-5*randomScale);
      ctx.lineTo(4.33*randomScale, 2.5*randomScale);
      ctx.lineTo(-4.33*randomScale, 2.5*randomScale);
      ctx.closePath();
      ctx.stroke();

      ctx.restore();
    });  
    
    ctx.save();
    ctx.translate(medianXLocation, 86);
    ctx.strokeStyle = 'rgba(255, 255, 255, ' + (Math.random()*0.5 + 0.5) + ')';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, 2*Math.PI, true);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(0, 238, 255, ' + Math.random() + ')';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, 16, 0, 2*Math.PI, true);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(0, 238, 255, ' + Math.random() + ')';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(0, 0, 20, 0, 2*Math.PI, true);
    ctx.stroke();
    ctx.restore();

    this.drawShip(ctx, time);

    // Request the next animation frame
    window.requestAnimationFrame(this.draw);

  }

  drawShip = (ctx, time) => {
    const midX = ctx.canvas.width/2;
    // ctx.drawImage(this.graphic, ctx.canvas.width/2 - this.graphic.width/2, 0);
    const shift = Math.sin(time / 1500);

    ctx.fillStyle = 'rgba(146,136,0,1)';
    ctx.beginPath();
    ctx.moveTo(midX, 0);
    ctx.lineTo(midX + 28 + shift*4, 72);
    ctx.lineTo(midX, 96);
    ctx.closePath();
    ctx.fill();

    const color : string = this.getShiftedColor(Math.abs(shift));
    // ctx.fillStyle = 'rgba(255,255,255,1)';
    ctx.fillStyle = 'rgba(' + color + ', 1)';
    ctx.beginPath();
    ctx.moveTo(midX, 0);
    ctx.lineTo(midX + -28 + shift, 72);
    ctx.lineTo(midX, 96);
    ctx.closePath();
    ctx.fill();
  }

  getRandomColor = () => {
    const r = 255;
    const g = 160 + Math.random() * 95;
    const b = 116;
    return r + ', ' + g + ', ' + b;
  }

  getShiftedColor = (shift : number) => {
    const r = 255;
    const g = 255;
    const b = 255;
    const dg = shift * 17;
    const db = shift * 255;
    return r + ', ' + (g - dg) + ', ' + (b - db);
  }
}
