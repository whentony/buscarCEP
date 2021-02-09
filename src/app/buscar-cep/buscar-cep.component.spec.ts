import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCEPComponent } from './buscar-cep.component';

describe('BuscarCEPComponent', () => {
  let component: BuscarCEPComponent;
  let fixture: ComponentFixture<BuscarCEPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarCEPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarCEPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
