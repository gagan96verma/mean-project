import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import validator from 'validator';
import {HttpRequestsService} from '../../services/http-requests.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    userForm: FormGroup;
    validator: any;
    @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

    constructor(public formBuilder: FormBuilder, private httpRequest: HttpRequestsService) { }

    ngOnInit() {
        this.initializeForm();
        this.httpRequest.getEmployeesList().subscribe((resp) => {
            console.log(resp);
        });
    }

    initializeForm() {
        this.userForm = this.formBuilder.group({
            first_name: [''],
            last_name: [''],
            email: [''],
            zip_code: [''],
            password: ['']
        });
    }

    get firstName() {
      return this.userForm.get('firstName');
    }

    get lastName() {
      return this.userForm.get('lastName');
    }

    get email() {
      return this.userForm.get('email');
    }

    get zipCode() {
        return this.userForm.get('zipCode');
    }

    get password() {
      return this.userForm.get('password');
    }

    get values() {
      return this.userForm.value;
    }

    submitForm() {
        // this.validator = validator;
        // const pcode = validator.isPostalCode('1234s', 'any');
        // console.log(pcode);
        // console.log(this.values);
        this.onSubmit.emit(this.values);
    }

}
