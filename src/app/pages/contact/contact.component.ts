import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';
import { school } from '../../data/catalog';
import { EnquiryService } from '../../services/enquiry.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, SocialLinksComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly school = school;
  readonly sent = signal(false);
  private readonly enquiries = inject(EnquiryService);
  readonly form = inject(FormBuilder).nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    country: [''],
    message: ['', Validators.required],
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
      kind: 'contact',
      programSlug: '',
      programTitle: 'General question',
      roomId: '',
      roomName: '',
      cohortLabel: '',
      name: value.name,
      email: value.email,
      phone: value.phone,
      country: value.country,
      referenceCode: '',
      message: value.message,
      total: 0,
    });
    this.sent.set(true);
  }
}
