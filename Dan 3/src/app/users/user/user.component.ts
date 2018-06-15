import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from '../shared/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: number;

  user: User;
  
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(value => {
      this.getUser(value['id']);
    });
  }

  getUser(id: number){
    this.userService.getUser(id).subscribe(value => {
      this.user = value;
    });
  }

}
