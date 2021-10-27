import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {extResponse, liResponse, sentResponse, simResponse} from "../model";
import {HistoryService} from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private readonly apiUrl = environment.postApi;

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  sentRequest(lang: string, text: string, token: string): Observable<sentResponse>{
    let url: string = `${this.apiUrl}/sent/v1/?lang=${lang}&text=${text}&token=${token}`;
    this.historyService.addHistory("[" + this.newDateFormat(new Date().toLocaleString('it')) +"]" + " GET " + url);
    return this.httpClient.get<sentResponse>(url);
  }

  liRequest(text: string,clean: boolean, token: string): Observable<liResponse>{
    let url: string = `${this.apiUrl}/li/v1/?text=${text}&clean=${clean}&token=${token}`;
    this.historyService.addHistory("[" + this.newDateFormat(new Date().toLocaleString('it')) +"]" + " GET " + url);
    return this.httpClient.get<liResponse>(url);
  }

  simRequest(text1: string, text2: string, token: string): Observable<simResponse>{
    let url: string = `${this.apiUrl}/sim/v1/?text1=${text1}&text2=${text2}&token=${token}`;
    this.historyService.addHistory("[" + this.newDateFormat(new Date().toLocaleString('it')) +"]" + " GET " + url);
    return this.httpClient.get<simResponse>(url);
  }

  extRequest(text: string, includes: string, confidence:number, token: string): Observable<extResponse>{
    let url: string = `${this.apiUrl}/nex/v1/?lang=en&text=${text}&include=${includes}&min_confidence=${confidence}&token=${token}`;
    console.log(url)
    this.historyService.addHistory("[" + this.newDateFormat(new Date().toLocaleString('it')) +"]" + " GET " + url);
    return this.httpClient.get<extResponse>(url);
  }

  newDateFormat(date: string): string{
    let res = date.replace('/', '.');
    res = res.replace('/', '.');
    return res.replace(',', '.');
  }

}
