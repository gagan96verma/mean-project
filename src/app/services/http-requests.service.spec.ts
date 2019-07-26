import { TestBed } from '@angular/core/testing';

import { HttpRequestsService } from './http-requests.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('HttpRequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      providers: [
          HttpClient,
          HttpHandler
      ]
  }));

  it('should be created', () => {
    const service: HttpRequestsService = TestBed.get(HttpRequestsService);
    expect(service).toBeTruthy();
  });

  it('SHould return expected employees', () => {
      const service: HttpRequestsService = TestBed.get(HttpRequestsService);
      const expectedEmployees = [{email: 'gagan.verma@engineer.ai',
          first_name: 'Gagan',
          last_name: 'Verma',
          password: '123123',
          zip_code: '122022',
          _id: '2323233sfsd',
          __v: 0}];
      service.getEmployeesList().subscribe(employees => {
          expect(employees).toEqual(expectedEmployees, 'Expected Employees');
      }, (error) => {
          console.log(error);
      });
      });
});
