import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Document } from 'mongoose';

@Schema()
export class ContaContabil extends Document {
  @Prop()
  @IsNotEmpty()
  @ApiProperty()
  idIntegracao: string;

  @Prop()
  @IsNotEmpty()
  @ApiProperty()
  idGerado: number;

  @Prop()
  @IsNotEmpty()
  @ApiProperty()
  mascara: string;

  @Prop()
  @IsNotEmpty()
  @ApiProperty()
  descricao: string;

  @Prop()
  @IsNotEmpty()
  @ApiProperty()
  tipo: string;

  @Prop()
  @IsNotEmpty()
  @ApiProperty()
  funcao: string;

  @Prop()
  @IsNotEmpty()
  @ApiProperty()
  dataVigenciaInicial: string;

  @Prop()
  @IsNotEmpty()
  @ApiProperty()
  dataVigenciaFinal: string;

  @Prop()
  @IsNotEmpty()
  @ApiProperty()
  idConfiguracao: number;
}

export const ContaContabilSchema = SchemaFactory.createForClass(ContaContabil);
