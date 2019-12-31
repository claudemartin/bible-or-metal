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

}
