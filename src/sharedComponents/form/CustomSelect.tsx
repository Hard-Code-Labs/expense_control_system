import React from 'react';
import { Select, SelectItem } from '@nextui-org/react';

const CustomSelect = ({ field, form, options, ...props }: any) => {
  return (
    <Select
      {...field}
      {...props}
      onChange={(e) => {
        form.setFieldValue(field.name, e.target.value);
      }}
      onBlur={(e) => {
        form.setFieldTouched(field.name, true);
      }}
    >
      {options.map((option:any) => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export default CustomSelect;
