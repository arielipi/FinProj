import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // if (typeof globalThis.crypto === 'undefined') {
  //   globalThis.crypto = require('crypto-browserify');
  // }
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
//  app.listen(process.env.PORT ?? 3000);
}
bootstrap();
