import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForTestingComponent } from './ng-for-testing.component';

describe('NgForTestingComponent', () => {
  let component: NgForTestingComponent;
  let fixture: ComponentFixture<NgForTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
