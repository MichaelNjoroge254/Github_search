import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { User } from '../user';
import { Repo } from '../repo';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  user!:User;
  repos:any;

  constructor( private service:SearchService ) { }


  getSearchedUser(username:string) {
    this.service.getSearched(username).then(
      (success) => {
        this.user = this.service.user;
        console.log(this.user);
      },
      (error) => {
        console.log(error);
      });
      this.service.getRepos(username).then((success) => {
        this.repos =this.service.repos;
        console.log(this.repos)
      },
       (error)=>{
         console.log(error)
      
      });
    }
 
   

  ngOnInit(): void {
    this.getSearchedUser('Becka7');
  }

}