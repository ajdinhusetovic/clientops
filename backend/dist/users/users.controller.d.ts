import type { Request } from 'express';
import { UsersService } from './users.service.js';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getCurrentUser(request: Request): Promise<{
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
