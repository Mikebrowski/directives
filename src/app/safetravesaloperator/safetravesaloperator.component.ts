import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safetravesaloperator',
  templateUrl: './safetravesaloperator.component.html',
  styleUrls: ['./safetravesaloperator.component.css']
})
export class SafetravesaloperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  task= {
    title:'Review applications',
    assignee:{
      name: 'Mister johnson'
    }
  }
  
  task2 = {
      title:'Review applications',
      assignee:null
  }

}
