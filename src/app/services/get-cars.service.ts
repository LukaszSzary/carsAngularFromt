import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cars } from '../interfaces/cars';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCarsService {
  private apiURLGetAll: string = 'http://localhost:8080/allCars';
  constructor(private http: HttpClient) { }

  getAllCars(): Observable<Cars[]>{
    return this.http.get<Cars[]>(this.apiURLGetAll);
  }
}
