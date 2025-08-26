import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaModalComponent } from './prueba-modal.component';

describe('PruebaModalComponent', () => {
  let component: PruebaModalComponent;
  let fixture: ComponentFixture<PruebaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
