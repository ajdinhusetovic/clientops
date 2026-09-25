import { HealthService } from './health.service.js';
export declare class HealthController {
    private readonly healthService;
    constructor(healthService: HealthService);
    checkDatabase(): Promise<{
        status: string;
        database: string;
        userCount: number;
    }>;
}
