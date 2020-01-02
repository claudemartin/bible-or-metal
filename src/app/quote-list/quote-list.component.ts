import { Component, OnInit } from '@angular/core';
import { QuotesProvider } from '../quotes.provider';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  quotes : Quote[] = [];

  constructor(private quotesProvider: QuotesProvider){
    this.quotes = this.quotesProvider.getShuffledQuotes();
  }

  ngOnInit() {
  }

  public bible(quote: Quote) {
    this.setAnswer(quote, 'bible');
  }
  public metal(quote: Quote) {
    this.setAnswer(quote, 'metal');
  }

  private setAnswer(quote: Quote, answer : string) {
    if(quote.isAnswered()) return;
    quote.answer = answer;
  }

  public getTotalScore() {
    let score = this.quotes.map(q => q.getScore()).reduce((a, b) => a + b, 0);
    return score;
  }

}
