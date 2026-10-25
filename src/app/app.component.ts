import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { programsByKind, school } from './data/catalog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SocialLinksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly school = school;
  readonly courses = programsByKind('in-person');
  readonly retreats = programsByKind('retreat');
  readonly menuOpen = signal(false);
  readonly year = new Date().getFullYear();

  constructor() {
    inject(Router)
      .events.pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.menuOpen.set(false));
  }
}
