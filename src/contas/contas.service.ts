import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ContaContabil } from './entities/conta.entity';
import { Model } from 'mongoose';
import { DeleteResult } from 'mongodb';

@Injectable()
export class ContasService {
  constructor(
    @InjectModel('ContaContabil')
    private readonly contasModel: Model<ContaContabil>,
  ) {}

  async create(conta: CreateContaDto) {
    const contas = new this.contasModel(conta);
    return await contas.save();
  }

  async findAll() {
    return this.contasModel.find().exec();
  }

  async findOne(id: string) {
    const conta = await this.contasModel.findById(id);
    if (!conta) {
      throw new NotFoundException('Conta não encontrada');
    }
    return conta;
  }

  async update(id: string, conta: UpdateContaDto) {
    await this.contasModel.updateOne({ _id: id }, conta);
    return this.findOne(id);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.contasModel.deleteOne({ _id: id });
  }

  async removeAll(): Promise<DeleteResult> {
    return await this.contasModel.deleteMany({});
  }
}
