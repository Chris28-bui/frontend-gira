import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInformationPageComponent } from './employee-information-page.component';

describe('EmployeeInformationPageComponent', () => {
  let component: EmployeeInformationPageComponent;
  let fixture: ComponentFixture<EmployeeInformationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeInformationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
