import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { CatController } from './cat/cat.controller';
import { CatService } from './cat/cat.service';
import { ProductModule } from './products/module/product.module';

@Module({
  imports: [CatModule, ProductModule],
  controllers: [AppController, CatController],
  providers: [AppService, CatService],
})
export class AppModule {}
