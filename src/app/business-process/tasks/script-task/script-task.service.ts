import { Injectable } from '@angular/core';
import {DataService} from '../../../base/service/data.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ScriptTaskService extends DataService{

  constructor(http: HttpClient) {
    super("http://localhost:8080/task-definitions/scripts", http);
  }


}
