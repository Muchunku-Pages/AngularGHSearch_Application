import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {RepositoryDetailsComponent} from './repository-details/repository-details.component';

const routes: Routes = [
{path:"", component:SearchComponent },

{path:"user-profile/:githubUsername", component:UserProfileComponent},

{path:"repository-details/:githubUsername", component:RepositoryDetailsComponent}

   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
