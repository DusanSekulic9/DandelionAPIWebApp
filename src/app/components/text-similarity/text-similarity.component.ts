import { Component, OnInit } from '@angular/core';
import {Lang, simResponse} from "../../model";
import {BackendService} from "../../services/backend.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  simResponse: simResponse | undefined;
  similarity: number = 0;

  constructor(private backendService: BackendService, private formBuilder: FormBuilder) {
    this.simForm = this.formBuilder.group({
      // Odgovarajuce HTML elemente cemo povezati atributom formControlName="..."
      // ['default value', [validators]
      text1: ['',[Validators.required, Validators.minLength(4)]],
      text2: ['',[Validators.required, Validators.minLength(4)]],
    })
  }

  simForm: FormGroup;

  ngOnInit(): void {
  }

  sendReq(){
    let token = localStorage.getItem("token");
    let text1 = this.simForm.get('text1')?.value
    let text2 = this.simForm.get('text2')?.value
    if(token != null){
      this.backendService.simRequest(text1, text2, token).subscribe((simResponse) => {
        this.simResponse = simResponse;
        this.similarity = simResponse.similarity * 100;
      })
    }
  }

}
