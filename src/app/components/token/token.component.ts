import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.tokenForm = this.formBuilder.group({
      // Odgovarajuce HTML elemente cemo povezati atributom formControlName="..."
      // ['default value', [validators]
      token: ['',[Validators.required, Validators.minLength(4)]]
    })
  }

  ngOnInit(): void {
  }

  tokenForm: FormGroup;

  addToken(){
    let token = this.tokenForm.get('token')?.value;
    if(token != null) {
      localStorage.setItem("token", token);
      this.tokenForm.reset();
    }else{
      localStorage.setItem("notToken", "Test");
    }
  }

}
