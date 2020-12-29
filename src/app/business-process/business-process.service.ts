import { Injectable } from '@angular/core';
import {DataService} from '../base/service/data.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BusinessProcess} from './business.process';

@Injectable()
export class BusinessProcessService extends DataService<BusinessProcess>{

  constructor(http : HttpClient) {
    super(environment.service+"/process-definitions", http);
  }
}
