import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DataUser } from './app.entity';
import {  UsersdataService } from '../service/usersdata/usersdata.service';
import { FormComponent } from "./form/form.component";
import { TableComponent } from "./table/table.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule, FormComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  title = 'tugas-day3';
  dataUser! : Array<DataUser>;
  addUserForm! : FormGroup;

  constructor (
    private userDataService : UsersdataService
  ){};


  ngOnInit(): void {
    this.title = 'Tabel Data User';
    this.dataUser = this.userDataService.getUsers();
  }

  checkOutput(event:any){
    this.userDataService.addUsers(event)
  }
}

