import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../shared/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  error: string;

  constructor(
    private auth: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.username = '';
  }

  login(): void {
    this.auth.login(this.username).subscribe(value => {
      if (value){
        this.router.navigate(['/productList']);
      }
      else{
        this.error = "Korisnik ne postoji!";
      }
    });
  }

}
