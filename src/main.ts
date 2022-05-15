import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { enableSwagger } from './config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.enableCors();

  enableSwagger(app);

  await app.listen(process.env.PORT || 3001);
}
bootstrap();
