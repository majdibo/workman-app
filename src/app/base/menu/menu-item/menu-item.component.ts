import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from './menu-item';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MenuItemType} from './menu-item-type';

@Component({
  selector: 'mw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  @Input() menu: MenuItem;
  expanded = false;

  constructor() {
  }

  ngOnInit(): void {
  }


  getItemType(menuItem: MenuItem) {
    if (menuItem.link && !menuItem.children && !menuItem.group) { return MenuItemType.LINK; }

    if (!menuItem.link && !menuItem.children && menuItem.group) { return MenuItemType.GROUP; }

    if (!menuItem.link && menuItem.children && !menuItem.group) { return MenuItemType.SUBMENU; }
  }

  toggleSubmenu() {
    this.expanded = !this.expanded;
  }

}
