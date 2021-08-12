import { Injectable } from '@angular/core';
import { User } from './user';
import { Repo } from './repo';
import {Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
import { stringify } from '@angular/compiler/src/util';



@Injectable({
  providedIn: 'root'
})
export class SearchService {
    user!:User;
    repos!:Repo;

  constructor( private http:HttpClient) { 
    this.user = new User("","","","","","",0,0,"","","");
    this.repos = new Repo("","","",new Date(),"","");
  }

  
  getSearched(username:string){
    interface ApiResponse{
      avatar_url: string,
      name: string,
      bio: string,
      login :string,
      company: string,
      location: string,
      followers: number,
      following: number,
      public_repos:string,
      searchTerm:string,
      repos_url:string;
     
      

}

let searchUserUrl = 'https://api.github.com/users/'+username+'?access_token=' ;
// let searchUserUrl='https://api.github.com/users/'+username+'?client_id='+environment.CLIENTID ;

  

let promise = new Promise<void>((resolve,reject) =>{
  this.http.get<ApiResponse>(searchUserUrl).toPromise().then
  (response => {
    this.user = response;

    resolve()
  },
  error=>{
    this.user.name = "We couldn’t find any users with that name"

    reject(error)
    })
  })
  return promise;
}


getRepos(username:string){
  interface ApiResponse{
    name: string,
    description: string,
    html_url :string,
    created_at: Date,
    downloads_url:string,
    language:string,
    

      
  }


  let RepoUrl='https://api.github.com/users/'+username+'/repos?order=created&sort=asc?access_token=';
;

  let promise = new Promise<void>((resolve,reject) =>{
    this.http.get<ApiResponse>(RepoUrl).toPromise().then
    (response => {
        this.repos = response;
        // console.log(this.repo);
      resolve()
    },
    error=>{
      this.repos.name = "We couldn’t find any repositories matching the name given"

      reject(error)
      })
    })
    return promise;


}


}
