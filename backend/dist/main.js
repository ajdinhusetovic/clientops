import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { clerkMiddleware } from '@clerk/express';
import { AppModule } from './app.module.js';
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    app.enableCors({
        origin: 'http://localhost:5173',
        credentials: true,
    });
    app.use(clerkMiddleware({
        publishableKey: configService.getOrThrow('CLERK_PUBLISHABLE_KEY'),
        secretKey: configService.getOrThrow('CLERK_SECRET_KEY'),
    }));
    app.enableShutdownHooks();
    await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
//# sourceMappingURL=main.js.map