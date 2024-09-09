import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedFichaComponent } from './med-ficha.component';

describe('MedFichaComponent', () => {
  let component: MedFichaComponent;
  let fixture: ComponentFixture<MedFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedFichaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
