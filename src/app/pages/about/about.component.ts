import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { school } from '../../data/catalog';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  readonly school = school;
}
