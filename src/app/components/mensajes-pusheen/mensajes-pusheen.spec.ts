import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensajesPusheen } from './mensajes-pusheen';

describe('MensajesPusheen', () => {
  let component: MensajesPusheen;
  let fixture: ComponentFixture<MensajesPusheen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajesPusheen],
    }).compileComponents();

    fixture = TestBed.createComponent(MensajesPusheen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
