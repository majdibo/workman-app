import { Injectable } from '@angular/core';
import {DataService} from '../../../base/service/data.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable()
export class ScriptTaskService extends DataService{

  constructor(http: HttpClient) {
    super(environment.service+"/task-definitions/scripts", http);
  }
}
