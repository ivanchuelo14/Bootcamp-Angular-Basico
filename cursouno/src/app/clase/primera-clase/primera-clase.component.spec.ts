import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraClaseComponent } from './primera-clase.component';

describe('PrimeraClaseComponent', () => {
  let component: PrimeraClaseComponent;
  let fixture: ComponentFixture<PrimeraClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeraClaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimeraClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
