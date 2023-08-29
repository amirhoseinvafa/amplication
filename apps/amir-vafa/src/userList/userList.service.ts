import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserListServiceBase } from "./base/userList.service.base";

@Injectable()
export class UserListService extends UserListServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
