import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
} from '@angular/core';

@Component({
  selector: 'cd-user',
  templateUrl: './user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements DoCheck {
  @Input() user = '';

  ngDoCheck(): void {
    console.log('change direction: UserComponent');
  }
}
