import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDTO{

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id: string;

    @IsString()
    @IsOptional()
    readonly nombre?: string;
    
    @IsString()
    @IsOptional()
    readonly modelo?: string;

}