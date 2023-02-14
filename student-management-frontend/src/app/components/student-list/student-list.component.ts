import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from 'src/app/services/student-service.service';
import { StudentModel } from 'src/app/studentModel';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentModel: StudentModel[] =[];

  constructor(private studentService: StudentServiceService, private router: Router){}

  ngOnInit(): void{
    this.getStudents();
  }

  private getStudents(){
    this.studentService.getStudentList().subscribe((data) => {
      this.studentModel = data;
    })
  }

  studentDetails(id : number){
    this.router.navigate(['student-details',id])
  }

  studentUpdate(id: number){
    this.router.navigate(['update-student',id])
  }

  deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe(data =>{
      console.log(data);
      this.getStudents();
    })
  }

}
