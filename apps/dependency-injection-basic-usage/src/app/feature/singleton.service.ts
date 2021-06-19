import { Injectable } from '@angular/core';

@Injectable()
export class SingletonService {
  static instance = 0;

  constructor() {
    SingletonService.instance += 1;
  }

  someMethod(): void {
    console.log(`There are ${SingletonService.instance} instance of service .`);
  }
}
