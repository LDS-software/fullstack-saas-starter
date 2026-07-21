import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  const port = process.env.APP_URL ? parseInt(process.env.APP_URL, 10) : 3002;

  await app.listen(port, '0.0.0.0');

  console.log(`✅ Microserviço API-TASKS rodando em: http://localhost:3002`);
}
bootstrap();