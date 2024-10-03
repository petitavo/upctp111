import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Patients} from '../model/patients.entity';

@Injectable({
  providedIn: 'root'
})
export class PatientsService extends BaseService<Patients>{

  constructor() {
    super();
    this.resourceEndPoint = '/patients';
  }
}
