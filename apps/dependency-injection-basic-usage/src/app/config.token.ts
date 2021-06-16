import { InjectionToken } from '@angular/core';

export interface AppConfig {
  experimentalEnable: boolean;
}

// DIコンテナのKeyになる
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config', {
  providedIn: 'root',
  factory: () => ({
    experimentalEnable: true,
  }),
});
