import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from '../photos/photos.component';

@Component({
  selector: 'app-rover-ui',
  standalone: true,
  imports: [FormsModule, CommonModule, PhotosComponent],
  templateUrl: './rover-ui.component.html',
  styleUrl: './rover-ui.component.css'
})
export class RoverUIComponent {
  rovers: string[] = ['Curiosity', 'Opportunity', 'Spirit'];
  selectedRover: string = '';
  sol: number | undefined;
  camera: string | undefined;
  page: number | undefined;
  images$: Observable<any[]> | undefined; // Modify to accept undefined
  photos: any[] = [];

  constructor(private apiService: ApiService) {}

  onSelectRover(rover: string) {
    this.selectedRover = rover;
  }

  // Define camera options
  cameras: string[] = ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM', 'PANCAM', 'MINITES'];

  onSubmit() {
    // Call ApiService method to fetch images based on selected rover and parameters
    this.apiService.getPhotos(this.selectedRover, this.sol, this.camera, this.page)
      .subscribe({
        next: (data) => {
          console.log('API data:', data);
          this.photos = data; // Assign the emitted array to the photos property
        },
        error: (error) => console.error('Error fetching API data:', error)
      });
  }

  ngOnInit() {
    console.log(this.rovers); // Log the rovers array
  }
}