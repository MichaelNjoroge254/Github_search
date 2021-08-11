import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoComponent } from './repo/repo.component';
import { UserpageComponent } from './userpage/userpage.component';

const routes: Routes = [
  {path: 'repo', component:RepoComponent},
  {path: 'userpage', component:UserpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
