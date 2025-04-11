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
            "text-[#cdfeec]",
            ...(props.listboxProps ? (props.listboxProps.itemClasses.base ? [...props.listboxProps.itemClasses.base] : []) : []),
          ]
        }
      }}
      classNames={{
        value: [
          "text-[#cdfeec90]",
          "group-data-[has-value=true]:text-[#cdfeec] ",
          ...(props.classNames ? (props.classNames.value ? [...props.classNames.value] : []) : []),
        ],
        trigger: [
          "bg-[#040F10EE]",
          "border",
          "border-[#cdfeec]",
          ...(props.classNames ? (props.classNames.trigger ? [...props.classNames.trigger] : []) : []),
        ],
        helperWrapper: [
          "absolute",
          "top-[90%]",
          ...(props.classNames ? (props.classNames.helperWrapper ? [...props.classNames.helperWrapper] : []) : []),
        ]
      }}
    >
      {options.map((option:any) => (
        <SelectItem startContent={option.icon} key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export default CustomSelect;
