import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { BankController } from './controllers/bank.controller';
import { BankService } from './services/bank.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, BankController],
  providers: [AppService, BankService],
})
export class AppModule {}
