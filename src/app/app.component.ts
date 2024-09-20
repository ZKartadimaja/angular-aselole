import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DataUser } from './app.entity';
import {  UsersdataService } from '../service/usersdata/usersdata.service';
// import { FormComponent } from "./form/form.component";
// import { TableComponent } from "./table/table.component";
import { HttpRequestService } from '../service/http-service/http-request.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title         = 'tugas-day3';
  dataUser!     : Array<DataUser>;
  addUserForm!  : FormGroup;
  isLoading     : boolean = false;
  apiUrl        = 'https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/employee';

  constructor (
    private userDataService : UsersdataService,
    private httpRequestService : HttpRequestService
  ){};


  // ngOnInit(): void {
  //   this.title = 'Tabel Data User';
  //   // this.dataUser = this.userDataService.getUsers();
  //   this.fetchDataUser()
  // }

  // fetchDataUser(){
  //   this.isLoading = true;
  //   this.httpRequestService.getData().subscribe((res: any) => {
  //     this.isLoading = false;
  //     this.dataUser = res;
  //     console.log(res)
  //   }, (err) => {console.log(err)})
  // }

  // createUser(event: any){
  //   // const payload = this.dataUser;
  //   this.httpRequestService.createUser(event).subscribe((res: any) => {
  //     console.log("Data Succesfully Save", res),
  //     this.fetchDataUser()
  //   });
  // }

  
  // checkOutput(event:any){
  //   this.userDataService.addUsers(event)
  // }
}

