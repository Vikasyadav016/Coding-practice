import { useState } from "react"
import formFieldValidation from "./formFieldValidation";
import type { FormFieldType } from "./formFields";
import {dynamicFormField} from './formFields'


const useDynamicForm = () => {
    
    const [formField, setFormField] = useState<FormFieldType>({
        address: '',
        gender: '',
        dob: '',
        confirmPassword: '',
        password: '',
        username: '',
        phone: '',
        email: '',
        lastName: '',
        firstName: ''
    })

    const [errors, setErrors] = useState<any>({});

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormField((preiousValue) => ({
            ...preiousValue,
            [name]: value
        }))

    }

  const handleSubmit = () => {
    debugger
    const validationErrors = formFieldValidation(dynamicFormField,formField);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
        return;
    }
};

    return { dynamicFormField,errors, formField, setFormField, handleInputChange, handleSubmit }
}

export default useDynamicForm;