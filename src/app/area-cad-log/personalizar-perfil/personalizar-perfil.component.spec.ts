import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizarPerfilComponent } from './personalizar-perfil.component';

describe('PersonalizarPerfilComponent', () => {
  let component: PersonalizarPerfilComponent;
  let fixture: ComponentFixture<PersonalizarPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalizarPerfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalizarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
