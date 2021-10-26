import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  history: string[] = [];

  constructor() { }

  addHistory(hist: string){
    this.history.push(hist);
  }

  getHistory(): string[]{
    return this.history;
  }
}
