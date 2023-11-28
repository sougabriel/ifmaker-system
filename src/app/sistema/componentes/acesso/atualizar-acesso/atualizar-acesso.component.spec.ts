import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarAcessoComponent } from './atualizar-acesso.component';

describe('AtualizarAcessoComponent', () => {
  let component: AtualizarAcessoComponent;
  let fixture: ComponentFixture<AtualizarAcessoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarAcessoComponent]
    });
    fixture = TestBed.createComponent(AtualizarAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
