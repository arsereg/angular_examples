import { inject, Injectable } from '@angular/core';
import { HousingLocationInfo } from '../housing-location/housing-location-info';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HousingService {

  housingUrl = 'http://localhost:3000/locations';

  private http = inject(HttpClient);

  getAllHouseingLocations(): Observable<HousingLocationInfo[]> {
    return this.http.get<HousingLocationInfo[]>(this.housingUrl);
    
  }

  getHousingLocationById(id: number): Observable<HousingLocationInfo | undefined> {
    return this.http.get<HousingLocationInfo>(`${this.housingUrl}/${id}`)
  }

  submitApplication(firstName: string, lastName: string, email: string){
    console.log(
      `Homes application receivd: firstName: ${firstName}, lastName: ${lastName}, email: ${email}`

    );
  }


  
}
