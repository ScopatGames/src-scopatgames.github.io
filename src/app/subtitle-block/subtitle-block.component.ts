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
    new Item('wd', 'web developement: front end :: angular | react + webpack + javascript | typescript, back end :: node', '', '|'),
    new Item('gd', 'game developement: unity, vr, shaders, mesh manipulation', '', '|'),
    new Item('cg', 'art: 3d models, materials, textures, animation', '', '::'),
    new Item('gh', 'github', 'https://github.com/ScopatGames', '::'),
    new Item('li', 'linkedin', 'https://www.linkedin.com/in/scott-patten-916880106', '')
  ];

  ngOnInit() {
  }

}
