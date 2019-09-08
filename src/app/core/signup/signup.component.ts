import { Component, OnInit } from '@angular/core';
import {HttpRequestsService} from '../../services/http-requests.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private httpRequest: HttpRequestsService, public router: Router) { }

  ngOnInit() {
  }

  addEmployee(event) {
    this.httpRequest.addUser(event).subscribe((resp) => {
      if (resp[`token`]) {
        localStorage.setItem('authToken', resp[`token`]);
        this.router.navigate(['home']);
      } else {
        /*  PUT TOAST MESSAGE HERE  */
      }
    });
  }

}
