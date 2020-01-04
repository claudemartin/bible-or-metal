import { Component } from '@angular/core';
import { QuotesProvider } from './quotes.provider';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Bible or Metal?';
  public bible : number = -1;
  public metal : number = -1;
  public production :  boolean = false;

  constructor(private quotesProvider: QuotesProvider){
      this.bible = this.quotesProvider.count(q => q.source==='bible');
      this.metal = this.quotesProvider.count(q => q.source==='metal');
  }

  ngOnInit(){
    this.production = environment.production;
  }
}
