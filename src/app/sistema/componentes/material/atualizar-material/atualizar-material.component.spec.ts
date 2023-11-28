import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarMaterialComponent } from './atualizar-material.component';

describe('AtualizarMaterialComponent', () => {
  let component: AtualizarMaterialComponent;
  let fixture: ComponentFixture<AtualizarMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarMaterialComponent]
    });
    fixture = TestBed.createComponent(AtualizarMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
