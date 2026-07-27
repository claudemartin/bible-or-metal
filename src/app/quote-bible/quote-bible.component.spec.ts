import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Quote } from '../quote';
import { QuoteBibleComponent } from './quote-bible.component';

describe('QuoteBibleComponent', () => {
  let component: QuoteBibleComponent;
  let fixture: ComponentFixture<QuoteBibleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [QuoteBibleComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteBibleComponent);
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
