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
      variant={props.variant ?? "faded"}
      isRequired
      radius="full"
      labelPlacement="outside"
      classNames={{
        input: [
          "text-[#cdfeec]",
          "placeholder:text-[#cdfeec90]",
          ...(props.classNames ? (props.classNames.input ? [...props.classNames.input] : []) : []),
        ],
        inputWrapper: [
          "bg-[#040F10EE]",
          "border",
          "border-[#cdfeec]",
          ...(props.classNames ? (props.classNames.inputWrapper ? [...props.classNames.inputWrapper] : []) : []),
        ],
        helperWrapper: [
          "mb-[-20px]",
          ...(props.classNames ? (props.classNames.helperWrapper ? [...props.classNames.helperWrapper] : []) : []),
        ]
      }}
    />
  );
};

export default CustomInput;
