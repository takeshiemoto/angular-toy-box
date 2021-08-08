import { Component } from '@angular/core';

@Component({
  selector: 'angular-toy-box-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'change-direction';

  onClick() {
    console.log('Event');
  }
}
