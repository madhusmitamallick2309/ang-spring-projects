import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from 'src/app/services/student-service.service';
import { StudentModel } from 'src/app/studentModel';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
})
export class UpdateStudentComponent implements OnInit {
  id: any;
  studentModel: StudentModel = new StudentModel();

  constructor(
    private studentService: StudentServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(
      (data) => {
        this.studentModel = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.studentService.updateStudent(this.id, this.studentModel).subscribe(
      (data) => {
        this.goToStudentList();
      },
      (error) => console.log(error)
    );
  }
  goToStudentList() {
    this.router.navigate(['/students']);
  }
}
