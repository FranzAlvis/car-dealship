import { Injectable, NotFoundException } from "@nestjs/common";
import { v4 as uuid } from "uuid";
import { Car } from "./interface/cars.interface";
import { CreateCarDTO } from "./dto/create-car.dto";
import { UpdateCarDTO } from "./dto/update-car.dto";

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      nombre: "honda",
      modelo: "civic",
    },
    {
      id: uuid(),
      nombre: "toyota",
      modelo: "corolla",
    },
    {
      id: uuid(),
      nombre: "mazda",
      modelo: "3",
    },
  ];

  getAllCars() {
    return this.cars;
  }
  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    console.log(car);
    if (!car) {
      throw new NotFoundException("No existe oe ");
    }
    return car;
  }

  createCar(xd: CreateCarDTO){
    
    const car: Car = {
      id: uuid(),
      nombre: xd.nombre,
      modelo: xd.modelo
    }
    this.cars.push(car);
    return car;
  }

  actualiza(id: string, updateCar: UpdateCarDTO){

  }
}
