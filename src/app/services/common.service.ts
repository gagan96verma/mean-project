import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  toastMessage: string;

  constructor() { }

  isAuthenticated() {
    const token = localStorage.getItem('authToken') ? localStorage.getItem('authToken') : '';
    return token ? true : false;
  }
}
