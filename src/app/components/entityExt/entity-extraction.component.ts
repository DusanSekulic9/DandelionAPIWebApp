import { Component, OnInit } from '@angular/core';
import {Annotation, extResponse, Lang} from "../../model";
import {BackendService} from "../../services/backend.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  extResponse: extResponse | undefined;
  annotations: Annotation[] = [];


  constructor(private backendService: BackendService, private formBuilder: FormBuilder) {
    this.extForm = this.formBuilder.group({
      // Odgovarajuce HTML elemente cemo povezati atributom formControlName="..."
      // ['default value', [validators]
      abstract: [false],
      categories: [false],
      image: [false],
      confidence: 0.5,
      text: ['',[Validators.required, Validators.minLength(4)]],
    })
  }

  extForm: FormGroup;

  ngOnInit(): void {
  }

  concate(abs: boolean,cat: boolean,img: boolean): string{
      let res: string = "";
      if(abs){
        res += 'abstract,';
      }
      if(cat){
        res += 'categories,'
      }
      if(img){
        res += 'image'
      }
      return res;
  }

  sendReq(){
    let token = localStorage.getItem("token");
    let abstract = this.extForm.get('abstract')?.value
    let categories = this.extForm.get('categories')?.value
    let image = this.extForm.get('image')?.value
    let text = this.extForm.get('text')?.value
    let includes = this.concate(abstract, categories, image);
    let confidence = this.extForm.get('confidence')?.value;
    if(token != null){
      this.backendService.extRequest(text, includes, confidence, token).subscribe((extResponse) => {
        this.extResponse = extResponse;
        this.annotations = extResponse.annotations;
        console.log(extResponse)
      })
    }
  }
}
