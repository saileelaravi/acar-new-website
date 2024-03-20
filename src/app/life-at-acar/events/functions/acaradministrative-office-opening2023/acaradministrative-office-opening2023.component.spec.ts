import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACARAdministrativeOfficeOpening2023Component } from './acaradministrative-office-opening2023.component';

describe('ACARAdministrativeOfficeOpening2023Component', () => {
  let component: ACARAdministrativeOfficeOpening2023Component;
  let fixture: ComponentFixture<ACARAdministrativeOfficeOpening2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ACARAdministrativeOfficeOpening2023Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ACARAdministrativeOfficeOpening2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
