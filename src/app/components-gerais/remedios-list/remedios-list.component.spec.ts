import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemediosListComponent } from './remedios-list.component';

describe('RemediosListComponent', () => {
  let component: RemediosListComponent;
  let fixture: ComponentFixture<RemediosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemediosListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemediosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
