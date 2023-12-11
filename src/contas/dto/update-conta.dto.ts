import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateContaDto {
  @IsNotEmpty()
  @ApiProperty()
  @IsOptional()
  idIntegracao: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsOptional()
  idGerado: number;

  @IsNotEmpty()
  @ApiProperty()
  @IsOptional()
  mascara: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsOptional()
  descricao: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsOptional()
  tipo: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsOptional()
  funcao: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsOptional()
  dataVigenciaInicial: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsOptional()
  dataVigenciaFinal: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsOptional()
  idConfiguracao: number;
}
