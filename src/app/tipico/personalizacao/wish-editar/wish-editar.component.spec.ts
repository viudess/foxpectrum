import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishEditarComponent } from './wish-editar.component';

describe('WishEditarComponent', () => {
  let component: WishEditarComponent;
  let fixture: ComponentFixture<WishEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
