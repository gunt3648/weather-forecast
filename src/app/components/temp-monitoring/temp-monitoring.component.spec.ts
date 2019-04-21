import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempMonitoringComponent } from './temp-monitoring.component';

describe('TempMonitoringComponent', () => {
  let component: TempMonitoringComponent;
  let fixture: ComponentFixture<TempMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
