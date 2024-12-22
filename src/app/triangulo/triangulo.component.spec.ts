import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrianguloComponent } from './triangulo.component';

describe('TrianguloComponent', () => {
  let component: TrianguloComponent;
  let fixture: ComponentFixture<TrianguloComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TrianguloComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrianguloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
