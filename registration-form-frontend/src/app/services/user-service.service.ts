import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../userModel';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = "http://localhost:8080/user";

  constructor(private http: HttpClient) { }

  createUser(user: UserModel):Observable<Object>{
    return this.http.post(`${this.baseUrl}/createuser`,user)
  }

  getAllUsers():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.baseUrl}/listAll`)
  }

  getUserById(id: number):Observable<UserModel>{
    return this.http.get<UserModel>(`${this.baseUrl}/listuser/${id}`)
  }
}
