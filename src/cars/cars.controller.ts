import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { CarsService } from "./cars.service";
import { CreateCarDTO } from "./dto/create-car.dto";
import { UpdateCarDTO } from "./dto/update-car.dto";

@Controller("cars")
export class CarsController {
  constructor(private readonly carsService: CarsService) { }

  @Get()
  getAllCars() {
    return this.carsService.getAllCars();
  }

  @Get(":id")
  getCarsById(@Param("id", ParseUUIDPipe) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  postCars(@Body() createCarDto: CreateCarDTO) {
    return this.carsService.createCar(createCarDto);
  }

  @Patch(":id")
  updateCar(@Param("id", ParseUUIDPipe) id: string, @Body() update: UpdateCarDTO) {
    return this.carsService.actualiza(id, update);
  }

  @Delete(":id")
  eliminarCar(@Param("id", ParseIntPipe) id: number) {
    return `Auto eliminado con id: ${id}`;
  }
}
