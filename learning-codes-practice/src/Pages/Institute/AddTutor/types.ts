export interface TutorFormValues {
  fullName: string;
  gender: string;
  dob: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  qualification: string;
  experience: string;
  mode: string;
  salary: string;
  subjects: string;
  classes: string;
  availableDays: string[];
  startTime: string;
  endTime: string;
  bio: string;
}

export type TutorFormErrors = {
  [K in keyof TutorFormValues]?: string;
};
