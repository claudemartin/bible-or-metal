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

      this.quotes = this.quotesProvider.getShuffledQuotes();
      this.production = environment.production;

      /*** FULL PAGE ***/
      let anchors : string[] = ['intro', 'scoring'];
      this.quotes.map(q=>q.getAnchor()).forEach(a => anchors.push(a));
      anchors.push("results");
       // for more details on config options please visit fullPage.js docs
      this.config = {
        // fullpage options
        'licenseKey': 'YOUR LICENSE KEY HERE',
        'anchors': anchors,
        //'menu': '#menu',
        'verticalCentered': false
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

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
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

  public getResultDescription() : string {
  switch (true) {
    case this.getTotalScore() < 0:
      return "Your score is below zero. Both God and Satan are very disapointed in you.";
      case this.getTotalScore() < (this.quotes.length * 0.20):
        return "At least you got some right. But it doesn't look like you know what you were doing. Satan wants you to listen to more Metal.";
      case this.getTotalScore() < (this.quotes.length * 0.40):
        return "Satan knows you can do even better. Listen to more Metal and you will get there.";
      case this.getTotalScore() < (this.quotes.length * 0.60):
        return "Satan is pleased to see that you could distinguish many of the Metal lyrics from the word of Yahwe.";
      case this.getTotalScore() < (this.quotes.length * 0.80):
        return "Satan is perfectly satisfied with your ability to distinguish Metal lyrics from the word of Yahwe.";
      case this.getTotalScore() < (this.quotes.length):  
        return "Good job! Even the Dark Lord himself could not tell those verses apart you well as you.";
      case this.getTotalScore() === (this.quotes.length):  
        return "This is a perfect score. You are allknowing, sold your sould to the Devil to win, or you cheated.";
    default:
      return "The program is confused. Did you get more points than possible? Are you the allpowerful Lord?";
    }
  }

  public isNextAnswered(quote : Quote) {
    if(quote === this.quotes[this.quotes.length-1]) return false;
    let next = this.quotes[this.quotes.indexOf(quote) + 1];
    return next.isAnswered();
  }
  public hasSkipped() {
    return !!this.quotes.find(q => !q.isAnswered());
  }

  
  public firstSkippedAnchor() {
    return this.quotes.find(q => !q.isAnswered()).getAnchor();
  }

  ngOnInit(){

  }
}
