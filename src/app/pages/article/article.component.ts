import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { findArticle } from '../../data/catalog';

@Component({
  selector: 'app-article',
  imports: [RouterLink],
  templateUrl: './article.component.html',
})
export class ArticleComponent {
  private readonly params = toSignal(inject(ActivatedRoute).paramMap);
  readonly article = computed(() => findArticle(this.params()?.get('slug')));
}
