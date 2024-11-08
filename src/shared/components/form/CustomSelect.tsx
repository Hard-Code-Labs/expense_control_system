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
      variant="faded"
      isRequired
      radius="full"
      labelPlacement="outside"
      popoverProps={{
        classNames: {
          base: "before:bg-default-200", 
          content: "p-0 border-small border-divider bg-background",
        },
      }}
      listboxProps={{
        itemClasses: {
          base: [
            "dark:data-[hover=true]:bg-[#cdfeec80]",
            "data-[selectable=true]:focus:bg-[#cdfeec30]",
            "text-[#cdfeec]"
          ]
        }
      }}
      classNames={{
        value: [
          "text-[#cdfeec90]",
          "group-data-[has-value=true]:text-[#cdfeec] ",
        ],
        trigger: [
          "bg-[#040F10EE]",
          "border",
          "border-[#cdfeec]",
        ],
        helperWrapper: [
          "absolute",
          "top-[90%]"
        ]
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
