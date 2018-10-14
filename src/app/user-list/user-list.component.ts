import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {UserService} from '../services/user.service';
import {User} from '../model/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Observable<User[]>;

  constructor(private accountService: UserService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.users = this.accountService.getCustomersList();
  }
}
