import useDynamicForm from "./useDynamicForm";

const formFieldValidation = () => {
  const { dynamicFormField, formField }: any = useDynamicForm();

  return dynamicFormField.every((field: any) => {
    if (field.required) {
      return formField[field.name]?.trim() !== '';
    }
    return true;
  });
};

export default formFieldValidation;