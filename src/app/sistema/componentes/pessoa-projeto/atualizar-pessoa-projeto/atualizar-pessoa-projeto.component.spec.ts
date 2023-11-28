import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarPessoaProjetoComponent } from './atualizar-pessoa-projeto.component';

describe('AtualizarPessoaProjetoComponent', () => {
  let component: AtualizarPessoaProjetoComponent;
  let fixture: ComponentFixture<AtualizarPessoaProjetoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarPessoaProjetoComponent]
    });
    fixture = TestBed.createComponent(AtualizarPessoaProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
