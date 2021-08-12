import { Component, OnInit ,Output,EventEmitter } from '@angular/core';
import {FormsModule } from '@angular/forms';
import{SearchService} from '../search.service';
import { NgModule } from '@angular/core';
import { User } from '../user';
import { from } from 'rxjs';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
 
  public searchQuery!:string;
  

  @Output() searchResponse = new EventEmitter<any>();

  
  constructor() { }


  findUser() {
      
    let term = this.searchQuery
    this.searchResponse.emit(term);
    
    console.log(this.searchResponse.emit(term))
    }

  ngOnInit(): void {
  }

}

