import { Component, OnInit, Input, Host } from '@angular/core';
import {Quote} from '../quote';

@Component({
    selector: 'app-quote-bible',
    templateUrl: './quote-bible.component.html',
    styleUrls: ['./quote-bible.component.css'],
    standalone: true
})
export class QuoteBibleComponent implements OnInit {
  @Input({ required: true }) quote!: Quote;
  
  constructor() { }

  ngOnInit() {
  }

}
