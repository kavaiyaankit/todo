import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [  
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'ctpl@dev',  // replace with your PostgreSQL password
    database: 'test',
    autoLoadEntities: true,
    synchronize: true,
  }),
  TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
