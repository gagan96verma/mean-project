import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {HttpRequestsService} from './services/http-requests.service';

@Injectable()
export class AuthInterceptors implements HttpInterceptor {

  constructor(private httpRequestService: HttpRequestsService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = req.clone({
      headers: req.headers.set('auth_token', this.httpRequestService.getToken())
    });
    return next.handle(authToken);
  }
}
