import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioEditavelComponent } from './relatorio-editavel.component';

describe('RelatorioEditavelComponent', () => {
  let component: RelatorioEditavelComponent;
  let fixture: ComponentFixture<RelatorioEditavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioEditavelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelatorioEditavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
