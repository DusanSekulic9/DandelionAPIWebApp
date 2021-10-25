import { Component, OnInit } from '@angular/core';
import {SentimentAnalysisService} from "../../services/sentiment-analysis.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {sentResponse} from "../../model";


@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  sentResponse: sentResponse | undefined;
  primaryColor: string = "white";
  type: string = "Submit to find out";
  score: number = 0;

  constructor(private sentService: SentimentAnalysisService, private formBuilder: FormBuilder) {
    this.sentForm = this.formBuilder.group({
      // Odgovarajuce HTML elemente cemo povezati atributom formControlName="..."
      // ['default value', [validators]
      lang: ['auto'],
      text: ['',[Validators.required, Validators.minLength(4)]],
    })
  }

  sentForm: FormGroup;

  ngOnInit(): void {
  }

  sendReq(){
    let token = localStorage.getItem("token");
    let lang = this.sentForm.get('lang')?.value
    let text = this.sentForm.get('text')?.value
    console.log(token)
    console.log(lang)
    console.log(text)
    if(token != null){
      this.sentService.sendRequest(lang, text, token).subscribe((sentResponse) => {
        this.sentResponse = sentResponse;
        this.score = sentResponse.sentiment.score;
        this.type = sentResponse.sentiment.type;
        if(this.type === 'positive'){
          this.primaryColor = "green";
        }else if(this.type === 'neutral'){
          this.primaryColor = "brown";
        }else{
          this.primaryColor = "red";
        }
      })
    }
  }


}
