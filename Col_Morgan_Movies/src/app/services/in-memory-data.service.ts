import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from '../helper-files/content-interface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const content : Content[] = CONTENT;
    return {content};
  }
  constructor() { }
}
