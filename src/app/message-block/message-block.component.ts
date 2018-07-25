import { Component, OnInit } from '@angular/core';

@Component({
  inputs: ['url'],
  selector: 'app-message-block',
  templateUrl: './message-block.component.html',
  styleUrls: ['./message-block.component.css']
})
export class MessageBlockComponent implements OnInit {
  url: string;

  ngOnInit() {
    this.url = '|'
  }

}
