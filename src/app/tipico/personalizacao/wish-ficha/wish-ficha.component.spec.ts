import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishFichaComponent } from './wish-ficha.component';

describe('WishFichaComponent', () => {
  let component: WishFichaComponent;
  let fixture: ComponentFixture<WishFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishFichaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
