import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassPComponent } from './ngclass-p.component';

describe('NgclassPComponent', () => {
  let component: NgclassPComponent;
  let fixture: ComponentFixture<NgclassPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgclassPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgclassPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
