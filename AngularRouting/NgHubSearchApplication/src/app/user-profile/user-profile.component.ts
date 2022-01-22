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


  constructor(private route:ActivatedRoute, private infoRetrievalService:InfoRetrievalService, ) { }

  ngOnInit(): void{
   
  this.route.params.subscribe(param=>{
    
    console.log(param);
  
  this.infoRetrievalService.getProfileInfo(param.user).then((response:User)=>{
     //Success
    console.log(response);
  
  return this.user = response;

        
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
 