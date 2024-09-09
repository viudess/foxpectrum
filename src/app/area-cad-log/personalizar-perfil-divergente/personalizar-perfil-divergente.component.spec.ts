import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizarPerfilDivergenteComponent } from './personalizar-perfil-divergente.component';

describe('PersonalizarPerfilDivergenteComponent', () => {
  let component: PersonalizarPerfilDivergenteComponent;
  let fixture: ComponentFixture<PersonalizarPerfilDivergenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalizarPerfilDivergenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalizarPerfilDivergenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
