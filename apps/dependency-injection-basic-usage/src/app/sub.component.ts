import { Component, OnInit } from '@angular/core';
import { SingletonService } from './feature/singleton.service';

@Component({
  selector: 'app-sub',
  template: ` <p>sub works!</p> `,
  styleUrls: ['./sub.component.css'],
})
export class SubComponent implements OnInit {
  constructor(private readonly singletonService: SingletonService) {}

  ngOnInit(): void {
    this.singletonService.someMethod();
  }
}
