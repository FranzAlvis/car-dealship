import { IsString } from "class-validator";

export class CreateCarDTO{
    @IsString()
    readonly nombre: string;
    
    @IsString()
    readonly modelo: string;

}