import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EnquiryService } from '../../services/enquiry.service';

@Component({
  selector: 'app-affiliate',
  imports: [ReactiveFormsModule],
  templateUrl: './affiliate.component.html',
})
export class AffiliateComponent {
  readonly sent = signal(false);
  private readonly enquiries = inject(EnquiryService);
  readonly form = inject(FormBuilder).nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    message: [''],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const value = this.form.getRawValue();
    this.enquiries.save({
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      kind: 'affiliate',
      programSlug: '',
      programTitle: 'Affiliate application',
      roomId: '',
      roomName: '',
      cohortLabel: '',
      name: value.name,
      email: value.email,
      phone: value.phone,
      country: '',
      referenceCode: '',
      message: value.message,
      total: 0,
    });
    this.sent.set(true);
  }
}
