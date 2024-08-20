import { Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { AddCarComponent } from './add-car/add-car.component';
import { EditCarComponent } from './edit-car/edit-car.component';

export const routes: Routes = [
    {
        path: "", title: "Home", component: DefaultComponent
    },
    {
        path: "addCar", title: "addCar", component: AddCarComponent
    },
    {
        path: "editCar", title: "editCar", component: EditCarComponent
    }
];
