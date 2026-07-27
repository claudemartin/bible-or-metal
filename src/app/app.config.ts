import { ApplicationConfig, inject, provideAppInitializer } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { QuotesProvider } from './quotes.provider';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    QuotesProvider,

    provideAppInitializer(() =>
      inject(QuotesProvider).load()
    ),

    provideHttpClient(withInterceptorsFromDi())
  ]
};