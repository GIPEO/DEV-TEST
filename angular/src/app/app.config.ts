import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()),
     provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            },
            zIndex: {
        modal: 1100,   // diálogos
        overlay: 1000, // dropdowns, overlays
        menu: 1000,
        tooltip: 1200
      }
        })
  ]
};
