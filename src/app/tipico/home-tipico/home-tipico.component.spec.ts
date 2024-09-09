import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTipicoComponent } from './home-tipico.component';

describe('HomeTipicoComponent', () => {
  let component: HomeTipicoComponent;
  let fixture: ComponentFixture<HomeTipicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeTipicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTipicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
