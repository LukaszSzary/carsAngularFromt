import { Component } from '@angular/core';
import { Cars } from '../interfaces/cars';
import { GetCarsService } from '../services/get-cars.service';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FuelType, BodyTypes } from '../interfaces/enums';
@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [FormsModule, RouterLink],
  providers: [GetCarsService],
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent {
  constructor(private carServ: GetCarsService ){}

  car: Cars = {
    id : '',
    brand : '',
    model : '',
    doorsNumber : 0,
    luggageCapacity : 0,
    enginecapacity : 0,
    fuelType : FuelType.Petrol,
    productionDate : new Date(),
    carFuelConsumption : 0,
    bodyType : BodyTypes.Hatchback,
  };

  addCarForm(form: NgForm){
    if (form.valid && form.submitted){
      alert(this.car);
    }
  }

}
