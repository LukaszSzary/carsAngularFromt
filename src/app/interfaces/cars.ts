import { BodyTypes, FuelType } from './enums';

export interface Cars {
    id : string,
    brand : string,
    model : string,
    doorsNumber : number,
    luggageCapacity : number,
    enginecapacity : number,
    fuelType : FuelType,
    productionDate : Date,
    carFuelConsumption : number,
    bodyType : BodyTypes,
}
