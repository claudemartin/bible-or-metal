import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteMetalComponent } from './quote-metal.component';

describe('QuoteMetalComponent', () => {
  let component: QuoteMetalComponent;
  let fixture: ComponentFixture<QuoteMetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteMetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteMetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
