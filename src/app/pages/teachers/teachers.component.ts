import { Component } from '@angular/core';
import { teachers } from '../../data/catalog';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
})
export class TeachersComponent {
  readonly teachers = teachers;
}
