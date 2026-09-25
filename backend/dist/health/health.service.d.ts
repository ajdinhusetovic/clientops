import { PrismaService } from '../prisma/prisma.service.js';
export declare class HealthService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    checkDatabase(): Promise<{
        status: string;
        database: string;
        userCount: number;
    }>;
}
