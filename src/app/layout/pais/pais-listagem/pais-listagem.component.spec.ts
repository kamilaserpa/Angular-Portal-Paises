import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisListagemComponent } from './pais-listagem.component';

describe('PaisListagemComponent', () => {
  let component: PaisListagemComponent;
  let fixture: ComponentFixture<PaisListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
