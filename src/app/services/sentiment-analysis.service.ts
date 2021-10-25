import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {sentResponse} from "../model";

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {

  private readonly apiUrl = environment.postApi;

  constructor(private httpClient: HttpClient) { }

  sendRequest(lang: string, text: string, token: string): Observable<sentResponse>{
    return this.httpClient.get<sentResponse>(`${this.apiUrl}/sent/v1/?lang=${lang}&text=${text}&token=${token}`);
  }

}
