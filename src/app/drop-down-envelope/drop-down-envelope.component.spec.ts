import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownEnvelopeComponent } from './drop-down-envelope.component';

describe('DropDownEnvelopeComponent', () => {
  let component: DropDownEnvelopeComponent;
  let fixture: ComponentFixture<DropDownEnvelopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownEnvelopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownEnvelopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
