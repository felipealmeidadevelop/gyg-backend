import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db', // Nome do serviço do contêiner do banco de dados no docker-compose
      port: 5432,
      username: 'postgres',
      password: 'sisgygdb',
      database: 'gygdb',
      autoLoadEntities: true,
      // synchronize: true, // Apenas para desenvolvimento, deve ser desativado em produção
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}