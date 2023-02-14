import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';

const routes: Routes = [
  {
    path: 'students',
    component: StudentListComponent
  },
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  },
  {
    path: 'create-student',
    component: CreateStudentComponent
  },
  {
    path: 'update-student/:id',
    component: UpdateStudentComponent
  },
  {
    path: 'student-details/:id',
    component: StudentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
