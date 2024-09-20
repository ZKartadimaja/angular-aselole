import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataUser } from '../../app.entity';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpRequestService } from '../../../service/http-service/http-request.service';
import { SnackBarService } from '../../../service/snackbar/snackbar.service';

@Component({
  selector: 'app-detail-user',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './detail-user.component.html',
  styleUrl: './detail-user.component.scss'
})
export class DetailUserComponent{
  title         = 'tugas-day3';
  addUserForm!: FormGroup
  dataUser!:    DataUser
  // idUrl:        string | null = null;
  // methodeUrl:   string | null = null;
  isLoading:    boolean = false;
  apiUrl: string =       'https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/employee';
  pathId!:      string | null;
  
  // @Output() submitButton = new EventEmitter<DataUser>();

  
  constructor(
    private activatedRoute : ActivatedRoute,
    private httpRequestService : HttpRequestService,
    private router: Router,
    private snackbar: SnackBarService
  ){
    // this.idUrl = this.activatedRoute.snapshot.paramMap.get('id');
    // this.methodeUrl = this.activatedRoute.snapshot.paramMap.get('methode')
    // this.activatedRoute.queryParams.subscribe(params => console.log(params));
    // console.log(this.activatedRoute.snapshot.paramMap);
    // console.log(this.idUrl)
    // console.log(this.methodeUrl)
    
    // Form Control 
    this.addUserForm = new FormGroup({
      username : new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      basicSalary: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      province: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required]),
      paymentDeadline: new FormControl(new Date(), [Validators.required]),
      age: new FormControl('', [Validators.required])
    })

    this.pathId = activatedRoute.snapshot.paramMap.get('id');
    if (this.pathId) {
      this.isLoading = true
      this.httpRequestService.getById(this.pathId).subscribe({
        next: (response: any) => {
          this.addUserForm.get('name')?.setValue(response?.name);
          this.addUserForm.get('username')?.setValue(response?.username);
          this.addUserForm.get('email')?.setValue(response?.email);
          this.addUserForm
          .get('paymentDeadline')
          ?.setValue(response?.paymentDeadline.split('T')[0]);  // get yyyy-mm-dd
          this.addUserForm.get('city')?.setValue(response?.city);
          this.addUserForm.get('province')?.setValue(response?.province);
          this.addUserForm.get('zipCode')?.setValue(response?.zipcode);
          this.addUserForm.get('age')?.setValue(response?.age);
          this.addUserForm.get('basicSalary')?.setValue(response?.basicSalary);
          
        },
        error: (error: any) => {
          console.error(error,"Tolonggggg");
          router.navigate(['/404']);
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    }
    else{}
  }
  onClick(){
    try {
      const payload: DataUser = {
        username        : this.addUserForm.get('username')?.value,
        name            : this.addUserForm.get('name')?.value,
        email           : this.addUserForm.get('email')?.value,
        paymentDeadline : new Date(),
        city            : this.addUserForm.get('city')?.value,
        province        : this.addUserForm.get('province')?.value,
        zipcode         : this.addUserForm.get('zipCode')?.value,
        isChecked       : false,
        age             : this.addUserForm.get('age')?.value,
        basicSalary     : this.addUserForm.get('basicSalary')?.value,
      };
      if(this.pathId === null) {
        this.httpRequestService.createUser(payload).subscribe({
          next: (res) => {
            this.snackbar.openSnackBar('New Data Has Been Saved', '');
            this.router.navigate(['']);
          },
          error: (err) => {
            this.snackbar.openSnackBar('Error adding new user', '');
            console.error(err);
          },
          complete: () => {
            this.isLoading = false;
          },
        });
      } else {
        this.httpRequestService.updateUser(payload, this.pathId).subscribe({
          next: (res) => {
            this.snackbar.openSnackBar('Success adding update user information', '');
            this.router.navigate(['']);
          },
          error: (err) => {
            this.snackbar.openSnackBar('Error adding new user', '');
            console.error(err);
          },
          complete: () => {
            this.isLoading = false;
          }
        })
      }
    } catch (error) {
      this.snackbar.openSnackBar('Error adding new user', '');
      console.error(error);
    }
  }
};

  

  

  // ngOnInit(): void {
  //   this.title = 'Tabel Data User';
  //   // this.dataUser = this.userDataService.getUsers();
  //   // 
  // }
  // fetchDataUser(){
  //   this.isLoading = true;
  //   this.httpRequestService.getData().subscribe((res: any) => {
  //     this.isLoading = false;
  //     this.dataUser = res;
  //     console.log(res)}, (err) => {console.log(err)})
  //   }
  
  // createUser(event: any){
  //   this.httpRequestService.createUser(event).subscribe((res: any) => {
  //     console.log("Data Succesfully Save", res),
  //     // this.fetchDataUser(),
  //     this.router.navigate([''])
  //   });
  // }
  // deleteUser(event: any){
  //   this.httpRequestService.deleteUser(event).subscribe((res: any) => {
  //     console.log("Data Succesfully Save", res),
  //     this.fetchDataUser()
  //   });
  // }

  // constructor(
    
  // ){
    
      // action: new FormControl('', [Validators.required]),
  //   });
  // }

  
 

  // fetchDataUser(event:any){
  //   this.isLoading = true;
  //   this.httpRequestService.getById().subscribe((res: any) => {
  //     this.isLoading = false;
  //     this.nameForm?.setValue(res?.name);
  //     this.usernameForm?.setValue(res?.username);
  //     this.emailForm?.setValu(res.email);
  //     this.basicSalaryForm?.setValue(res.basicSalary);
  //     this.provinceForm?.setValue(res.province);
  //     this.cityForm?.setValue(res.city);
  //     this.zipcodeForm?.setValue(res.zipcode);
  //     this.paymentDeadlineForm?.setValue(res.paymentDeadline);
  //     console.log(res)
  //   }, (err) => {console.log(err)})
  // }

  // goToLanding () {
  //   this.router.navigate([''])
  // }
// }