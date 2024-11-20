import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploDanteComponent } from './ejemplo-dante.component';

describe('EjemploDanteComponent', () => {
  let component: EjemploDanteComponent;
  let fixture: ComponentFixture<EjemploDanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploDanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjemploDanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
