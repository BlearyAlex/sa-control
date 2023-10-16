import { Field } from "formik";
import { CheckBox } from "./CheckBox";

export default function Roles({ roles, setFieldValue }) {
  return (
    <ul className="grid grid-cols-4">
      {roles.map((role) => (
        <li key={role.id}>
          <label>
            {/* <CheckBox
              type="checkbox"
              value={role.id}
              name="permission"
              onChange={(value) => setFieldValue("permission", value.value)}
            /> */}
            <Field
              type="checkbox"
              name="permission"
              value={role.id}
            />

            {role.name}
          </label>
        </li>
      ))}
    </ul>
  );
}
