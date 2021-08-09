import { Component } from '@angular/core';

@Component({
  selector: 'cd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'change-direction';

  onClick() {
    console.log('Event');
  }
}
