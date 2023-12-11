import * as mongoose from 'mongoose';

export const ContasSchema = new mongoose.Schema(
    {
        idIntegracao: String,
        idGerado: Number,
        mascara: String,
        descricao: String,
        tipo: String,
        funcao: String,
        dataVigenciaInicial: String,
        dataVigenciaFinal: String,
        idConfiguracao: Number
    },
    {
        collection: 'contas'
    }
);