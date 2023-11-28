import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarEmprestimoComponent } from './atualizar-emprestimo.component';

describe('AtualizarEmprestimoComponent', () => {
  let component: AtualizarEmprestimoComponent;
  let fixture: ComponentFixture<AtualizarEmprestimoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarEmprestimoComponent]
    });
    fixture = TestBed.createComponent(AtualizarEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
