import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from 'src/app/services/student-service.service';
import { StudentModel } from 'src/app/studentModel';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit{
  
  studentModel: StudentModel = new StudentModel();

  constructor(
    private studentService:StudentServiceService,
    private router: Router
  ){}
  
  ngOnInit(): void {
    
  }

  saveStudent(){
    this.studentService.createStudent(this.studentModel).subscribe((data) => {
      console.log("This data is saved.",data)
      this.goToStudentList();
    },
    (error) => console.log(error)
    )
  }
  goToStudentList() {
    this.router.navigate(['/students']);
  }

  onSubmit(){
    console.log(this.studentModel);
    this.saveStudent();
  }

}
