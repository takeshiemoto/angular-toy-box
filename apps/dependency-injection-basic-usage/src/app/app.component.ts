import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
import { ExperimentalLoggerService } from './experimental-logger.service';

@Component({
  selector: 'angular-toy-box-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: LoggerService,
      useExisting: ExperimentalLoggerService, // rootにあるインスタンスを利用する
    },
  ],
})
export class AppComponent implements OnInit {
  constructor(
    private loggerService: LoggerService,
    private experimentalService: ExperimentalLoggerService
  ) {}

  title = 'dependency-injection-basic-usage';

  ngOnInit() {
    // 同じインスタンスになる！
    console.log(this.loggerService === this.experimentalService);

    this.loggerService.log('Hi!');
    this.experimentalService.log('Hi!');
  }
}
