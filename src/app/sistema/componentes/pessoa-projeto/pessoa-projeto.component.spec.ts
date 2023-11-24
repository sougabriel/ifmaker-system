import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaProjetoComponent } from './pessoa-projeto.component';

describe('PessoaProjetoComponent', () => {
  let component: PessoaProjetoComponent;
  let fixture: ComponentFixture<PessoaProjetoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoaProjetoComponent]
    });
    fixture = TestBed.createComponent(PessoaProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
