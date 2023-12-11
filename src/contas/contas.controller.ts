import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ContasService } from './contas.service';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';
import { DeleteResult } from 'mongodb';

@Controller('contas')
export class ContasController {
  constructor(private readonly contasService: ContasService) {}

  /**
   * Cria uma nova conta contábil.
   * @param createContaDto Dados para a criação da conta.
   * @returns Os dados da conta recém-criada.
   */
  @Post()
  public async create(@Body() createContaDto: CreateContaDto): Promise<any> {
    return this.contasService.create(createContaDto);
  }

  /**
   * Obtém todas as contas contábeis.
   * @returns Uma lista de contas contábeis.
   */
  @Get()
  public async findAll(): Promise<any> {
    return this.contasService.findAll();
  }

  /**
   * Obtém uma conta contábil pelo ID.
   * @param id O ID da conta contábil.
   * @returns Os dados da conta contábil.
   */
  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<any> {
    return this.contasService.findOne(id);
  }

  /**
   * Atualiza uma conta contábil existente.
   * @param id O ID da conta contábil.
   * @param updateContaDto Dados para a atualização da conta.
   * @returns Os dados da conta atualizada.
   */
  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateContaDto: UpdateContaDto,
  ): Promise<any> {
    return this.contasService.update(id, updateContaDto);
  }

  /**
   * Remove uma conta contábil pelo ID.
   * @param id O ID da conta contábil a ser removida.
   * @returns Resultado da operação de remoção.
   */
  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.contasService.remove(id);
  }

  /**
   * Remove todas as contas contábeis.
   * @returns Resultado da operação de remoção em massa.
   */
  @Delete()
  public async removeAll(): Promise<DeleteResult> {
    return this.contasService.removeAll();
  }
}