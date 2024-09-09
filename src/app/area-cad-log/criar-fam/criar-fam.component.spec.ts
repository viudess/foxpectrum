import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarFamComponent } from './criar-fam.component';

describe('CriarFamComponent', () => {
  let component: CriarFamComponent;
  let fixture: ComponentFixture<CriarFamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CriarFamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarFamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
