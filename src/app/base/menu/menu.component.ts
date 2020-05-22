import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from './menu-item/menu-item';

@Component({
  selector: 'mw-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor() {
  }

  @Input() items: MenuItem[];

  ngOnInit(): void {

  }
}

