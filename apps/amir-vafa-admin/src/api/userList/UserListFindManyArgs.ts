import { UserListWhereInput } from "./UserListWhereInput";
import { UserListOrderByInput } from "./UserListOrderByInput";

export type UserListFindManyArgs = {
  where?: UserListWhereInput;
  orderBy?: Array<UserListOrderByInput>;
  skip?: number;
  take?: number;
};
