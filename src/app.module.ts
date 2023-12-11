import * as dotenv from 'dotenv';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContasModule } from './contas/contas.module';
import { CorsMiddleware } from './cors.middleware';

dotenv.config();
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

if (!dbUser || !dbPassword) {
  throw new Error(
    'Variáveis de ambiente DB_USER ou DB_PASSWORD não definidas.',
  );
}

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${dbUser}:${dbPassword}@planocontas.jp6mrs9.mongodb.net/?retryWrites=true&w=majority`,
    ),
    ContasModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}
