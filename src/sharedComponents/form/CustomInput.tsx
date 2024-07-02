import React from 'react';
import { Input } from '@nextui-org/react';

const CustomInput = ({ field, form, onPasswordChange, ...props }: any) => {
  const handleChange = (e: any) => {
    form.setFieldValue(field.name, e.target.value);
    if (onPasswordChange) {
      onPasswordChange(e.target.value);
    }
  };

  return (
    <Input
      {...field}
      {...props}
      onChange={handleChange}
      onBlur={(e) => {
        form.setFieldTouched(field.name, true);
      }}
    />
  );
};

export default CustomInput;
