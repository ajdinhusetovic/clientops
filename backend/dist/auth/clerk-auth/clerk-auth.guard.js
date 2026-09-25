var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, UnauthorizedException, } from '@nestjs/common';
import { getAuth } from '@clerk/express';
let ClerkAuthGuard = class ClerkAuthGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const { isAuthenticated } = getAuth(request);
        if (!isAuthenticated) {
            throw new UnauthorizedException('Authentication is required');
        }
        return true;
    }
};
ClerkAuthGuard = __decorate([
    Injectable()
], ClerkAuthGuard);
export { ClerkAuthGuard };
//# sourceMappingURL=clerk-auth.guard.js.map