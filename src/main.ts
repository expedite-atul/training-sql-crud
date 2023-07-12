import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes/validate.pipe';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { databaseConfig } from './core/database/database.config';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
      .setTitle('NODE JS SEQUELIZE SESSION')
      .setDescription('The session API description')
      .setVersion('1.0')
      .addTag('node js training')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/v1', app, document);
    // handle all user input validation globally
    app.useGlobalPipes(new ValidateInputPipe());
    await app.listen(3002);
    console.log(`database config : ${databaseConfig.development}`)
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.error(`we have an error, ${error}`);
  }
}
bootstrap();
