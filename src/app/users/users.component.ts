import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Users } from '../class/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users;
  repos:any;
  created_at:any;
  username:string;


  constructor(private dataService: DataService) {
    this.users = new Users ("","","","","","","","",0,true,"",new Date(),0,0);
    this.dataService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    });

    this.dataService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })

    // Repeated subscribing of dataservice to allow for the display of default data 
   }


   searchUser(){
     this.dataService.updateUsers(this.username);
     this.dataService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    });

    this.dataService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
   }

  ngOnInit() {
  }

}
