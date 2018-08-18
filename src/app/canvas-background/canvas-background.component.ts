import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas-background',
  templateUrl: './canvas-background.component.html',
  styleUrls: ['./canvas-background.component.css']
})
export class CanvasBackgroundComponent implements OnInit {
  timeZero : number;
  numberOfBackgroundParticles : number;
  backgroundParticleDensity : number = 0.2; // particles per 10000 square pixels 
  speedOfBackgroundParticles : number = 0.03; 
  itemArray : any [] = [];

  ngOnInit(){
    this.timeZero = null;
    this.numberOfBackgroundParticles = Math.floor(window.innerHeight * window.innerWidth / 10000 * this.backgroundParticleDensity);
    for(let i = 0; i < this.numberOfBackgroundParticles; i++){
      this.itemArray.push({
        seed: Math.random(),
        speed: this.speedOfBackgroundParticles,
        color: this.getRandomColor(), 
        itemGenerator: this.getRandomItem(),
        previousYLocation: 0
      });
    }
    this.draw(0);
  }

  /**
   * @desc draw step for canvas
   */
  draw = (timeNow: number) => {
    if(this.timeZero === null){
      this.timeZero = timeNow;
    }
    const canvas = <HTMLCanvasElement> document.getElementById('canvas-background');
    const ctx = canvas.getContext('2d');

    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = 'rgba(255, 255, 255, 1)';

    const timeDelta = timeNow - this.timeZero;
    const xRange = ctx.canvas.width;
    const yRange = ctx.canvas.height;

    this.itemArray.forEach( (item, index) => {
      ctx.save();
      const xLocation = this.itemArray[this.numberOfBackgroundParticles - 1 - index].seed * xRange;
      const yLocation = (timeDelta * item.speed + item.seed * yRange ) % yRange;
      ctx.translate(xLocation, yLocation);
      
      if(yLocation < item.previousYLocation){
        item.itemGenerator = this.getRandomItem();
        item.speed = this.speedOfBackgroundParticles;
        item.color = this.getRandomColor();
      }
      item.itemGenerator(ctx, item, timeDelta);
      item.previousYLocation = yLocation;

      ctx.restore();
    });      

    window.requestAnimationFrame(this.draw);
    
  }
  
  generateLargeRect = (ctx: CanvasRenderingContext2D, item: any, time: number) => {
    const rotationDirection = item.seed < 0.5 ? 1 : -1;
    ctx.rotate((2 * Math.PI / 2000 * time + item.seed)*rotationDirection);
    ctx.strokeStyle = 'rgba(' + item.color + ', 1)';
    ctx.strokeRect(-1.5,-1.5,3,3);
  }

  generateSmallRect = (ctx, item, time) => {
    const randomAlpha = Math.random().toFixed(2);
    ctx.fillStyle = 'rgba(' + item.color +', ' + randomAlpha + ')';
    ctx.fillRect(-1.5, -1.5, 3, 3);
  }

  getRandomColor = () => {
    const r = 255;
    const g = 96 + (Math.random() * 150).toFixed(0);
    const b = 176 + (Math.random() * 79).toFixed(0);
    return r + ', ' + g + ', ' + b;
  }

  getRandomItem = () => {
    const r = Math.random();

    if(r < 0.9){
      return this.generateSmallRect;
    } else {
      return this.generateLargeRect;
    }
  }

}
