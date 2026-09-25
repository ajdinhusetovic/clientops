import { PrismaService } from '../prisma/prisma.service.js';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findOrCreateFromClerk(userId: string): Promise<{
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
