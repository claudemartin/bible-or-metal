import { TestBed } from '@angular/core/testing';

import { QuotesProvider } from './quotes.provider';

describe('QuotesProvider', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuotesProvider = TestBed.get(QuotesProvider);
    expect(service).toBeTruthy();
  });
});
