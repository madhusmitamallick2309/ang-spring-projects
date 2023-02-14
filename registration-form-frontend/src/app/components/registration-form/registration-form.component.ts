import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { UserModel } from 'src/app/userModel';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  user: UserModel = new UserModel();
  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  saveUser() {
    this.userService.createUser(this.user).subscribe(
      (data) => {
        console.log('This data is saved.', data);
        this.reloadPage();
      },
      (error) => console.log(error)
    );
  }

  reloadPage(){
    window.location.reload()
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }
}
