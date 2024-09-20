import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataUser } from '../../app/app.entity';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  
  private apiUrl = 'https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/employee'
  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get(this.apiUrl);
  }

  createUser(payload: DataUser){
    return this.httpClient.post(this.apiUrl, payload) 
  }

  deleteUser(id: string){
    const idUrl = `${this.apiUrl}/${id}`
    return this.httpClient.delete(idUrl) 
  }

  getById(id: string){
    const idUrl = `${this.apiUrl}/${id}`
    return this.httpClient.get(idUrl)
  }

  updateUser(payload: DataUser, id:string){
    const idUrl = `${this.apiUrl}/${id}`
    return this.httpClient.put(idUrl, payload)
  }

  
}
