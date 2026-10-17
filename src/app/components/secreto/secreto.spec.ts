import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Secreto } from './secreto';

describe('Secreto', () => {
  let component: Secreto;
  let fixture: ComponentFixture<Secreto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secreto],
    }).compileComponents();

    fixture = TestBed.createComponent(Secreto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
