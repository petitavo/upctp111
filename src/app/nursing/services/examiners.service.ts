import { Injectable } from '@angular/core';
import {Examiners} from '../model/examiners.entity';
import {BaseService} from '../../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class ExaminersService extends BaseService<Examiners>{

  constructor() {
    super();
    this.resourceEndPoint = '/examiners';
  }
}
