import { BrowserModule } from '@angular/platform-browser';
import { NgModule, inject, provideAppInitializer } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteMetalComponent } from './quote-metal/quote-metal.component';
import { QuoteBibleComponent } from './quote-bible/quote-bible.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { QuotesProvider } from './quotes.provider';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

export function quotesProviderFactory(provider: QuotesProvider) {
  return () => provider.load();
}

@NgModule({ declarations: [
        AppComponent,
        QuoteMetalComponent,
        QuoteBibleComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        AngularFullpageModule], providers: [
        QuotesProvider,
        provideAppInitializer(() => {
        const initializerFn = (quotesProviderFactory)(inject(QuotesProvider));
        return initializerFn();
      }),
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
