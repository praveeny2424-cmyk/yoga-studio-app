import { DecimalPipe } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { findProgram, programs } from '../../data/catalog';
import { EnquiryService } from '../../services/enquiry.service';

@Component({
  selector: 'app-booking',
  imports: [ReactiveFormsModule, DecimalPipe, RouterLink],
  templateUrl: './booking.component.html',
})
export class BookingComponent {
  readonly programs = programs;
  readonly step = signal(1);
  readonly sent = signal(false);
  private readonly enquiries = inject(EnquiryService);
  readonly form = inject(FormBuilder).nonNullable.group({
    programSlug: ['', Validators.required],
    roomId: ['', Validators.required],
    cohortId: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    country: [''],
    referenceCode: [''],
    message: [''],
  });

  private readonly value = toSignal(this.form.valueChanges, { initialValue: this.form.getRawValue() });
  readonly program = computed(() => findProgram(this.value().programSlug));
  readonly room = computed(() => this.program()?.rooms.find((item) => item.id === this.value().roomId));
  readonly cohort = computed(() => this.program()?.cohorts.find((item) => item.id === this.value().cohortId));
  readonly total = computed(() => this.room()?.price ?? 0);

  constructor() {
    const params = toSignal(inject(ActivatedRoute).queryParamMap);
    this.form.controls.programSlug.valueChanges.subscribe(() => {
      this.form.patchValue({ roomId: '', cohortId: '' });
    });
    effect(() => {
      const slug = params()?.get('program');
      if (slug && !this.form.controls.programSlug.value) {
        this.form.controls.programSlug.setValue(slug);
      }
    });
  }

  next(): void {
    const fields = this.step() === 1
      ? (['programSlug', 'roomId', 'cohortId'] as const)
      : (['name', 'email', 'phone'] as const);
    fields.forEach((field) => this.form.controls[field].markAsTouched());
    if (fields.some((field) => this.form.controls[field].invalid)) {
      return;
    }
    this.step.update((current) => Math.min(current + 1, 3));
  }

  back(): void {
    this.step.update((current) => Math.max(current - 1, 1));
  }

  submit(): void {
    const program = this.program();
    const room = this.room();
    const cohort = this.cohort();
    if (!program || !room || !cohort || this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const value = this.form.getRawValue();
    this.enquiries.save({
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      kind: 'booking',
      programSlug: program.slug,
      programTitle: program.title,
      roomId: room.id,
      roomName: room.name,
      cohortLabel: cohort.label,
      name: value.name,
      email: value.email,
      phone: value.phone,
      country: value.country,
      referenceCode: value.referenceCode,
      message: value.message,
      total: room.price,
    });
    this.sent.set(true);
  }
}
