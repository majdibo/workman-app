import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AppError} from '../../../base/common/error/AppError';
import {ScriptTaskService} from '../script-task/script-task.service';
import {ScriptTask} from '../script-task/script-task';

@Component({
  selector: 'mw-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private service: ScriptTaskService, private changeDetectorRefs: ChangeDetectorRef) {
  }

  columns = [
    {key: 'name', display: 'Task'},
    {key: 'type', display: 'Type'},

    {key: 'action', display: 'Action', config: {isAction: true, actions: ['delete', 'update']}}
  ];


  entities: Observable<ScriptTask[] | AppError>;


  onActionHandler(event) {
    console.log(event);
    switch (event.action){
      case 'delete' : this.delete(event.target.id); break;
      case 'update' : break;
    }
  }

  private delete(id: string) {
    this.service.delete(id).subscribe(() => this.refresh());
  }

  ngOnInit(): void {
    this.refresh();
  }

  private refresh() {
    this.entities = this.service.findAll();
    this.changeDetectorRefs.detectChanges();
  }
}
