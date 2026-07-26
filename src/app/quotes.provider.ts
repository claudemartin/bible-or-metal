import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Quote } from './quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesProvider {
  private baseUrl = './assets/quotes/';
  private indexUrl = `${this.baseUrl}index.json`;
  private files: string[] = [];
  private quotes: Quote[] = [];

  constructor(private http: HttpClient) {

  }

  load() {
    console.log('reading: index.json');
    let promise = new Promise<string[]>((resolve, reject) => {
      this.http.get<string[]>(this.indexUrl)
        .subscribe({
          next: data => {
            resolve(this.files = data);
          },
          error: (err: HttpErrorResponse) => {
            console.log(err.message);
            reject(err.message);
          }
        });
    });
    promise.then
    return promise.then((files) => {
      let promises: Promise<Quote>[] = [];
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        promises.push(new Promise<Quote>((resolve, reject) => {
          this.http.get<Quote>(this.baseUrl + file + ".json").subscribe({
            next: data => {
              resolve(this.quotes[i] = new Quote(file, data));
            },
            error: err => {
              reject(err.message);
            }
          });
        }));
      }
      return Promise.all(promises);
    });


  }

  /** returns a shuffled (randomly sorted) array of all quotes.  */
  public getShuffledQuotes(): Quote[] {
    const clone = Object.assign([], this.quotes);
    this.shuffle(clone);
    return clone;
  }

  private shuffle(a: any[]) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  public get(id: string) {
    return this.quotes.find(q => q.id === id);
  }

  public count(predicate: (q: Quote) => any): number {
    return this.quotes.filter(predicate).length;
  }
}
