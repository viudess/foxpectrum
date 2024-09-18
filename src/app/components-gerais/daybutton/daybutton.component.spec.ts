import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaybuttonComponent } from './daybutton.component';

describe('DaybuttonComponent', () => {
  let component: DaybuttonComponent;
  let fixture: ComponentFixture<DaybuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DaybuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaybuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
