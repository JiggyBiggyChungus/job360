import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-register-business',
  templateUrl: './register-business.component.html',
  styleUrls: ['./register-business.component.css']
})
export class RegisterBusinessComponent implements OnInit {
  businessForm = this.fb.group({
    businessName: ["", Validators.required],
    shortDescription: ["", Validators.required],
    hqAdress: this.fb.group({
      street: ["", Validators.required],
      city: ["", Validators.required],
      canton: ["", Validators.required],
      plz: ["", Validators.required]
    }),
    credentials: this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    })
  })

  onSubmit() {
    // only available when form is valid, so no extra validation required
    let newBusiness = this.businessForm.value
    this.http.post<any>("http://localhost:8000/new-business/", newBusiness).subscribe()
  }

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  ngOnInit(): void {
  }

}
