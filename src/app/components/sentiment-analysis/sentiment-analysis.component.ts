import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../services/backend.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Color, sentResponse} from "../../model";
import {HistoryService} from "../../services/history.service";


@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  sentResponse: sentResponse | undefined;
  primaryColor: Color = new Color(255,255,255);
  array: string[] = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  hexPrimaryColor: string = this.calculateHex(this.primaryColor);
  type: string = "Submit to find out";
  score: number = 0;
  red: Color = new Color(255,0,0);
  green: Color = new Color(0,255,0);
  brown: Color = new Color(150,75,0);

  constructor(private sentService: BackendService, private formBuilder: FormBuilder) {
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

  calculateHex(color: Color) : string{
    let red: number = color.red;
    let green: number = color.green;
    let blue: number = color.blue;
    let hex: string = "#";
    hex += this.findHex(red);
    hex += this.findHex(green);
    hex += this.findHex(blue);
    console.log(hex);
    return hex;
  }

  findHex(color: number): string{
    let hex: string = "";
    let div: number = Math.floor(color/16);
    let sub: number = color/16 - div;
    let mul: number = Math.floor(sub*16);
    hex += this.array[div];
    hex += this.array[mul];
    return hex;
  }

  calculateInterpolation(c1: Color, c2: Color, t: number): Color{
    let res = new Color(0,0,0);
    res.red = c1.red + (c2.red - c1.red) * t;
    res.green = c1.green + (c2.green - c1.green) * t;
    res.blue = c1.blue + (c2.blue - c1.blue) * t;
    return res;
  }


  sendReq(){
    let token = localStorage.getItem("token");
    let lang = this.sentForm.get('lang')?.value
    let text = this.sentForm.get('text')?.value
    if(token != null){
      this.sentService.sentRequest(lang, text, token).subscribe((sentResponse) => {
        this.sentResponse = sentResponse;
        this.score = sentResponse.sentiment.score;
        this.type = sentResponse.sentiment.type;
        if(this.score >= 0){
          this.primaryColor = this.calculateInterpolation(this.brown, this.green, this.score);
        }else{
          this.primaryColor = this.calculateInterpolation(this.brown, this.red, Math.abs(this.score));
        }
        this.hexPrimaryColor = this.calculateHex(this.primaryColor);
      })
    }
  }


}
