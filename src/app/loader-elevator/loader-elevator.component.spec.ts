import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderElevatorComponent } from './loader-elevator.component';

describe('LoaderElevatorComponent', () => {
  let component: LoaderElevatorComponent;
  let fixture: ComponentFixture<LoaderElevatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderElevatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderElevatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
