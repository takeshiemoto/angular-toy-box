import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root',
})
export class ExperimentalLoggerService implements Logger {
  prefix = 'experimental';

  log(message: string) {
    console.log(`[${this.prefix}]: ${message}`);
  }
}
