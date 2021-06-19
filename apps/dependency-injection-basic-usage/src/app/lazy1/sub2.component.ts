import { Component, OnInit } from '@angular/core';
import { SingletonService } from '../feature/singleton.service';

@Component({
  selector: 'app-sub2',
  template: ` <p>sub2 works!</p> `,
  styles: [],
})
export class Sub2Component implements OnInit {
  constructor(private readonly singletonService: SingletonService) {}

  ngOnInit(): void {
    this.singletonService.someMethod();
  }
}
