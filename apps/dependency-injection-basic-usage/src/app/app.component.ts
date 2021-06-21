import { Component, Inject, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { LoggerLegacy } from './logger.legacy';
import { APP_CONFIG, AppConfig } from './config.token';
import { SampleLoggerService } from './sample-logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: LoggerService,
      // Note
      // ここでuseClassすると新しくExperimentalLoggerServiceのインスタンスが生成される。
      // ExperimentalLoggerServiceは既にrootにprovideされているのでシングルトンではなくなる
      // そこで既存のインスタンスを利用するようにuseExistingを使う
      // useExisting: ExperimentalLoggerService,

      // Note
      // インジェクションする対象がオブジェクトリテラルお場合はuseValueを利用する
      // useValue: LoggerLegacy,

      // Note
      // どのServiceをDIするか決まっていないとき
      useFactory: (config: AppConfig) => {
        return config.experimentalEnable
          ? new ExperimentalLoggerService()
          : new LoggerService();
      },
      deps: [APP_CONFIG],
    },
  ],
})
export class AppComponent implements OnInit {
  constructor(
    private loggerService: LoggerService,
    private experimentalService: ExperimentalLoggerService,
    private sampleLogger: SampleLoggerService,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {}

  title = 'dependency-injection-basic-usage';

  ngOnInit() {
    // this.loggerService.log('Hi!');
    this.sampleLogger.log();
  }
}
