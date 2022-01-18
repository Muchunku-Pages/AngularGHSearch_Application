import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repository } from 'src/app/repository';
import { User } from 'src/app/user';
import { InfoRetrievalService} from 'src/services/info-retrieval.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user!: User;
  repositories!: Repository[];
  active = 1;

  constructor( activeRoute:ActivatedRoute, private infoRetrievalService:InfoRetrievalService) { }

  ngOnInit(): void {
  
  this.activeRoute.params.subscribe(param=>{
    
    console.log(param);
  
  this.infoRetrievalService.getProfileInfo(param.username).then((response:User)=>{

    console.log(response);

     this.user = response;
     
  this.infoRetrievalService.getRepositories(response.repos_url).then((repositoryResponse:Repository[])=>{

    console.log(repositoryResponse);

    this.repositories = repositoryResponse;

         }) 
  
      })
      
    })
    


  
  
  }

}
