import { Component } from '@angular/core';
import { QuotesProvider } from './quotes.provider';
import { environment } from '../environments/environment';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config: any;
  fullpage_api: any;

  public title = 'Bible or Metal?';
  public bibleCount : number = -1;
  public metalCount : number = -1;
  public production :  boolean = false;
  public quotes: Quote[] = [];

  constructor(private quotesProvider: QuotesProvider){
      this.bibleCount = this.quotesProvider.count(q => q.source==='bible');
      this.metalCount = this.quotesProvider.count(q => q.source==='metal');

      /*** FULL PAGE ***/
       // for more details on config options please visit fullPage.js docs
      this.config = {
        // fullpage options
        licenseKey: 'YOUR LICENSE KEY HERE',
        anchors: ['intro', 'scoring', 'quiz'],
        menu: '#menu',
        verticalCentered: false
        // fullpage callbacks
        /* 
        afterResize: () => {
          console.log("After resize");
        },
        afterLoad: (origin, destination, direction) => {
          console.log(origin.index);
        }
        */
      };
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
  ngOnInit(){
    this.quotes = this.quotesProvider.getShuffledQuotes();
    this.production = environment.production;
  }
}
