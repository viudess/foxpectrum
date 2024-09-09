import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarFamComponent } from './entrar-fam.component';

describe('EntrarFamComponent', () => {
  let component: EntrarFamComponent;
  let fixture: ComponentFixture<EntrarFamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntrarFamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrarFamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
