import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'mw-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {

  @Output("onAction") emitter = new EventEmitter();
  @Input("data") dataSource = of([]);
  @Input("columns") tableColumns = [];

  get keys() { return this.tableColumns.map(({ key }) => key); }

  showBooleanValue(elt, column) {
    return column.config.values[`${elt[column.key]}`];
  }

}
