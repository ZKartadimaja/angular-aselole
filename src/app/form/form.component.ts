import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataUser } from '../app.entity';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  addUserForm! : FormGroup
  dataUser! : DataUser
  
  @Output() submitButton = new EventEmitter<DataUser>();

  constructor(){
    this.addUserForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      city: new FormControl('', [Validators.required]),
      province: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required]),
      paymentDeadline: new FormControl(new Date(), [Validators.required])
      // action: new FormControl('', [Validators.required]),
    });
  }

  get nameForm() {
    return this.addUserForm.get('name');
  }

  get emailForm() {
    return this.addUserForm.get('email');
  }

  get cityForm() {
    return this.addUserForm.get('city');
  }

  get provinceForm() {
    return this.addUserForm.get('province');
  }

  get zipcodeForm() {
    return this.addUserForm.get('zipcode');
  }

  get paymentDeadlineForm() {
    return this.addUserForm.get('paymentDeadline')
  }

  onClick(){
    const dateSplit = this.paymentDeadlineForm?.value.split('-')
    this.dataUser={
      name: this.nameForm?.value,
      email: this.emailForm?.value,
      address: {
        province: this.provinceForm?.value,
        city: this.cityForm?.value,
        zipcode: this.zipcodeForm?.value
      },
      paymentDeadline: new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]),
      completed: false
    }
    this.submitButton.emit(this.dataUser);
  }
}


