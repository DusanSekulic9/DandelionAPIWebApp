import { Component, OnInit } from '@angular/core';
import {HistoryService} from "../../services/history.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private historyService: HistoryService) { }

  history: string[] = [];

  ngOnInit(): void {
    this.history = this.historyService.getHistory();
  }

}
