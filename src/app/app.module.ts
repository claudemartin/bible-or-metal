import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { QuoteMetalComponent } from './quote-metal/quote-metal.component';
import { QuoteBibleComponent } from './quote-bible/quote-bible.component';
import { HttpClientModule } from '@angular/common/http';
import { QuotesProvider } from './quotes.provider';

export function quotesProviderFactory(provider: QuotesProvider) {
  return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent,
    QuoteListComponent,
    QuoteMetalComponent,
    QuoteBibleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [
    QuotesProvider,
    { provide: APP_INITIALIZER, useFactory: quotesProviderFactory, deps: [QuotesProvider], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
