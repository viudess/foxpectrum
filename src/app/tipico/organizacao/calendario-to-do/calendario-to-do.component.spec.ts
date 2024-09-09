import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioToDoComponent } from './calendario-to-do.component';

describe('CalendarioToDoComponent', () => {
  let component: CalendarioToDoComponent;
  let fixture: ComponentFixture<CalendarioToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarioToDoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarioToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
