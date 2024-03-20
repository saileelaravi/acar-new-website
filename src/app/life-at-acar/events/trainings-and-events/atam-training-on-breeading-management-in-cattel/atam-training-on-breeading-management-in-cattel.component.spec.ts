import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtamTrainingOnBreeadingManagementInCattelComponent } from './atam-training-on-breeading-management-in-cattel.component';

describe('AtamTrainingOnBreeadingManagementInCattelComponent', () => {
  let component: AtamTrainingOnBreeadingManagementInCattelComponent;
  let fixture: ComponentFixture<AtamTrainingOnBreeadingManagementInCattelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtamTrainingOnBreeadingManagementInCattelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtamTrainingOnBreeadingManagementInCattelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
