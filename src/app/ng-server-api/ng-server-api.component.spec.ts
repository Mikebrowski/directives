import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgServerApiComponent } from './ng-server-api.component';

describe('NgServerApiComponent', () => {
  let component: NgServerApiComponent;
  let fixture: ComponentFixture<NgServerApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgServerApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgServerApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
