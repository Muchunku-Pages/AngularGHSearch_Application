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


constructor( private route:ActivatedRoute, private infoRetrievalService:InfoRetrievalService) { }

ngOnInit(): void {

this.route.params.subscribe(param=>{
  
  console.log(param);
   
this.infoRetrievalService.getRepositories(param.repositories).then((repositoryResponse:Repository[])=>{

  console.log(repositoryResponse);

return this.repositories = repositoryResponse;

     })
    
   })
  
  }

 }

//Alternative Syntax:
 
 //resolve(); 

//err =>{
    //Error
 //   reject(err);  
//})

//}

