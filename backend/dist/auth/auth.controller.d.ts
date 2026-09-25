import type { Request } from 'express';
export declare class AuthController {
    getCurrentUser(request: Request): {
        userId: string | null;
        sessionId: string | null;
    };
}
