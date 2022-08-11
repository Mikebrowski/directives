import { Component, Input } from '@angular/core';
//import {assets} from 'src/assets/NGIFvsHIDDEN.png'
//const explainPic = require('../assets/NGIFvsHIDDEN.png').default as string;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {




  isSelected: boolean= false; 
  courses=[1,2,3]
  title = 'directives';
  viewMode='somethingElse';
  imageLink ="https://thumbs.dreamstime.com/b/random-cat-love-cats-pet-catsslave-110819582.jpg";


  doWeHaveAnyData(){
    this.courses.length == 0; //
    
  }
  //itemImageUrlAsString = explainPic;

  itemImageUrl='/assets/NGIFvsHIDDEN.png'
}

