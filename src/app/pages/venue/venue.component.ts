import { Component } from '@angular/core';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
})
export class VenueComponent {
  readonly rooms = [
    { name: 'Yoga hall', tone: 't1' },
    { name: 'Dining room', tone: 't2' },
    { name: 'Private room', tone: 't3' },
    { name: 'Two-share room', tone: 't4' },
    { name: 'Four-share room', tone: 't5' },
    { name: 'Garden path', tone: 't6' },
    { name: 'Retreat hall', tone: 't7' },
    { name: 'River steps', tone: 't8' },
  ];
}
