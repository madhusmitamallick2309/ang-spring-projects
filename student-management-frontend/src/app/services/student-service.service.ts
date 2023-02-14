import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from '../studentModel';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private baseUrl = "http://localhost:8080/studentManagement";

  constructor(private httpClient: HttpClient) { }

  // all the spring apis will go here...

  getStudentList(): Observable<StudentModel[]>{
    return this.httpClient.get<StudentModel[]>(`${this.baseUrl}/listAll`);
  }

  createStudent(studentModel:StudentModel):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/createStudent`,studentModel);
  }

  getStudentById(studentId : number):Observable<StudentModel>{
    return this.httpClient.get<StudentModel>(`${this.baseUrl}/listStudent/${studentId}`)
  }

  updateStudent(studentId: number, studentModel:StudentModel):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/updateStudent/${studentId}`,studentModel);
  }

  deleteStudent(studentId:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/deleteStudent/${studentId}`);
  }

}
