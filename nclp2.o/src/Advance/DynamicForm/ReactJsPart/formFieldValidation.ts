
const formFieldValidation = (
    dynamicFormField: any,
    formField: any
) => {

    const errors: any = {};

    dynamicFormField.forEach((field: any) => {
        const value = formField[field.name];

        // Required validation
        if (field.required && (!value || value.trim() === "")) {
            errors[field.name] = `${field.label} is required`;
        }

        // Email validation example
        if (
            field.type === "email" &&
            value &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
        ) {
            errors[field.name] = "Invalid email address";
        }
    });

    return errors;
};

export default formFieldValidation;