import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserListModuleBase } from "./base/userList.module.base";
import { UserListService } from "./userList.service";
import { UserListController } from "./userList.controller";
import { UserListResolver } from "./userList.resolver";

@Module({
  imports: [UserListModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserListController],
  providers: [UserListService, UserListResolver],
  exports: [UserListService],
})
export class UserListModule {}
