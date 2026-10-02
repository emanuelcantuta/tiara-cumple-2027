import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cortis } from './cortis';

describe('Cortis', () => {
  let component: Cortis;
  let fixture: ComponentFixture<Cortis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cortis],
    }).compileComponents();

    fixture = TestBed.createComponent(Cortis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
