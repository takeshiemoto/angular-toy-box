import { Injectable } from '@angular/core';
import { Reporter } from './reporter';

@Injectable({
  providedIn: 'root',
})
export class BrowserReporterService implements Reporter {
  report() {
    console.log('(Browser) report!');
  }
}
