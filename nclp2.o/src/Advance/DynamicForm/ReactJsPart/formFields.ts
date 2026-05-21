export interface FormFieldType {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    confirmPassword: string;
    dob: string
    gender: string;
    address: string
}

export const dynamicFormField = [
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
];