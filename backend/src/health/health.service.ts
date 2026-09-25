import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class HealthService {
  constructor(private readonly prisma: PrismaService) {}

  async checkDatabase() {
    const userCount = await this.prisma.user.count();

    return {
      status: 'ok',
      database: 'connected',
      userCount,
    };
  }
}
