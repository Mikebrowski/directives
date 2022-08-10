import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-testing',
  templateUrl: './ng-for-testing.component.html',
  styleUrls: ['./ng-for-testing.component.css']
})
export class NgForTestingComponent implements OnInit {

  courses= [
    {id:'1', name:'English', isCompleted:false},
    {id:2, name:'Norweigan', isCompleted:true},
    {id:3, name:'Greek', isCompleted:false},
  ];

  theIdentifier="The ID IS:";

  constructor() { }

  ngOnInit(): void {
  }

  onAddElement(){
    this.courses.push({id:4, name:'course4', isCompleted: true})
  }
  onRemoveElement(course:any){
    let index= this.courses.indexOf(course);
    console.log(course)
    this.courses.splice(index,1);

  }
  onChange(course:any){
    course.name='UPDATED';
    course.isCompleted=!course

  }

}
