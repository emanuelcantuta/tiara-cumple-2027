import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Impostor } from './impostor';

describe('Impostor', () => {
  let component: Impostor;
  let fixture: ComponentFixture<Impostor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Impostor],
    }).compileComponents();

    fixture = TestBed.createComponent(Impostor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
