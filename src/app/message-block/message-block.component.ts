import { Component, OnInit } from '@angular/core';

@Component({
  inputs: ['message','url'],
  selector: 'app-message-block',
  templateUrl: './message-block.component.html',
  styleUrls: ['./message-block.component.css']
})
export class MessageBlockComponent implements OnInit {
  message: string;
  url: string;

  ngOnInit() {
    this.message = '|';
    this.url = '';
  }

}
