import { Component } from '@angular/core';
import { QuotesProvider } from './quotes.provider';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bible or Metal?';
  bible : number = -1;
  metal : number = -1;

  constructor(private quotesProvider: QuotesProvider){
      this.bible = this.quotesProvider.count(q => q.source==='bible');
      this.metal = this.quotesProvider.count(q => q.source==='metal');
  }

  ngOnInit(){

  }
}
