import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {sentResponse} from "../model";
import {HistoryService} from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {

  private readonly apiUrl = environment.postApi;

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  sendRequest(lang: string, text: string, token: string): Observable<sentResponse>{
    let url: string = `${this.apiUrl}/sent/v1/?lang=${lang}&text=${text}&token=${token}`;
    this.historyService.addHistory("[" + new Date().toLocaleString('it') +"]" + " GET " + url);
    return this.httpClient.get<sentResponse>(url);
  }

}
