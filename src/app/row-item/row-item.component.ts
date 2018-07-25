import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  inputs: ['item', 'clickCallback'],
  selector: 'app-row-item',
  templateUrl: './row-item.component.html',
  styleUrls: ['./row-item.component.css']
})
export class RowItemComponent implements OnInit {
  item: Item;
  clickCallback: Function;
  constructor() { }

  ngOnInit() {
  }

  handleClick = () => {
    this.clickCallback(this.item.message);
  }

}
