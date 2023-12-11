import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateContaDto {
  @IsNotEmpty()
  @ApiProperty()
  idIntegracao: string;

  @IsNotEmpty()
  @ApiProperty()
  idGerado: number;

  @IsNotEmpty()
  @ApiProperty()
  mascara: string;

  @IsNotEmpty()
  @ApiProperty()
  descricao: string;

  @IsNotEmpty()
  @ApiProperty()
  tipo: string;

  @IsNotEmpty()
  @ApiProperty()
  funcao: string;

  @IsNotEmpty()
  @ApiProperty()
  dataVigenciaInicial: string;

  @IsNotEmpty()
  @ApiProperty()
  dataVigenciaFinal: string;

  @IsNotEmpty()
  @ApiProperty()
  idConfiguracao: number;
}