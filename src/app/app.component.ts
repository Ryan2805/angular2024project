import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { RoverUIComponent } from './rover-ui/rover-ui.component';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,NavbarComponent, RouterOutlet, RouterLink, RouterLinkActive, FooterComponent,RoverUIComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'AngularProject';
  constructor(private router: Router) {}

  shouldShowRoverComponent(): boolean {
    // Check if the current route is not '/about'
    return this.router.url !== '/about';
  }
}
