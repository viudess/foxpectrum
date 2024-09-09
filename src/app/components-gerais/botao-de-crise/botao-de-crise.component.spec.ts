import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoDeCriseComponent } from './botao-de-crise.component';

describe('BotaoDeCriseComponent', () => {
  let component: BotaoDeCriseComponent;
  let fixture: ComponentFixture<BotaoDeCriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotaoDeCriseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoDeCriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
