import {ChangeDetectorRef, Component, inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HousingService } from '../home/housing';
import {HousingLocationInfo } from '../housing-location/housing-location-info';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  templateUrl: 'details.html',
  styleUrls: ['details.css'],
})
export class Details {

  private readonly changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocationInfo | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl('', [Validators.minLength(3), Validators.maxLength(6)]),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.email])
  });

  constructor(){
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(housingLocationId)
    .subscribe((housingLocation) => {
      this.housingLocation = housingLocation;
      this.changeDetectorRef.markForCheck();
    });
  }

  submitApplication(){
    if(this.applyForm.valid){
      this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
    }else{
      console.log('Form is invalid');
    }

  }
}
