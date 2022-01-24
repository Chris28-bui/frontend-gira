import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInformationPageComponent } from './edit-information-page.component';

describe('EditInformationPageComponent', () => {
  let component: EditInformationPageComponent;
  let fixture: ComponentFixture<EditInformationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInformationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
