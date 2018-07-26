import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
@Component({
  inputs: ['clickCallback'],
  selector: 'app-subtitle-block',
  templateUrl: './subtitle-block.component.html',
  styleUrls: ['./subtitle-block.component.css']
})
export class SubtitleBlockComponent implements OnInit {
  clickCallback;

  // wd | gd | cg | ph | vd | gh :: li :: em
  rowItems: Item []= [
    new Item('wd', 'web developement', '', '|'),
    new Item('gd', 'game developement', '', '|'),
    new Item('cg', '3d models, materials, and artwork', '', '|'),
    new Item('gh', 'github', 'https://github.com/ScopatGames', '::'),
    new Item('li', 'linkedin', 'https://www.linkedin.com/in/scott-patten-916880106', '')
  ];

  ngOnInit() {
  }

}
