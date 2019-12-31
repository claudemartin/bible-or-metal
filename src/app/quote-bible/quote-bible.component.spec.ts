import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteBibleComponent } from './quote-bible.component';

describe('QuoteBibleComponent', () => {
  let component: QuoteBibleComponent;
  let fixture: ComponentFixture<QuoteBibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteBibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteBibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
