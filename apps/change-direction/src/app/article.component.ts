import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'cd-article',
  templateUrl: './article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent implements DoCheck {
  ngDoCheck(): void {
    console.log('change direction ArticleComponent');
  }

  onClick() {
    console.log('Run');
  }
}
