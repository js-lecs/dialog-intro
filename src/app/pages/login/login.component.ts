import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: String = "";
  public password: String = "";

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  checkLogin() {
    if (this.username == 'abc' &&
      this.password == '123') {

      localStorage.setItem('loggedIn', 'true');

      alert("successfully logged in ");

      this.router.navigate(['/', 'app', 'home']);
    }
  }

}
