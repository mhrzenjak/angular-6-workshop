import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../shared/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;

  constructor(private auth: AuthentificationService) { }

  ngOnInit() {
    this.username = '';
  }

  login(): void {
    let success: boolean;

    this.auth.login(this.username);
  }

}
