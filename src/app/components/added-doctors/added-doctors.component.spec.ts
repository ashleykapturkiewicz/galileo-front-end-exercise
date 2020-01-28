import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedDoctorsComponent } from './added-doctors.component';

describe('AddedDoctorsComponent', () => {
  let component: AddedDoctorsComponent;
  let fixture: ComponentFixture<AddedDoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedDoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
