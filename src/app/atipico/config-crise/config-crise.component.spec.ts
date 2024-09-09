import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigCriseComponent } from './config-crise.component';

describe('ConfigCriseComponent', () => {
  let component: ConfigCriseComponent;
  let fixture: ComponentFixture<ConfigCriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigCriseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigCriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
