import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAtipicoComponent } from './home-atipico.component';

describe('HomeAtipicoComponent', () => {
  let component: HomeAtipicoComponent;
  let fixture: ComponentFixture<HomeAtipicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeAtipicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAtipicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
