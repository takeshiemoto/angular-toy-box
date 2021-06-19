import { Component, OnInit } from '@angular/core';
import { SingletonService } from './feature/singleton.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  constructor(private readonly singletonService: SingletonService) {}

  ngOnInit(): void {
    this.singletonService.someMethod();
  }
}
