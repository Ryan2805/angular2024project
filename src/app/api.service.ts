import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getPhotos(rover: string, sol?: number, camera?: string, page?: number): Observable<any> {
    const url = `${this.baseUrl}/photos/${rover}`;
    const params: any = {};
    
    // Add parameters only if they are defined
    if (sol !== undefined) params.sol = sol;
    if (camera !== undefined) params.camera = camera;
    if (page !== undefined) params.page = page;

    return this.http.get(url, { params });
  }
}