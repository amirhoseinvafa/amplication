import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserListWhereInput = {
  id?: StringFilter;
  test?: StringNullableFilter;
};
