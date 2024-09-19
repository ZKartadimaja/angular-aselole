import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataUser } from '../app.entity';
import { UsersdataService } from '../../service/usersdata/usersdata.service';
import { SnackBarService } from '../../service/snackbar/snackbar.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent {
  @Input() users: Array<DataUser> = []
  isCompleted     : boolean = false;
  todayDate: Date = new Date()
  isDue!: number;
  
  constructor(
    private userDataService : UsersdataService,
    private snackbarService: SnackBarService
  ){};

  deleteUsers(event:any){
    this.userDataService.deleteUsers(event)
    this.trigger('Data successfully deleted ', '')
  }

  onChecked(index:number){
    this.userDataService.onChecked(index)
  }

  trigger(message: string, action: string) {
    this.snackbarService.openSnackBar(message, action)
  }
  
  dateDifference(date: Date): number {
    const res = this.todayDate.getDate() - date.getDate();
    return res
  }

  dateDifferenceAbs(date: Date) {
    // console.log("date 2", date)
    const res = Math.abs(this.todayDate.getDate() - date.getDate());
    return res;}
}
