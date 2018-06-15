import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: Array<User>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userList = new Array<User>();
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(value => {
      this.userList = value;
    });
  }

}
