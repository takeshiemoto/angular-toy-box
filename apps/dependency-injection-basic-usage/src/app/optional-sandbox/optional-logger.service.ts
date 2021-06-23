import { Injectable } from '@angular/core';

@Injectable()
export class OptionalLoggerService {
  log() {
    console.log(`Optional Logger`);
  }
}
