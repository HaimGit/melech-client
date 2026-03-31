import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyTablePanelsComponent } from './weeklyTablePanel.component';

describe('PanelComponent', () => {
  let component: WeeklyTablePanelsComponent;
  let fixture: ComponentFixture<WeeklyTablePanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyTablePanelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyTablePanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
