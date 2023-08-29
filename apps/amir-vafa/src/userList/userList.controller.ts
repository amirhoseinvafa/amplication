import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserListService } from "./userList.service";
import { UserListControllerBase } from "./base/userList.controller.base";

@swagger.ApiTags("userLists")
@common.Controller("userLists")
export class UserListController extends UserListControllerBase {
  constructor(
    protected readonly service: UserListService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
