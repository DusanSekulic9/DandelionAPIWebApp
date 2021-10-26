import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../services/backend.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Lang, liResponse} from "../../model";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  liResponse: liResponse | undefined;
  detectedLangs: Lang[] = [];

  constructor(private backendService: BackendService, private formBuilder: FormBuilder) {
    this.liForm = this.formBuilder.group({
      // Odgovarajuce HTML elemente cemo povezati atributom formControlName="..."
      // ['default value', [validators]
      clean: [false],
      text: ['',[Validators.required, Validators.minLength(4)]],
    })
  }

  liForm: FormGroup;

  ngOnInit(): void {
  }

  sendReq(){
    let token = localStorage.getItem("token");
    let clean = this.liForm.get('clean')?.value
    let text = this.liForm.get('text')?.value
    if(token != null){
      this.backendService.liRequest(text, clean, token).subscribe((liResponse) => {
        this.liResponse = liResponse;
        this.detectedLangs = liResponse.detectedLangs;
      })
    }
  }

}
