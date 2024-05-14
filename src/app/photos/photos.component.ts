import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoverUIComponent } from '../rover-ui/rover-ui.component';
@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule,FormsModule,RoverUIComponent],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {
  @Input() photos: any[] = []; // Initializing with an empty array
  @Input() rover: string = ''; // Initializing with an empty string
  
}
