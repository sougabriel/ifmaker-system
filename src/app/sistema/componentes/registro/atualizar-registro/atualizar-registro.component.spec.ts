import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarRegistroComponent } from './atualizar-registro.component';

describe('AtualizarRegistroComponent', () => {
  let component: AtualizarRegistroComponent;
  let fixture: ComponentFixture<AtualizarRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarRegistroComponent]
    });
    fixture = TestBed.createComponent(AtualizarRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
