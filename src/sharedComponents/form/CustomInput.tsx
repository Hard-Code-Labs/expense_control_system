import React from 'react';
import { Input } from '@nextui-org/react';

const CustomInput = ({ field, form, ...props }:any) => {
  return (
    <Input
      {...field}
      {...props}
      onChange={(e) => {
        form.setFieldValue(field.name, e.target.value);
      }}
      onBlur={(e) => {
        form.setFieldTouched(field.name, true);
      }}
    />
  );
};

export default CustomInput;