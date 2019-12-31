import { Component } from '@angular/core';
import { QuotesProvider } from './quotes.provider';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bible or Metal?';
  quotes : Quote[] = [];
  prod = false;

  constructor(private quotesProvider: QuotesProvider){
    this.quotes = this.quotesProvider.getShuffledQuotes();
    console.log('QUOTES:');
    console.log(this.quotes);
    console.log('=========');
  }

  ngOnInit(){

  }
}
