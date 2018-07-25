import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
@Component({
  inputs: ['skillClickCallback', 'urlClickCallback'],
  selector: 'app-subtitle-block',
  templateUrl: './subtitle-block.component.html',
  styleUrls: ['./subtitle-block.component.css']
})
export class SubtitleBlockComponent implements OnInit {
  skillClickCallback;
  urlClickCallback;

  // wd | gd | cg | ph | vd | gh :: li :: em
  rowSkillItems: Item []= [
    new Item('sp', 'scott patten', '', '|'),
    new Item('wd', 'a web developer', '', '|'),
    new Item('gd', 'a game developer', '', '|'),
    new Item('cg', 'a cg artist', '', '|')
  ];

  rowUrlItems: Item [] = [
    new Item('gh', 'github', '', '::'),
    new Item('li', 'linkedin', '', '::'),
    new Item('em', 'email', '', '')
  ];

  ngOnInit() {
  }

}
