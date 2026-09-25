import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { getAuth } from '@clerk/express';
import type { Request } from 'express';

import { ClerkAuthGuard } from '../auth/clerk-auth/clerk-auth.guard.js';
import { UsersService } from './users.service.js';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  @UseGuards(ClerkAuthGuard)
  getCurrentUser(@Req() request: Request) {
    const { userId } = getAuth(request);

    return this.usersService.findOrCreateFromClerk(userId!);
  }
}
