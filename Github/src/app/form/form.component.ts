import { EventEmitter, Component, OnInit, Output } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() emitSearch:EventEmitter<string> = new EventEmitter<any>()

  username: string | undefined;

  searchFormControl=new FormControl('', [
    Validators.required
  ]);

  constructor() { }

  search(event: { keyCode: number; }) {
  
    if(event.keyCode===13){
      this.emitSearch.emit(this.username)
      this.searchFormControl.reset();
    }
  
    }

  ngOnInit() {
  }

}
