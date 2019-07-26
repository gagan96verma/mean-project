import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpRequestsService} from '../services/http-requests.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private httpRequest: HttpRequestsService) { }

  ngOnInit() {
    this.initilizeForm();
  }

  initilizeForm() {
    this.loginForm = this.fb.group({
        email: [''],
        password: ['']
    });
  }

  get values() {
    return this.loginForm.value;
  }

  submitForm() {
    this.httpRequest.login(this.values).subscribe(resp => {
      console.log('Login Successful!!');
    });
  }

}
