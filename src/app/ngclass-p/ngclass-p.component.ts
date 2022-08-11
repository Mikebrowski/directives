import { NgSwitchDefault } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { defaultIfEmpty } from 'rxjs';

@Component({
  selector: 'app-ngclass-p',
  templateUrl: './ngclass-p.component.html',
  styleUrls: ['./ngclass-p.component.css']
})
export class NgclassPComponent implements OnInit {

  changeState: boolean= true;
  width:number= 500;

  constructor() { }

  ngOnInit(): void {
  }



  people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'USA'
    }
  ];
  getColor(country: any) { (2)
    switch (country) 
    {
      case 'UK':
        return 'red';
      case 'USA':
        return 'green';
      case 'HK':
        return 'blue';
    }
    return 0;
    }

    
  
}
