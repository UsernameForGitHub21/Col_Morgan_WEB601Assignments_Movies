import { Content } from "./content-interface";
import { ContentList } from "./content-list";


export class ContentListComponent {

    myContentList : ContentList = new ContentList();

  contentItem1 : Content = {
    id: 0,
    title: `title1`,
    description: `description for title1`,
    creator: `creator1`,
    type: `type1`
  }

  contentItem2 : Content = {
    id: 1,
    title: `title2`,
    description: `description for title2`,
    creator: `creator2`,
    type: `type2`
  }

  contentItem3 : Content = {
    id: 2,
    title: `title3`,
    description: `description for title3`,
    creator: `creator3`,
    type: `type1`
  }

  contentItem4 : Content = {
    id: 3,
    title: `title4`,
    description: `description for title4`,
    creator: `creator4`,
    type: `type1`
  }

  contentItem5 : Content = {
    id: 4,
    title: `title5`,
    description: `description for title5`,
    creator: `creator5`
  }

  contentItem6 : Content = {
    id: 5,
    title: `title6`,
    description: `description for title6`,
    creator: `creator6`
  }

  contentItem7 : Content = {
    id: 6,
    title: `title7`,
    description: `description for title7`,
    creator: `creator7`,
    type: `type2`
  }
  bandList: any;

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

  onClick(item: { id: string; title: string; }){
    console.log("ID: " + item.id + ", Title: " + item.title);
  }

  addBandToList(newBandFromChild: Content) {
    this.bandList.push(newBandFromChild);
    this.bandList = Object.assign([], this.bandList);
    this.bandList = [...this.bandList];
    }

    genId(content: Content[]): number {
      return content.length > 0 ?
      Math.max(...content.map(c => c.id)) + 1 : 2000;
      }
}

