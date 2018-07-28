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

  rowItems: Item []= [
    new Item('wd', 'web developement: angular, angularjs, react, node', '', '|'),
    new Item('gd', 'game developement: unity, c#, shaders, meshing algorithms', '', '|'),
    new Item('cg', 'art: 3d models, materials, textures, html+css', '', '::'),
    new Item('gh', 'github', 'https://github.com/ScopatGames', '::'),
    new Item('li', 'linkedin', 'https://www.linkedin.com/in/scott-patten-916880106', '')
  ];

  ngOnInit() {
  }

}
