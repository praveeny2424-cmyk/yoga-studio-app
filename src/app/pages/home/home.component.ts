import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { homeFaqs, programsByKind, reviews, school, teachers } from '../../data/catalog';

@Component({
  selector: 'app-home',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly school = school;
  readonly courses = programsByKind('in-person').slice(0, 6);
  readonly teachers = teachers.slice(0, 4);
  readonly reviews = reviews;
  readonly faqs = homeFaqs;
}
