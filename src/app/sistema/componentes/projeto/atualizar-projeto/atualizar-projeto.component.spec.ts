import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarProjetoComponent } from './atualizar-projeto.component';

describe('AtualizarProjetoComponent', () => {
  let component: AtualizarProjetoComponent;
  let fixture: ComponentFixture<AtualizarProjetoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarProjetoComponent]
    });
    fixture = TestBed.createComponent(AtualizarProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
