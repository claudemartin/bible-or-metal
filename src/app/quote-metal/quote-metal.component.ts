import { Component, OnInit, Input } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-metal',
  templateUrl: './quote-metal.component.html',
  styleUrls: ['./quote-metal.component.css']
})
export class QuoteMetalComponent implements OnInit {
  @Input() public quote: Quote;
  constructor() { }

  ngOnInit() {
  }

}
