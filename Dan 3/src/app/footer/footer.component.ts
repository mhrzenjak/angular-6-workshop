import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../shared/authentification.service';
import { User } from '../users/user/user.model';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  user: User;

  constructor(private auth: AuthentificationService) { }

  ngOnInit() {
    this.user = this.auth.getUserInfo();
  }

}
