import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from 'src/app/repository'
import { User } from 'src/app/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'

})
export class InfoRetrievalService {
  private username!: string;
  private clientid = environment.clientId
  private clientsecret = environment.clientSecret
 

  constructor(private http:HttpClient) {
    this.username ='Muchunku-Pages'
   }

   getProfileInfo(username:string):Promise<User>{
    return this.http.get<User>("https://api.github.com/users/" + username +"?client_id"+ this.clientid + "&client_secret" + this.clientsecret)
    .toPromise();
  }

  getRepositories(url:string):Promise<Repository[]>{
    return this.http.get<Repository[]>( url +"?client_id"+ this.clientid + "&client_secret" + this.clientsecret)
    .toPromise();
  }
   
}
