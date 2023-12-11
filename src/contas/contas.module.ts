import { Module } from '@nestjs/common';
import { ContasService } from './contas.service';
import { ContasController } from './contas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ContaContabilSchema } from './entities/conta.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ContaContabil', schema: ContaContabilSchema },
    ]),
  ],
  controllers: [ContasController],
  providers: [ContasService],
})
export class ContasModule {}
