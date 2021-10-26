import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {liResponse, sentResponse, simResponse} from "../model";
import {HistoryService} from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private readonly apiUrl = environment.postApi;

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  sentRequest(lang: string, text: string, token: string): Observable<sentResponse>{
    let url: string = `${this.apiUrl}/sent/v1/?lang=${lang}&text=${text}&token=${token}`;
    this.historyService.addHistory("[" + new Date().toLocaleString('it') +"]" + " GET " + url);
    return this.httpClient.get<sentResponse>(url);
  }

  liRequest(text: string,clean: boolean, token: string): Observable<liResponse>{
    let url: string = `${this.apiUrl}/li/v1/?text=${text}&clean=${clean}&token=${token}`;
    this.historyService.addHistory("[" + new Date().toLocaleString('it') +"]" + " GET " + url);
    return this.httpClient.get<liResponse>(url);
  }

  simRequest(text1: string, text2: string, token: string): Observable<simResponse>{
    let url: string = `${this.apiUrl}/sim/v1/?text1=${text1}&text2=${text2}&token=${token}`;
    this.historyService.addHistory("[" + new Date().toLocaleString('it') +"]" + " GET " + url);
    return this.httpClient.get<simResponse>(url);
  }

}
