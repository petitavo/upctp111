import { Injectable } from '@angular/core';
import {MentalStateExams} from '../model/mental-state-exams.entity';
import {BaseService} from '../../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class MentalStateExamsService extends BaseService<MentalStateExams>{

  constructor() {
    super();
    this.resourceEndPoint = '/mental-state-exams';
  }
}
