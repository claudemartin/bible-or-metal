import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Quote } from '../quote';
import { QuoteMetalComponent } from './quote-metal.component';

describe('QuoteMetalComponent', () => {
  let component: QuoteMetalComponent;
  let fixture: ComponentFixture<QuoteMetalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [QuoteMetalComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteMetalComponent);
    component = fixture.componentInstance;

    component.quote = new Quote(
      'the_id',
      { source: 'xyz', quote: ['line 1'] }
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
