import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsMoodComponent } from './forms-mood.component';

describe('FormsMoodComponent', () => {
  let component: FormsMoodComponent;
  let fixture: ComponentFixture<FormsMoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsMoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsMoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
