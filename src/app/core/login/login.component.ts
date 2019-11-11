import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpRequestsService} from '../../services/http-requests.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private httpRequest: HttpRequestsService, private router: Router, private toasterService: ToastrService) { }

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
      if (resp[`token`]) {
        localStorage.setItem('authToken', resp[`token`]);
        this.router.navigate(['home']);
      } else {
        this.toasterService.error(resp.toString());
      }
    }, error => {
      this.toasterService.error(error.toString());
    });
  }

}
