import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'cd-users',
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements DoCheck {
  private users: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([
    'John',
    'Paul',
    'George',
    'Ringo',
  ]);

  users$: Observable<string[]> = this.users.asObservable();

  ngDoCheck() {
    console.log('change direction: UsersComponent');
  }

  updateUsers() {
    this.users.next([...this.users.value, 'Simpson']);
  }
}
