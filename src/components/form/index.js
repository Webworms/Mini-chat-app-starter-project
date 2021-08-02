import React from "react";
import { Form, FormGroup, Label, Input, Button } from "./form";

export default function MyForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
}

MyForm.FormGroup = function MyFormGroup({ children, ...restProps }) {
  return <FormGroup {...restProps}>{children}</FormGroup>;
};

MyForm.FormLabel = function MyFormLabel({ ...restProps }) {
  return <Label {...restProps} />;
};

MyForm.FormInput = function MyFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

MyForm.FormButton = function MyFormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
