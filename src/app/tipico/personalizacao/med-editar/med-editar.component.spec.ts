import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedEditarComponent } from './med-editar.component';

describe('MedEditarComponent', () => {
  let component: MedEditarComponent;
  let fixture: ComponentFixture<MedEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
