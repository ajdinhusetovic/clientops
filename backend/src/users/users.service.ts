import { Injectable, NotFoundException } from '@nestjs/common';
import { clerkClient } from '@clerk/express';

import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findOrCreateFromClerk(userId: string) {
    const clerkUser = await clerkClient.users.getUser(userId);

    const primaryEmail = clerkUser.emailAddresses.find(
      (email) => email.id === clerkUser.primaryEmailAddressId,
    )?.emailAddress;

    if (!primaryEmail) {
      throw new NotFoundException('Authenticated user has no primary email');
    }

    return this.prisma.user.upsert({
      where: {
        id: userId,
      },
      update: {
        email: primaryEmail,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
      },
      create: {
        id: userId,
        email: primaryEmail,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
      },
    });
  }
}
