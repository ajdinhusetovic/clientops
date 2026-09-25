import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { getAuth } from '@clerk/express';
import type { Request } from 'express';

import { ClerkAuthGuard } from './clerk-auth/clerk-auth.guard.js';

@Controller('auth')
export class AuthController {
  @Get('me')
  @UseGuards(ClerkAuthGuard)
  getCurrentUser(@Req() request: Request) {
    const { userId, sessionId } = getAuth(request);

    return {
      userId,
      sessionId,
    };
  }
}
