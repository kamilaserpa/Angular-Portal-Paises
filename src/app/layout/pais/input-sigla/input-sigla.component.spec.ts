import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSiglaComponent } from './input-sigla.component';

describe('InputSiglaComponent', () => {
  let component: InputSiglaComponent;
  let fixture: ComponentFixture<InputSiglaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSiglaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSiglaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
