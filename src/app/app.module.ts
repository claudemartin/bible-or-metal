import { BrowserModule } from '@angular/platform-browser';
import { NgModule, inject, provideAppInitializer } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { QuotesProvider } from './quotes.provider';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

export function quotesProviderFactory(provider: QuotesProvider) {
    return () => provider.load();
}

@NgModule({
    declarations: [],
    bootstrap: [AppComponent], 
    imports: [
        BrowserModule,
        AppComponent,
        AppRoutingModule,
        AngularFullpageModule], 
        providers: [
            QuotesProvider,
            provideAppInitializer(() => inject(QuotesProvider).load()),
            provideHttpClient(withInterceptorsFromDi())
        ]
})
export class AppModule { }
