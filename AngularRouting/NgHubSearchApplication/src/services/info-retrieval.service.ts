import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repository } from 'src/app/repository'
import { User } from 'src/app/user';
import { environment } from 'src/environments/environment';
import { SearchComponent} from 'src/app/search/search.component';

@Injectable({
  providedIn: 'root'

})
export class InfoRetrievalService {
  private username!: string; //Assignment to uncomment for static username search entry testing 
  private clientid = environment.clientId
  private clientkey = environment.clientKey
  

  constructor(private http:HttpClient, private url:User, private gitHubUsername:SearchComponent ) {
    //this.username ='Muchunku-Pages'//default static username to sub 'gitHubUsername' to uncomment when testing  
    
    this.gitHubUsername = gitHubUsername
    this.url= url
   }

   getProfileInfo(gitHubUsername:string):Promise<User>{
    return this.http.get<User>("https://api.github.com/users/" + gitHubUsername +"?client_id"+ this.clientid+ "&client_key" + this.clientkey)
    .toPromise();

    
  }

  getRepositories(url:User):Promise<Repository[]>{
    return this.http.get<Repository[]>( url +"?client_id"+ this.clientid + "&client_key" + this.clientkey)
    .toPromise();

    
  }
   
}
