import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 hubSearchForm:FormGroup = new FormGroup({ 
   
   hubSearch: new FormControl("")

 })

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  searchUsername(event:any){
    event.preventDefault();

    let githubUsername = this.hubSearchForm.get('hubSearchEntry')

    this.router.navigate(["/user-profile",githubUsername])



  }


}
