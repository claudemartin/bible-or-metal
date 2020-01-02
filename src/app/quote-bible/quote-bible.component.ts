import { Component, OnInit, Input, Host } from '@angular/core';
import {Quote} from '../quote';
import { QuoteListComponent } from '../quote-list/quote-list.component';

@Component({
  selector: 'app-quote-bible',
  templateUrl: './quote-bible.component.html',
  styleUrls: ['./quote-bible.component.css']
})
export class QuoteBibleComponent implements OnInit {
  @Input() public quote: Quote;
  
  constructor() { }

  ngOnInit() {
  }

}
