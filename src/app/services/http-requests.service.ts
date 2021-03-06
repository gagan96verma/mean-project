import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  constructor(private httpClient: HttpClient) { }

  getEmployeesList() {
    return this.httpClient.get('http://localhost:8900');
  }

  addUser(data) {
    return this.httpClient.post('http://localhost:8900/api/signup', data);
  }

  login(data) {
    return this.httpClient.post('http://localhost:8900/api/login', data);
  }

  getToken() {
    return localStorage.getItem('authToken') ? localStorage.getItem('authToken') : '';
  }

  createPost(postData) {
    return this.httpClient.post('http://localhost:8900/api/create-post', postData);
  }

  getPosts() {
    return this.httpClient.get('http://localhost:8900/api/all-posts');
  }
}
