import { useState } from "react";
import ApiMethods from "../../ApiMethods/ApiMethods";
import BASE_URL from "../../config/config";

const useSignUpForm = () => {
  const [activeStep, setActiveStep] = useState<string | null>("0");
  const [errors, setErrors] = useState<any>({});
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    aadhar: "",
    mobile: "",
    fatherName: "",
    motherName: "",
    guardianMobile: "",
    guardianEmail: "",
    state: "",
    district: "",
    block: "",
    panchayat: "",
    village: "",
    ward: "",
    houseNo: "",
    landmark: "",
    area: "",
    pincode: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | any
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
    setErrors((prev: any) => ({ ...prev, [name]: "" })); 
  };

  const validateStep1 = () => {
    const newErrors: any = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.aadhar) newErrors.aadhar = "Aadhar number is required";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: any = {};
    if (!formData.fatherName)
      newErrors.fatherName = "Father's name is required";
    if (!formData.guardianMobile)
      newErrors.guardianMobile = "Guardian mobile is required";
    if (!formData.guardianEmail)
      newErrors.guardianEmail = "Guardian email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: any = {};
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.district) newErrors.district = "District is required";
    if (!formData.block) newErrors.block = "Block is required";
    if (!formData.panchayat) newErrors.panchayat = "panchayat is required";
    if (!formData.village) newErrors.village = "Village is required";
    if (!formData.pincode) newErrors.pincode = "Pincode is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const validateStep4 = () => {
    const newErrors: any = {};
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (nextStep: string) => {
    let valid = false;
    if (activeStep === "0") valid = validateStep1();
    if (activeStep === "1") valid = validateStep2();
    if (activeStep === "2") valid = validateStep3();
    if (activeStep === "3") valid = validateStep4();

    if (valid) setActiveStep(nextStep);
  };

  const handlePrev = (step: string) => setActiveStep(step);

  const handleFormFinalSubmit = () => {
    try {
      if (!formData.termsAccepted) {
        alert("Please check terms and conditions");
      } else {
        const apiResponse = ApiMethods.post(`${BASE_URL}v1/register`,formData)
        console.log("apiResponse",apiResponse)
        alert("Success!");
        console.log("data", formData);
      }
    } catch (error) {}
  };

  return {
    activeStep,
    errors,
    formData,
    setFormData,
    handleChange,
    validateStep1,
    validateStep2,
    validateStep3,
    validateStep4,
    handleNext,
    handlePrev,
    handleFormFinalSubmit,
  };
};
export default useSignUpForm;
