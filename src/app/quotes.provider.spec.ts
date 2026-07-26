import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { QuotesProvider } from './quotes.provider';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('QuotesProvider', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [
        QuotesProvider,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
}));

  it('should be created', () => {
    const service: QuotesProvider = TestBed.inject(QuotesProvider);
    expect(service).toBeTruthy();
  });
});
