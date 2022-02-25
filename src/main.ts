import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //TODO add GH page
  const config = new DocumentBuilder()
    .setTitle("Popov's API")
    .setDescription(
      "Popov's API endpoints description. For more information, check the GitHub repository at [FILL HERE]",
    )
    .setVersion('0.1')
    .addTag('popov')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Use validation pipe to check data passed to API against DTOs
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT || 8080);
}
bootstrap();
