import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GetCarsService } from '../services/get-cars.service';
import { Cars } from '../interfaces/cars';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  providers: [GetCarsService],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent {
  cars: Cars[]= [];

  constructor(private carServ: GetCarsService ){}
  ngOnInit(){
    this.carServ.getAllCars().subscribe({
      next: (response: Cars[]) => {
        this.cars = response;
      },
    })
  }
}
