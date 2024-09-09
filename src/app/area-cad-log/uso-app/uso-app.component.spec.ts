import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoAppComponent } from './uso-app.component';

describe('UsoAppComponent', () => {
  let component: UsoAppComponent;
  let fixture: ComponentFixture<UsoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsoAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
