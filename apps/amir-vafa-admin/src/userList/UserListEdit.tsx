import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const UserListEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="test" source="test" />
      </SimpleForm>
    </Edit>
  );
};
