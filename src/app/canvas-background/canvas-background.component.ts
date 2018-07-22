import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas-background',
  templateUrl: './canvas-background.component.html',
  styleUrls: ['./canvas-background.component.css']
})
export class CanvasBackgroundComponent implements OnInit {
  timeZero : Date;
  numberOfBackgroundParticles : number = 100;
  speedOfBackgroundParticles : number = 0.03; 
  seedArray : number[] = [];

  ngOnInit(){
    this.timeZero = new Date();
    for(let i = 0; i < this.numberOfBackgroundParticles; i++){
      this.seedArray.push(Math.random());
    }
    this.draw();
  }

  /**
   * @desc draw step for canvas
   */
  draw = () => {
    const canvas = <HTMLCanvasElement> document.getElementById('canvas-background');
    const ctx = canvas.getContext('2d');

    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = 'rgba(255, 255, 255, 1)';

    const time = new Date();
    const xRange = ctx.canvas.width;
    const yRange = ctx.canvas.height;

    this.seedArray.forEach( (seed, index) => {
      ctx.save();
      const xLocation = this.seedArray[this.numberOfBackgroundParticles - 1 - index] * xRange;
      const timeDelta = time.getTime() - this.timeZero.getTime();
      const yLocation = (timeDelta * this.speedOfBackgroundParticles + seed * yRange ) % yRange;
      ctx.translate(xLocation, yLocation);
      // const rotationDirection = seed < 0.5 ? 1 : -1;
      // ctx.rotate((2 * Math.PI / 2 * time.getSeconds() + 2 * Math.PI / 2000 * time.getMilliseconds() + seed)*rotationDirection);
      // ctx.drawImage(this.smoke, -16, -16);
      const randomAlpha = Math.random()*1;
      ctx.fillStyle = 'rgba(255, 96, 176, ' + randomAlpha + ')';

      ctx.fillRect(-1.5, -1.5, 3, 3);
      ctx.restore();
    });      

    window.requestAnimationFrame(this.draw);
    
  }

}
