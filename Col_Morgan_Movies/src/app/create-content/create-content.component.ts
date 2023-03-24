import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})

export class CreateContentComponent {
  constructor(){

  let ourPromise = new Promise((success, fail) =>{
  let testPass = true;
  if (testPass){
    success("Success was achieved!");
  } else {
    fail("Failure : (");
  }
  });


  
  }

  @Output() newBandEvent = new EventEmitter<Content>();
newBandItem: Content | undefined;
addBand(): void{
this.newBandEvent.emit(this.newBandItem);
}
}
