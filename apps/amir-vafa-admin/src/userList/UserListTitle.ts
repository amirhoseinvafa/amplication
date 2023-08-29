import { UserList as TUserList } from "../api/userList/UserList";

export const USERLIST_TITLE_FIELD = "test";

export const UserListTitle = (record: TUserList): string => {
  return record.test || String(record.id);
};
