export const CheckBox = ({ onChange, value }) => {
  return (
    <input
      type="checkbox"
      value={onCheckBoxChange(value)}
      onChange={(value) => onChange(value)}
    />
  );
};
