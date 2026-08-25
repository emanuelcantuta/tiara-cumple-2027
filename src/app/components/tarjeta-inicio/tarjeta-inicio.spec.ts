import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetaInicio } from './tarjeta-inicio';

describe('TarjetaInicio', () => {
  let component: TarjetaInicio;
  let fixture: ComponentFixture<TarjetaInicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaInicio],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaInicio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
