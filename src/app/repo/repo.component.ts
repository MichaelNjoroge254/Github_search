import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repos!:any;

  public searchQuery!:string;

  constructor() { }

 @Output() searchResponse = new EventEmitter<any>();

  findUser() {
      
    let term = this.searchQuery
    this.searchResponse.emit(term);
    
    console.log(this.searchResponse.emit(term))
    }


  ngOnInit(): void {
  }

}
