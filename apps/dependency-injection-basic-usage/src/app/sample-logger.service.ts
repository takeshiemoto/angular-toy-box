import { Inject, Injectable } from '@angular/core';
import { REPORTERS } from './reporter.token';
import { Reporter } from './reporter';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root',
})
export class SampleLoggerService implements Logger {
  prefix = `sample`;
  constructor(@Inject(REPORTERS) private reporters: ReadonlyArray<Reporter>) {}

  log() {
    console.log(this.prefix);
    this.reporters.forEach((r) => r.report());
  }
}
