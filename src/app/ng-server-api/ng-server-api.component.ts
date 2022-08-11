import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-server-api',
  templateUrl: './ng-server-api.component.html',
  styleUrls: ['./ng-server-api.component.css']
})
export class NgServerApiComponent implements OnInit {
  

  courses:any[]= [];
  b:boolean= false; 
  
  //x:boolean = true;
 // StringX: string = "WTF";
  

/*  courses= [
    {id:1, name:'English', isCompleted:false},
    {id:2, name:'Norweigan', isCompleted:true},
    {id:3, name:'Greek', isCompleted:false},]; */


  constructor() { }

  ngOnInit(): void {
    this.b = true; 
  }
  changeToactive(){

  }

  grabData(){
    this.courses= [
      {id:1, name:'English', isCompleted:false},
      {id:2, name:'Norweigan', isCompleted:true},
      {id:3, name:'Greek', isCompleted:false},
    ]; 
  }  
  
  grabData2(){
    this.b= true; 
  }
  tackCourse(index:any,course:any){
    //IF(course.id == 1) //OR WHATEVER return
    return course ? course.id : undefined

  }
}
