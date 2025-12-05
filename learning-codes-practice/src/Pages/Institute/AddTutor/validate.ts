import type { TutorFormErrors, TutorFormValues } from "./types";

export const validateFullName = (name: string) => {
  if (!name.trim()) return "Full name is required";
  if (name.length < 3) return "Name must be at least 3 characters long";
  return "";
};

export const validateGender = (value: string) => {
  return value ? "" : "Gender is required";
};

export const validateDOB = (value: string) => {
  return value ? "" : "Date of birth is required";
};

export const validatePhone = (value: string) => {
  if (!value.trim()) return "Phone number is required";
  if (!/^[0-9+\-\s]{8,15}$/.test(value))
    return "Enter a valid phone number";
  return "";
};

export const validateEmail = (value: string) => {
  if (!value.trim()) return "Email is required";
  if (!/^\S+@\S+\.\S+$/.test(value)) return "Invalid email format";
  return "";
};

export const validateText = (value: string, field: string) => {
  return value.trim() ? "" : `${field} is required`;
};

export const validateExperience = (value: string) => {
  if (!value.trim()) return "Experience is required";
  if (isNaN(Number(value))) return "Experience must be a number";
  return "";
};

export const validateTime = (start: string, end: string) => {
  if (!start || !end) return "Both start and end times are required";
  if (start >= end) return "End time must be later than start time";
  return "";
};

export const runAllValidations = (values: TutorFormValues): TutorFormErrors => {
  const errors: TutorFormErrors = {};

  errors.fullName = validateFullName(values.fullName);
  errors.gender = validateGender(values.gender);
  errors.dob = validateDOB(values.dob);
  errors.phone = validatePhone(values.phone);
  errors.email = validateEmail(values.email);
  errors.address = validateText(values.address, "Address");
  errors.city = validateText(values.city, "City");
  errors.state = validateText(values.state, "State");
  errors.qualification = validateText(values.qualification, "Qualification");
  errors.experience = validateExperience(values.experience);
  errors.subjects = validateText(values.subjects, "Subjects");

  const timeError = validateTime(values.startTime, values.endTime);
  if (timeError) {
    errors.startTime = timeError;
    errors.endTime = timeError;
  }

  return errors;
};
