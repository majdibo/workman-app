import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BusinessProcessService} from '../business-process.service';
import {BusinessProcess} from '../business.process';
import {Observable} from 'rxjs';
import {AppError} from '../../base/common/error/AppError';
import {ScriptTaskService} from '../tasks/script-task/script-task.service';

@Component({
  selector: 'mw-business-process-list',
  templateUrl: './business-process-list.component.html',
  styleUrls: ['./business-process-list.component.css']
})
export class BusinessProcessListComponent implements OnInit {

  constructor(private service: BusinessProcessService, private changeDetectorRefs: ChangeDetectorRef) {
  }

  columns = [
    {key: 'name', display: 'Process'},

    {key: 'action', display: 'Action', config: {isAction: true, actions: ['delete', 'update']}}
  ];


  entities: Observable<BusinessProcess[] | AppError>;


  onActionHandler(event) {
    console.log(event);
    switch (event.action){
      case 'delete' : this.delete(event.target.name); break;
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
