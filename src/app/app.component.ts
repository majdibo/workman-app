import {Component} from '@angular/core';
import {MENU_LIST} from './menu-list';

@Component({
  selector: 'mw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workman';
  menuItems = MENU_LIST;

}


