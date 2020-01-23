import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class DataService {


  private username: string;
  private reponame: string;
  private show:number
 

  constructor(private http:Http) {
    console.log('service is ready');
    this.username = 'jonahmakori';


   }

   getUsers(){
     return this.http.get(environment.apiUrl+'users/'+ this.username + "?access_token=" + environment.accessToken).pipe(map(res => res.json()));
   }

   getRepos(){
    return this.http.get(environment.apiUrl+ 'users/' + this.username + "/repos?order=created&sort=asc?access_token=" + environment.accessToken).pipe(map(res => res.json()));
  }

  getRepoInfo(){
    return this.http.get( environment.apiUrl + 'search/repositories?q={' + this.reponame +'}&per_page='+this.show+'&sort=forks&order=asc?' + environment.accessToken).pipe(map(res => res.json()));
  }

  updateUsers(username:string){
    this.username = username;
  }


  updateRepos(reponame:string){
    this.reponame = reponame;
  }

  updateShow(show:number){
    this.show = this.show+10;
  }
}
