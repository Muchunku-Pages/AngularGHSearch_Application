import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent} from './search/search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserProfileComponent,
    RepositoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
