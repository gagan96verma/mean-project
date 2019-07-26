import { Component, OnInit } from '@angular/core';
import {HttpRequestsService} from '../services/http-requests.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private httpRequest: HttpRequestsService) { }

  ngOnInit() {
  }

  addEmployee(event) {
    this.httpRequest.addUser(event).subscribe((resp) => {
      console.log(resp);
    });
  }

}
