import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  inputs: ['message','url'],
  selector: 'app-message-block',
  templateUrl: './message-block.component.html',
  styleUrls: ['./message-block.component.css']
})
export class MessageBlockComponent implements OnInit, OnChanges {
  message: string;
  currentMessage: string;
  showCursor: boolean;
  counter: number;
  url: string;

  

  ngOnInit() {
    this.message = '/// click a skill ///';
    this.currentMessage = '';
    this.counter = 0;
    this.url = '';
    setInterval(this.printMessage, 20);
  }

  ngOnChanges() {
    this.currentMessage = '';
  }

  printMessage = () => {
    this.showCursor = this.counter % 10 === 9 ? !this.showCursor : this.showCursor;
    this.counter++;
    if(this.message !== this.currentMessage){
      this.currentMessage += this.message.substring(0,1);
      this.message = this.message.substring(1);
    } 
  }

}
