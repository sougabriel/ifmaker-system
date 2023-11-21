import { TestBed } from '@angular/core/testing';

import { PessoaProjetoService } from './pessoa-projeto.service';

describe('PessoaProjetoService', () => {
  let service: PessoaProjetoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoaProjetoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
