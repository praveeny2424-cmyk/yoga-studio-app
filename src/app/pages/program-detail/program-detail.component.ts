import { DecimalPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { findProgram } from '../../data/catalog';

@Component({
  selector: 'app-program-detail',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './program-detail.component.html',
})
export class ProgramDetailComponent {
  private readonly params = toSignal(inject(ActivatedRoute).paramMap);
  readonly program = computed(() => findProgram(this.params()?.get('slug')));
}
