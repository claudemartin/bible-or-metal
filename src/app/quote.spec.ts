import { Quote } from './quote';

describe('Quote', () => {
  it('should create an instance', () => {
    expect(new Quote('the_id', {'source': 'xyz', 'quote': ['line 1']})).toBeTruthy();
    expect(() => new Quote('the_id', {'source': 'xyz'})).toThrowError();  
    expect(() => new Quote('the_id', {'quote': 'line 1'})).toThrowError();  
    expect(() => new Quote('the_id', {'quote': []})).toThrowError();  
  });
});
