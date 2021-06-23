import { Component, OnInit, Optional } from '@angular/core';
import { OptionalLoggerService } from './optional-logger.service';

@Component({
  selector: 'app-optional-example',
  template: ` <p>optional-example works!</p> `,
  styles: [],
})
export class OptionalExampleComponent implements OnInit {
  constructor(
    @Optional() private readonly optionalLoggerService: OptionalLoggerService
  ) {}

  ngOnInit(): void {
    if (this.optionalLoggerService) {
      this.optionalLoggerService.log();
    }
  }
}
