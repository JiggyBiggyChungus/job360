import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-register-business',
  templateUrl: './register-business.component.html',
  styleUrls: ['./register-business.component.css']
})

//Validation, sending to microservice
export class RegisterBusinessComponent implements OnInit {
  businessForm = this.fb.group({
    businessName: [""],
//    shortDescription: [""],
//    hqAdress: this.fb.group({
//      street: [""],
//      city: [""],
//      canton: [""],
//      PLZ: [""]
//    })
  })

  onSubmit(){
    console.warn(this.businessForm.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
