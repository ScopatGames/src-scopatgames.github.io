import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-block',
  templateUrl: './title-block.component.html',
  styleUrls: ['./title-block.component.css']
})
export class TitleBlockComponent implements OnInit {
  message: string;
  url: string;
  private defaultMessage = 'scott patten';
  private defaultUrl = '|';

  ngOnInit() {
    this.message = this.defaultMessage;
  }

  setMessage = (message: string) => {
    this.message = message;
    this.url = this.defaultUrl;  
  }

  setUrl = (url: string) => {
    this.url = url;
    this.message = this.defaultMessage;
  }

}
