import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable()
export class LoggerService implements Logger {
  prefix = 'BasicLogger';

  log(message: string) {
    console.log(`[${this.prefix}]: ${message}`);
  }
}
