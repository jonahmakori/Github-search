import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Repos } from '../class/repos'

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {


  repos:Repos;
  reponame:string;
  show:number;


  constructor(private dataService: DataService) { 
    this.repos = new Repos ("","","",new Date());
    this.dataService.getRepoInfo().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });

     
  }


  searchRepo(){
    this.dataService.updateRepos(this.reponame);
    this.dataService.getRepoInfo().subscribe(repos => {
     console.log(repos);
     this.repos = repos;
   });
   
  }

  ngOnInit() {
  }

}
