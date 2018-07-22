import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {
  graphic : HTMLImageElement;
  smoke : HTMLImageElement;
  timeZero : Date;
  numberOfTrailParticles : number = 100;
  speedOfTrailParticles : number = 0.1; 
  seedArray : number[] = [];

  ngOnInit() {
    this.graphic = new Image();
    this.graphic.src = '../../assets/img/triangle.png';

    this.smoke = new Image();
    this.smoke.src = '../../assets/img/smoke.png';
    
    this.timeZero = new Date();
    for(let i = 0; i < this.numberOfTrailParticles; i++){
      this.seedArray.push(Math.random());
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
    const xRange = this.graphic.width/6;
    const maxYLocation = ctx.canvas.height +10 - this.graphic.height;

    this.seedArray.forEach( (seed, index) => {
      ctx.save();
      const xOffset = this.seedArray[this.numberOfTrailParticles - 1 - index] * xRange - xRange/2;
      const xLocation = medianXLocation + xOffset;
      const timeDelta = time.getTime() - this.timeZero.getTime();
      const yOffset = (timeDelta * this.speedOfTrailParticles + seed * maxYLocation ) % maxYLocation;
      const yLocation = this.graphic.height - 10 + yOffset;
      ctx.translate(xLocation, yLocation);
      const rotationDirection = seed < 0.5 ? 1 : -1;
      ctx.rotate((2 * Math.PI / 2 * time.getSeconds() + 2 * Math.PI / 2000 * time.getMilliseconds() + seed)*rotationDirection);
      ctx.drawImage(this.smoke, -16, -16);
      const randomAlpha = Math.random()*1;
      ctx.strokeStyle = 'rgba(255, 223, 176, ' + randomAlpha +')';

      // ctx.strokeRect(-3, -3, 6, 6);
      ctx.beginPath();
      ctx.moveTo(0,-5);
      ctx.lineTo(4.33, 2.5);
      ctx.lineTo(-4.33, 2.5);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    });      

    ctx.drawImage(this.graphic, medianXLocation - this.graphic.width/2, 0);

    // Request the next animation frame
    window.requestAnimationFrame(this.draw);

  }

}
