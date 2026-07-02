import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housing-location/housing-location-info';
import { HousingService } from './housing';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: 'home.html',
  styleUrl: `home.css`,
})
export class Home {

  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  housingLocationList: HousingLocationInfo[] = [];

  filteredLocationList: HousingLocationInfo[] = [];

  housingService: HousingService = inject(HousingService);
  
  constructor(){
    this.housingService.getAllHouseingLocations()
    .subscribe( (housingLocationList: HousingLocationInfo[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = this.housingLocationList;
        this.changeDetectorRef.markForCheck();
      }
    );
    
  }

  filterResults(text: string){
    if(!text){
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList
    .filter((housingLocation) => {
      return housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    });


  }
  

}
