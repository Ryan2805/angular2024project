
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'home', component: AppComponent}

];