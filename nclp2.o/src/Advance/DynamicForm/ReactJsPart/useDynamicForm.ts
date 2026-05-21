import { useState } from "react"

const dynamicFormField = [
    {
        label: 'First Name',
        name: 'firstName',
        value: 'firstName',
        type: 'text',
        disabled: false,
        required: true
    },
    {
        label: 'Last Name',
        name: 'lastName',
        value: 'lastName',
        type: 'text',
        disabled: false,
        required: true
    },
    {
        label: 'Email Address',
        name: 'email',
        value: 'email',
        type: 'email',
        disabled: false,
        required: true
    },
    {
        label: 'Phone Number',
        name: 'phone',
        value: 'phone',
        type: 'tel',
        disabled: false,
        required: true
    },
    {
        label: 'Username',
        name: 'username',
        value: 'username',
        type: 'text',
        disabled: false,
        required: true
    },
    {
        label: 'Password',
        name: 'password',
        value: 'password',
        type: 'password',
        disabled: false,
        required: true
    },
    {
        label: 'Confirm Password',
        name: 'confirmPassword',
        value: 'confirmPassword',
        type: 'password',
        disabled: false,
        required: true
    },
    {
        label: 'Date of Birth',
        name: 'dob',
        value: 'dob',
        type: 'date',
        disabled: false,
        required: false
    },
    {
        label: 'Gender',
        name: 'gender',
        value: 'gender',
        type: 'text',
        disabled: false,
        required: false
    },
    {
        label: 'Address',
        name: 'address',
        value: 'address',
        type: 'text',
        disabled: false,
        required: false
    }
];

const useDynamicForm = () => {
    const [formField, setFormField] = useState({
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

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormField((preiousValue) => ({
            ...preiousValue,
            [name]: value
        }))

    }

    const handleSubmit = () => {

    }
    return { dynamicFormField, formField, setFormField, handleInputChange, handleSubmit }
}

export default useDynamicForm;