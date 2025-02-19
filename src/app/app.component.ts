import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GetCarsService } from './services/get-cars.service';
import { Cars } from './interfaces/cars';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  providers: [GetCarsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
