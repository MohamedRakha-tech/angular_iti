import { Routes } from '@angular/router';

import { About } from './about/about';
import { Contact } from './contact/contact';
import { Main } from './main/main';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: Main },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: 'home' },
];
