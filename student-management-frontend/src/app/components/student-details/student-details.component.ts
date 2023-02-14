import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from 'src/app/services/student-service.service';
import { StudentModel } from 'src/app/studentModel';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{
  id: any;
  studentModel: StudentModel =  new StudentModel();
  
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentServiceService
  ){}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.studentService.getStudentById(this.id).subscribe((data) =>{
      this.studentModel = data;
    })
    
  }

}
