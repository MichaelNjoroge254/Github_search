import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserpageComponent } from './userpage/userpage.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { SearchService } from './search.service';
import { DateCountPipe } from './date-count.pipe';
import { RepoComponent } from './repo/repo.component';



@NgModule({
  declarations: [
    AppComponent,
    UserpageComponent,
    SearchUserComponent,
    DateCountPipe,
    RepoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
