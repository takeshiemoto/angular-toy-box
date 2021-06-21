import { Injectable } from '@angular/core';
import { Reporter } from './reporter';

@Injectable({
  providedIn: 'root',
})
export class EngineReporterService implements Reporter {
  report() {
    console.log(`(Engine) report!`);
  }
}
