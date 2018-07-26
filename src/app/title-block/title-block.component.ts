import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-title-block',
  templateUrl: './title-block.component.html',
  styleUrls: ['./title-block.component.css']
})
export class TitleBlockComponent implements OnInit {
  message: string;
  url: string;

  ngOnInit() {
  }

  setItem = (item: Item) => {
    this.message = item.message;
    this.url = item.url;  
  }

}
