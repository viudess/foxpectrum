import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BegginMoodComponent } from './beggin-mood.component';

describe('BegginMoodComponent', () => {
  let component: BegginMoodComponent;
  let fixture: ComponentFixture<BegginMoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BegginMoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BegginMoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
