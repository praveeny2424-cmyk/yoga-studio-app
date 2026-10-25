import { DecimalPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { programsByKind } from '../../data/catalog';

@Component({
  selector: 'app-program-list',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './program-list.component.html',
})
export class ProgramListComponent {
  private readonly data = toSignal(inject(ActivatedRoute).data);

  readonly list = computed(() => (this.data()?.['list'] as 'in-person' | 'retreat' | 'online') ?? 'in-person');
  readonly programs = computed(() => programsByKind(this.list()));
  readonly heading = computed(() => {
    if (this.list() === 'retreat') return 'Retreats';
    if (this.list() === 'online') return 'Online courses';
    return 'Yoga courses';
  });
  readonly intro = computed(() => {
    if (this.list() === 'retreat') return 'Short stays for practice and rest. These dates do not include a teaching certificate.';
    if (this.list() === 'online') return 'Study from home. The pages describe the offer. Host the videos yourself when you are ready.';
    return 'Month-long teacher trainings and shorter workshops. Each card opens the timetable, rooms, and dates.';
  });
  readonly base = computed(() => (this.list() === 'retreat' ? '/retreats' : this.list() === 'online' ? '/online' : '/courses'));
}
