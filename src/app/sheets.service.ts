import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {Observable, of, from } from 'rxjs';

@Injectable()
export class SheetsService {
  data: any = null;
}