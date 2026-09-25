var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException } from '@nestjs/common';
import { clerkClient } from '@clerk/express';
import { PrismaService } from '../prisma/prisma.service.js';
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findOrCreateFromClerk(userId) {
        const clerkUser = await clerkClient.users.getUser(userId);
        const primaryEmail = clerkUser.emailAddresses.find((email) => email.id === clerkUser.primaryEmailAddressId)?.emailAddress;
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
};
UsersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], UsersService);
export { UsersService };
//# sourceMappingURL=users.service.js.map