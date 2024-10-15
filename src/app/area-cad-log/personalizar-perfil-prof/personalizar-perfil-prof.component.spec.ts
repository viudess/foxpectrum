import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizarPerfilProfComponent } from './personalizar-perfil-prof.component';

describe('PersonalizarPerfilProfComponent', () => {
  let component: PersonalizarPerfilProfComponent;
  let fixture: ComponentFixture<PersonalizarPerfilProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalizarPerfilProfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalizarPerfilProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
