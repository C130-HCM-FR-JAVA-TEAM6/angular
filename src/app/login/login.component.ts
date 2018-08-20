import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  account;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  submit(){
    this.loginService.login(this.username,this.password)
    .then(res => {
      this.account = res
    })
    .catch(error => console.log("error login"))
  }

}
