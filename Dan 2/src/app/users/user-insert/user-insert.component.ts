import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'user-insert',
  templateUrl: './user-insert.component.html',
  styleUrls: ['./user-insert.component.css']
})
export class UserInsertComponent implements OnInit {

  user: User;

  @ViewChild('userForm')
  userForm: NgForm;

  constructor() { }

  ngOnInit() {
    this.user = new User();
  }

  save(){
    if (this.userForm.valid){
      console.log("Spremljeno!");
    }
  }

}
