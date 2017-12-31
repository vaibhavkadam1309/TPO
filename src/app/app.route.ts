// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyApp } from './app.component';
import { StartPage } from '../pages/startpage/startpage';
import { StudentHome } from '../pages/studenthome/studenthome';
// Route Configuration
console.log('In routing page');
export const routes: Routes = [
    { path: '', redirectTo: '/startpage', pathMatch: 'full' },
    { path: 'MyApp', component: MyApp },
    { path: 'startpage', component: StartPage },
    { path: 'student_home', component: StudentHome },
    { path: '**', redirectTo: '/startpage', pathMatch: 'full' },
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
