// src/app.module.ts
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UpdateModule } from './update/update.module';

@Module({
  imports: [
    UpdateModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'bundles'),
      serveRoot: '/bundles',
    }),
  ],
})
export class AppModule {}
