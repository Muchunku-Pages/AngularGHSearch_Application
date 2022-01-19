import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repository } from 'src/app/repository';
import { User } from 'src/app/user';
import { InfoRetrievalService} from 'src/services/info-retrieval.service';


@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.css']
})
export class RepositoryDetailsComponent implements OnInit {


user!: User;
repositories!: Repository[];
active = 1;

constructor( private route:ActivatedRoute, private infoRetrievalService:InfoRetrievalService) { }

ngOnInit(): void {

this.route.params.subscribe(param=>{
  
  console.log(param);

this.infoRetrievalService.getProfileInfo(param.user).then((response:User)=>{

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
