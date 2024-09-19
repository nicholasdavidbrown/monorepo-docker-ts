import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResourcesController } from './modules/resources/resources.controller';
import { ResourcesModule } from './modules/resources/resources.module';

@Module({
  imports: [ResourcesModule],
  controllers: [AppController, ResourcesController],
  providers: [AppService],
})
export class AppModule {}
