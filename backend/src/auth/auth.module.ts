import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller.js';
import { ClerkAuthGuard } from './clerk-auth/clerk-auth.guard.js';

@Module({
  controllers: [AuthController],
  providers: [ClerkAuthGuard],
  exports: [ClerkAuthGuard],
})
export class AuthModule {}
