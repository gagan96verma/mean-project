import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpRequestsService} from '../services/http-requests.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public httpService: HttpRequestsService) { }

  ngOnInit() {
    // this.logout();
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['login']);
  }

  loginOrSignUp(loginOrSignUp) {
    this.router.navigate([loginOrSignUp]);
  }

}
