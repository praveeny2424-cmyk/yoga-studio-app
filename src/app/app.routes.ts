import { Routes } from '@angular/router';
import { SCHOOL_NAME } from './data/catalog';
import { AboutComponent } from './pages/about/about.component';
import { AffiliateComponent } from './pages/affiliate/affiliate.component';
import { ArticleComponent } from './pages/article/article.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgramDetailComponent } from './pages/program-detail/program-detail.component';
import { ProgramListComponent } from './pages/program-list/program-list.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { VenueComponent } from './pages/venue/venue.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: SCHOOL_NAME },
  { path: 'courses', component: ProgramListComponent, title: 'Teacher training', data: { list: 'in-person' } },
  { path: 'courses/:slug', component: ProgramDetailComponent, title: 'Course' },
  { path: 'retreats', component: ProgramListComponent, title: 'Retreats', data: { list: 'retreat' } },
  { path: 'retreats/:slug', component: ProgramDetailComponent, title: 'Retreat' },
  { path: 'online', component: ProgramListComponent, title: 'Online courses', data: { list: 'online' } },
  { path: 'online/:slug', component: ProgramDetailComponent, title: 'Online course' },
  { path: 'teachers', component: TeachersComponent, title: 'Teachers' },
  { path: 'venue', component: VenueComponent, title: 'Venue' },
  { path: 'blog', component: BlogComponent, title: 'Journal' },
  { path: 'blog/:slug', component: ArticleComponent, title: 'Journal' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'booking', component: BookingComponent, title: 'Book' },
  { path: 'affiliate', component: AffiliateComponent, title: 'Affiliate' },
  { path: '**', redirectTo: '' },
];
