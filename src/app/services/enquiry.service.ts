import { Injectable, signal } from '@angular/core';
import { Enquiry } from '../models/school.models';

const STORAGE_KEY = 'ajays-ashtanga-enquiries';

@Injectable({ providedIn: 'root' })
export class EnquiryService {
  readonly latest = signal<Enquiry | null>(null);

  save(enquiry: Enquiry): void {
    const all = this.read();
    all.unshift(enquiry);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(all.slice(0, 40)));
    }
    this.latest.set(enquiry);
  }

  private read(): Enquiry[] {
    if (typeof localStorage === 'undefined') {
      return [];
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Enquiry[]) : [];
    } catch {
      return [];
    }
  }
}
