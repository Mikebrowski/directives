import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetravesaloperatorComponent } from './safetravesaloperator.component';

describe('SafetravesaloperatorComponent', () => {
  let component: SafetravesaloperatorComponent;
  let fixture: ComponentFixture<SafetravesaloperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetravesaloperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafetravesaloperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
