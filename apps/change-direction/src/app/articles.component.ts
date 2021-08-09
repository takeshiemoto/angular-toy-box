import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'cd-articles',
  templateUrl: './articles.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesComponent implements DoCheck {
  ngDoCheck(): void {
    console.log('change direction ArticlesComponent');
  }
}
