import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRelatorioComponent } from './editar-relatorio.component';

describe('EditarRelatorioComponent', () => {
  let component: EditarRelatorioComponent;
  let fixture: ComponentFixture<EditarRelatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarRelatorioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
