import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})



export class ContentCardComponent {
  myContentList : ContentList = new ContentList();

  contentItem1 : Content = {
    id: 0,
    title: `title1`,
    description: `description for title1`,
    creator: `creator1`
  }

  contentItem2 : Content = {
    id: 1,
    title: `title2`,
    description: `description for title2`,
    creator: `creator2`
  }

  contentItem3 : Content = {
    id: 2,
    title: `title3`,
    description: `description for title3`,
    creator: `creator3`
  }

  contentItem4 : Content = {
    id: 3,
    title: `title4`,
    description: `description for title4`,
    creator: `creator4`
  }

  constructor(){
    this.myContentList.add(this.contentItem1);
    this.myContentList.add(this.contentItem2);
    this.myContentList.add(this.contentItem3);
    this.myContentList.add(this.contentItem4);

  }

  displayMyIndex(index : number) {
    let myItems = this.myContentList.getItems();

    if (myItems.length > 0 && index > 0 && index < myItems.length){
      return this.myContentList.printIndex(index);
    } else {
      alert("ERROR");
      return "";
    }
    
  }
}
