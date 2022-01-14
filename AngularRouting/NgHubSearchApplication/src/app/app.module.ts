import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserProfileComponent,
    RepositoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
