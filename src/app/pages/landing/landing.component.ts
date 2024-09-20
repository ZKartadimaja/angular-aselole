import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersdataService } from '../../../service/usersdata/usersdata.service';
import { SnackBarService } from '../../../service/snackbar/snackbar.service';
import { DataUser } from '../../app.entity';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { HttpRequestService } from '../../../service/http-service/http-request.service';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  title         = 'tugas-day3';
  dataUser!     : Array<any>;
  addUserForm!  : FormGroup;
  isLoading     : boolean = false;
  apiUrl        = 'https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/employee';

  constructor (
    private userDataService : UsersdataService,
    private httpRequestService : HttpRequestService,
    public router: Router,
    private snackbarService: SnackBarService
  ){
    this.fetchDataUser()
  };

  fetchDataUser(){
    this.isLoading = true;
    this.httpRequestService.getData().subscribe((res: any) => {
      this.isLoading = false;
      this.dataUser = res;
      console.log(res)
    }, (err) => {console.log(err)})
  }

  deleteUser(event: any){
    this.httpRequestService.deleteUser(event).subscribe((res: any) => {
      this.snackbarService.openSnackBar('Data Succesfully deleted', '')
      this.fetchDataUser()},
      (err) => {this.snackbarService.openSnackBar('Error Data', '')
    });
  }

  goToAdd(){
    this.router.navigate(['/add'])
  }

  onChecked(id: string, event: any){
    this.isLoading = true;
    const isCheck = event.target.checked;
    const selectedUser = this.dataUser.find((user) => user.id === id);
    const payload = {
      ...selectedUser,
      isChecked: isCheck,
    };
    this.httpRequestService.updateUser(payload, id).subscribe((res: any) => {
      this.snackbarService.openSnackBar('Data Succesfully update', '')
      this.fetchDataUser()
    },
      (err) => {this.snackbarService.openSnackBar('Error Update Data  ', '')
    });
  }

  trigger(message: string, action: string) {
    
    this.snackbarService.openSnackBar(message, action)
  }
}

