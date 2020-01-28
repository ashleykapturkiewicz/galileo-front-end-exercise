import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProviderModalComponent } from './add-provider-modal.component';

describe('AddProviderModalComponent', () => {
  let component: AddProviderModalComponent;
  let fixture: ComponentFixture<AddProviderModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProviderModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProviderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
