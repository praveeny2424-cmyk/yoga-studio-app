import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { articles } from '../../data/catalog';

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  readonly articles = articles;
}
