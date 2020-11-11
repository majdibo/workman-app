import { Injectable } from '@angular/core';
import {DataService} from '../base/service/data.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BusinessProcessService extends DataService{

  constructor(http : HttpClient) {
    super("http://localhost:8080/process-definitions", http);
  }
}
