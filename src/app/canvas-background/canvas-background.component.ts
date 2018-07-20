import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas-background',
  templateUrl: './canvas-background.component.html',
  styleUrls: ['./canvas-background.component.css']
})
export class CanvasBackgroundComponent implements OnInit {

  constructor() {}

  ngOnInit(){
    this.draw();
  }

  /**
   * @desc draw step for canvas
   */
  draw = () => {
    let canvas = <HTMLCanvasElement> document.getElementById('canvas-background');
    let ctx = canvas.getContext('2d');

    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, screen.width, screen.height);

    ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
    ctx.strokeRect(10.5, 10, 10, 10);
    // ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    // ctx.fillRect(10.5, 10, 10, 10);

    window.requestAnimationFrame(this.draw);
    
  }

}
