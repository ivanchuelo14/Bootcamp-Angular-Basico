import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

// Registra el locale español en la aplicación
registerLocaleData(localeEs);

export const appConfig: ApplicationConfig = {                                                                          //Config adicional para idioma en español
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), { provide: LOCALE_ID, useValue: 'es-ES' },]
};
