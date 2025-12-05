// import React, { useState } from "react";
// import {
//   Form,
//   Button,
//   Row,
//   Col,
//   Card,
//   Toast,
//   ToastContainer,
//   Spinner,
// } from "react-bootstrap";

// // DUMMY COUNTRY - STATE - CITY DATA
// const locationData: Record<string, Record<string, string[]>> = {
//   India: {
//     Maharashtra: ["Mumbai", "Pune", "Nagpur"],
//     Karnataka: ["Bengaluru", "Mysore"],
//     Delhi: ["New Delhi"],
//   },
//   USA: {
//     California: ["Los Angeles", "San Diego"],
//     Texas: ["Houston", "Dallas"],
//   },
// };

// // SKILL SUGGESTIONS
// const allSkillSuggestions = [
//   "JavaScript",
//   "React",
//   "Node.js",
//   "MongoDB",
//   "HTML",
//   "CSS",
//   "TypeScript",
//   "Python",
//   "Java",
//   "C++",
//   "Data Structures",
//   "Bootstrap",
//   "Tailwind",
// ];

// interface TutorFormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   subject: string;
//   experience: string;
//   skills: string[];
//   bio: string;
//   profileImage?: File | null;

//   country: string;
//   state: string;
//   city: string;
// }

// const AddTutorOrTeacher: React.FC = () => {
//   const [formData, setFormData] = useState<TutorFormData>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     subject: "",
//     experience: "",
//     skills: [],
//     bio: "",
//     profileImage: null,
//     country: "",
//     state: "",
//     city: "",
//   });

//   const [errors, setErrors] = useState<
//     Partial<Record<keyof TutorFormData, string>>
//   >({});
//   const [previewImage, setPreviewImage] = useState<string | null>(null);
//   const [showToast, setShowToast] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // Skill input
//   const [skillsInput, setSkillsInput] = useState("");
//   const [skillSuggestions, setSkillSuggestions] = useState<string[]>([]);

//   // handle text / textarea change
//   const handleChange = (
//     e: any
//   ) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({ ...prev, [name]: value }));

//     validateField(name as keyof TutorFormData, value);
//   };

//   // handle country change
//   const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const country = e.target.value;

//     setFormData((prev) => ({
//       ...prev,
//       country,
//       state: "",
//       city: "",
//     }));
//   };

//   // handle state change
//   const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const state = e.target.value;

//     setFormData((prev) => ({
//       ...prev,
//       state,
//       city: "",
//     }));
//   };

//   // skill input change
//   const onSkillInput = (value: string) => {
//     setSkillsInput(value);

//     if (!value.trim()) {
//       setSkillSuggestions([]);
//       return;
//     }

//     const filtered = allSkillSuggestions.filter((sk) =>
//       sk.toLowerCase().includes(value.toLowerCase())
//     );

//     setSkillSuggestions(filtered);
//   };

//   // select suggestion
//   const selectSkillSuggestion = (skill: string) => {
//     addSkill(skill);
//     setSkillsInput("");
//     setSkillSuggestions([]);
//   };

//   // add skill
//   const handleSkillKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter" && skillsInput.trim()) {
//       e.preventDefault();
//       addSkill(skillsInput.trim());
//     }
//   };

//   const addSkill = (skill: string) => {
//     if (!formData.skills.includes(skill)) {
//       setFormData((prev) => ({
//         ...prev,
//         skills: [...prev.skills, skill],
//       }));
//     }
//     setSkillsInput("");
//   };

//   const removeSkill = (skill: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       skills: prev.skills.filter((s) => s !== skill),
//     }));
//   };

//   // file upload
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0] || null;
//     setFormData((prev) => ({ ...prev, profileImage: file }));

//     if (file) {
//       setPreviewImage(URL.createObjectURL(file));
//     }
//   };

//   // validation
//   const validateField = (
//     name: keyof TutorFormData,
//     value: string | string[]
//   ) => {
//     let msg = "";

//     const requiredFields: (keyof TutorFormData)[] = [
//       "firstName",
//       "lastName",
//       "email",
//       "phone",
//       "subject",
//       "experience",
//       "bio",
//       "country",
//       "state",
//       "city",
//     ];

//     if (requiredFields.includes(name) && !value) {
//       msg = "This field is required";
//     }

//     if (name === "email" && typeof value === "string") {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (value && !emailRegex.test(value)) msg = "Invalid email format";
//     }

//     if (name === "phone" && typeof value === "string") {
//       const phoneRegex = /^[0-9]{10}$/;
//       if (value && !phoneRegex.test(value)) msg = "Phone must be 10 digits";
//     }

//     if (name === "experience" && typeof value === "string") {
//       if (Number(value) < 1) msg = "Experience must be at least 1 year";
//     }

//     setErrors((prev) => ({ ...prev, [name]: msg }));
//   };

//   const validateForm = () => {
//     const newErrors: Partial<Record<keyof TutorFormData, string>> = {};

//     Object.entries(formData).forEach(([key, value]) => {
//       if (key !== "profileImage" && !value) {
//         newErrors[key as keyof TutorFormData] = "This field is required";
//       }
//     });

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   // form submit
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       setShowToast(true);
//       console.log("Final Tutor Data:", formData);
//     }, 1500);
//   };

//   // clear form
//   const clearForm = () => {
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       subject: "",
//       experience: "",
//       skills: [],
//       bio: "",
//       profileImage: null,
//       country: "",
//       state: "",
//       city: "",
//     });
//     setPreviewImage(null);
//     setErrors({});
//   };

//   return (
//     <>
//       <Card className="shadow p-4 mt-4 mb-4" style={{ marginLeft: "25px",marginRight:'25px', paddingTop: "50px", minHeight: "100vh" }}>
//         <h3 className="mb-4 text-primary fw-semibold">Add New Tutor</h3>

//         <Form onSubmit={handleSubmit}>
//           {/* NAME */}
//           <Row>
//             <Col md={6}>
//               <Form.Group className="mb-1">
//                 <Form.Label>First Name</Form.Label>
//                 <Form.Control
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   isInvalid={!!errors.firstName}
//                 />
//                 <small className="text-danger">{errors.firstName}</small>
//               </Form.Group>
//             </Col>

//             <Col md={6}>
//               <Form.Group className="mb-1">
//                 <Form.Label>Last Name</Form.Label>
//                 <Form.Control
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   isInvalid={!!errors.lastName}
//                 />
//                 <small className="text-danger">{errors.lastName}</small>
//               </Form.Group>
//             </Col>
//           </Row>

//           {/* CONTACT */}
//           <Row>
//             <Col md={6}>
//               <Form.Group className="mb-1">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   isInvalid={!!errors.email}
//                 />
//                 <small className="text-danger">{errors.email}</small>
//               </Form.Group>
//             </Col>

//             <Col md={6}>
//               <Form.Group className="mb-1">
//                 <Form.Label>Phone</Form.Label>
//                 <Form.Control
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   isInvalid={!!errors.phone}
//                 />
//                 <small className="text-danger">{errors.phone}</small>
//               </Form.Group>
//             </Col>
//           </Row>

//           {/* SUBJECT + EXPERIENCE */}
//           <Row>
//             <Col md={6}>
//               <Form.Group className="mb-1">
//                 <Form.Label>Subject</Form.Label>
//                 <Form.Control
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   isInvalid={!!errors.subject}
//                 />
//                 <small className="text-danger">{errors.subject}</small>
//               </Form.Group>
//             </Col>

//             <Col md={6}>
//               <Form.Group className="mb-1">
//                 <Form.Label>Experience (years)</Form.Label>
//                 <Form.Control
//                   type="number"
//                   name="experience"
//                   value={formData.experience}
//                   onChange={handleChange}
//                   isInvalid={!!errors.experience}
//                 />
//                 <small className="text-danger">{errors.experience}</small>
//               </Form.Group>
//             </Col>
//           </Row>

//           {/* COUNTRY - STATE - CITY */}
//           <Row>
//             <Col md={4}>
//               <Form.Group className="mb-1">
//                 <Form.Label>Country</Form.Label>
//                 <Form.Select
//                   name="country"
//                   value={formData.country}
//                   onChange={handleCountryChange}
//                   isInvalid={!!errors.country}
//                 >
//                   <option value="">Select Country</option>
//                   {Object.keys(locationData).map((country) => (
//                     <option key={country} value={country}>
//                       {country}
//                     </option>
//                   ))}
//                 </Form.Select>
//                 <small className="text-danger">{errors.country}</small>
//               </Form.Group>
//             </Col>

//             <Col md={4}>
//               <Form.Group className="mb-1">
//                 <Form.Label>State</Form.Label>
//                 <Form.Select
//                   name="state"
//                   value={formData.state}
//                   onChange={handleStateChange}
//                   disabled={!formData.country}
//                   isInvalid={!!errors.state}
//                 >
//                   <option value="">Select State</option>
//                   {formData.country &&
//                     Object.keys(locationData[formData.country]).map((st) => (
//                       <option key={st} value={st}>
//                         {st}
//                       </option>
//                     ))}
//                 </Form.Select>
//                 <small className="text-danger">{errors.state}</small>
//               </Form.Group>
//             </Col>

//             <Col md={4}>
//               <Form.Group className="mb-1">
//                 <Form.Label>City</Form.Label>
//                 <Form.Select
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                   disabled={!formData.state}
//                   isInvalid={!!errors.city}
//                 >
//                   <option value="">Select City</option>
//                   {formData.country &&
//                     formData.state &&
//                     locationData[formData.country][formData.state].map(
//                       (city) => (
//                         <option key={city} value={city}>
//                           {city}
//                         </option>
//                       )
//                     )}
//                 </Form.Select>
//                 <small className="text-danger">{errors.city}</small>
//               </Form.Group>
//             </Col>
//           </Row>

//           {/* SKILLS AUTOSUGGEST */}
//           <Form.Group className="mb-1">
//             <Form.Label>Skills</Form.Label>
//             <Form.Control
//               placeholder="Type a skill"
//               value={skillsInput}
//               onChange={(e) => onSkillInput(e.target.value)}
//               onKeyDown={handleSkillKeyDown}
//             />

//             {/* Suggestions Dropdown */}
//             {skillSuggestions.length > 0 && (
//               <div
//                 className="border rounded p-2 mt-1 bg-white shadow-sm"
//                 style={{ position: "absolute", zIndex: 10 }}
//               >
//                 {skillSuggestions.map((skill) => (
//                   <div
//                     key={skill}
//                     onClick={() => selectSkillSuggestion(skill)}
//                     className="p-1 px-2 hover-bg"
//                     style={{ cursor: "pointer" }}
//                   >
//                     {skill}
//                   </div>
//                 ))}
//               </div>
//             )}

//             <div className="mt-2 d-flex flex-wrap">
//               {formData.skills.map((skill) => (
//                 <span
//                   key={skill}
//                   className="badge bg-primary me-2 mb-2 skill-tag"
//                   onClick={() => removeSkill(skill)}
//                   style={{ cursor: "pointer" }}
//                 >
//                   {skill} ✖
//                 </span>
//               ))}
//             </div>
//           </Form.Group>

//           {/* IMAGE UPLOAD */}
//           <Form.Group className="mb-1">
//             <Form.Label>Profile Image</Form.Label>
//             <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
//             {previewImage && (
//               <img
//                 src={previewImage}
//                 alt="Preview"
//                 className="mt-2 rounded"
//                 width={120}
//               />
//             )}
//           </Form.Group>

//           {/* BIO */}
//           <Form.Group className="mb-4">
//             <Form.Label>Bio</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={4}
//               name="bio"
//               value={formData.bio}
//               onChange={handleChange}
//               isInvalid={!!errors.bio}
//             />
//             <small className="text-danger">{errors.bio}</small>
//           </Form.Group>

//           {/* BUTTONS */}
//           <div className="d-flex justify-content-end gap-3">
//             <Button variant="secondary" onClick={clearForm}>
//               Clear
//             </Button>

//             <Button variant="primary" type="submit" disabled={loading}>
//               {loading ? (
//                 <Spinner animation="border" size="sm" />
//               ) : (
//                 "Save Tutor"
//               )}
//             </Button>
//           </div>
//         </Form>
//       </Card>

//       {/* TOAST */}
//       <ToastContainer className="position-fixed bottom-0 end-0 p-3">
//         <Toast
//           show={showToast}
//           onClose={() => setShowToast(false)}
//           delay={2000}
//           autohide
//           bg="success"
//         >
//           <Toast.Body className="text-white">
//             Tutor added successfully!
//           </Toast.Body>
//         </Toast>
//       </ToastContainer>

//       {/* STYLE */}
//       <style>{`
//         .hover-bg:hover {
//           background-color: #f1f1f1;
//         }
//         .skill-tag {
//           animation: fadeIn 0.2s ease-in-out;
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; transform: scale(0.8); }
//           to { opacity: 1; transform: scale(1); }
//         }
//       `}</style>
//     </>
//   );
// };

// export default AddTutorOrTeacher;



import React, { useState } from "react";
import "./TutorForm.css";
import type { TutorFormErrors, TutorFormValues } from "./types";
import { runAllValidations, validateDOB, validateEmail, validateExperience, validateFullName, validateGender, validatePhone, validateText, validateTime } from "./validate";

const TutorForm: React.FC = () => {
  const [photo, setPhoto] = useState<string>("https://i.pravatar.cc/200?img=12");

  const [values, setValues] = useState<TutorFormValues>({
    fullName: "",
    gender: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    qualification: "",
    experience: "",
    mode: "",
    salary: "",
    subjects: "",
    classes: "",
    availableDays: [],
    startTime: "",
    endTime: "",
    bio: "",
  });

  const [errors, setErrors] = useState<TutorFormErrors>({});

  const handleChange = (field: keyof TutorFormValues, value: any) => {
    setValues({ ...values, [field]: value });
  };
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPhoto(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

    const handleBlur = (field: keyof TutorFormValues) => {
    let error = "";

    switch (field) {
      case "fullName": error = validateFullName(values.fullName); break;
      case "gender": error = validateGender(values.gender); break;
      case "dob": error = validateDOB(values.dob); break;
      case "phone": error = validatePhone(values.phone); break;
      case "email": error = validateEmail(values.email); break;
      case "address": error = validateText(values.address, "Address"); break;
      case "city": error = validateText(values.city, "City"); break;
      case "state": error = validateText(values.state, "State"); break;
      case "qualification": error = validateText(values.qualification, "Qualification"); break;
      case "experience": error = validateExperience(values.experience); break;
      case "subjects": error = validateText(values.subjects, "Subjects"); break;
      case "startTime":
      case "endTime":
        error = validateTime(values.startTime, values.endTime);
        setErrors(prev => ({ ...prev, startTime: error, endTime: error }));
        return;
    }

    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const allErrors = runAllValidations(values);
    setErrors(allErrors);

    if (Object.values(allErrors).some((err) => err)) {
      alert("Please correct all errors.");
      return;
    }

    alert("Tutor details submitted successfully!");
  };

  return (
    <div className="tutor-container">
      <h2>Add Tutor / Teacher Details</h2>

      <form className="tutor-form-card" onSubmit={handleSubmit}>
        
        {/* Image Upload */}
        <div className="tutor-image-upload">
          <label htmlFor="photoInput">
            <img src={photo} alt="Preview" className="tutor-photo" />
          </label>
          <input 
            id="photoInput" 
            type="file" 
            accept="image/*" 
            onChange={handlePhotoChange} 
          />
          <p>Click to upload profile photo</p>
        </div>

        <div className="tutor-section-title">Personal Information</div>
        <div className="tutor-grid">
          <div className="tutor-group">
            <label>Full Name</label>
            <input type="text" value={values.fullName} onChange={(e) => handleChange("fullName", e.target.value)}
            onBlur={() => handleBlur("fullName")} placeholder="John Doe" />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </div>

          <div className="tutor-group">
            <label>Gender</label>
            <select value={values.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
            onBlur={() => handleBlur("gender")}>
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
             {errors.gender && <p className="error">{errors.gender}</p>}
          </div>

          <div className="tutor-group">
            <label>Date of Birth</label>
            <input type="date" value={values.dob}
            onChange={(e) => handleChange("dob", e.target.value)}
            onBlur={() => handleBlur("dob")} />
            {errors.dob && <p className="error">{errors.dob}</p>}
          </div>

          <div className="tutor-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="+1 234 567 890" value={values.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            onBlur={() => handleBlur("phone")} />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          <div className="tutor-group">
            <label>Email</label>
            <input type="email" placeholder="tutor@mail.com" value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div>

        <div className="tutor-section-title">Address Information</div>
        <div className="tutor-grid">
          <div className="tutor-group">
            <label>Address</label>
            <input type="text" placeholder="Street, Area" value={values.address}
            onChange={(e) => handleChange("address", e.target.value)}
            onBlur={() => handleBlur("address")} />
            {errors.address && <p className="error">{errors.address}</p>}
          </div>

          <div className="tutor-group">
            <label>City</label>
            <input type="text" value={values.city}
            onChange={(e) => handleChange("city", e.target.value)}
            onBlur={() => handleBlur("city")} />
            {errors.city && <p className="error">{errors.city}</p>}
          </div>

          <div className="tutor-group">
            <label>State</label>
            <input type="text" value={values.state}
            onChange={(e) => handleChange("state", e.target.value)}
            onBlur={() => handleBlur("state")} />
            {errors.state && <p className="error">{errors.state}</p>}
          </div>

          <div className="tutor-group">
            <label>Zip Code</label>
            <input type="text" value={values.zip}
            onChange={(e) => handleChange("zip", e.target.value)} />
          </div>
          {errors.zip && <p className="error">{errors.zip}</p>}
        </div>

        <div className="tutor-section-title">Professional Details</div>
        <div className="tutor-grid">
          <div className="tutor-group">
            <label>Highest Qualification</label>
            <input type="text" placeholder="M.Sc, PhD, B.Ed"  value={values.qualification}
            onChange={(e) => handleChange("qualification", e.target.value)}
            onBlur={() => handleBlur("qualification")} />
            {errors.qualification && <p className="error">{errors.qualification}</p>}
          </div>

          <div className="tutor-group">
            <label>Experience (Years)</label>
            <input type="number" min="0" value={values.experience}
            onChange={(e) => handleChange("experience", e.target.value)}
            onBlur={() => handleBlur("experience")} />
             {errors.experience && <p className="error">{errors.experience}</p>}
          </div>

          <div className="tutor-group">
            <label>Teaching Mode</label>
            <select value={values.mode}
            onChange={(e) => handleChange("mode", e.target.value)}>
              <option>Online</option>
              <option>Offline</option>
              <option>Both</option>
            </select>
          </div>

          <div className="tutor-group">
            <label>Expected Salary</label>
            <input type="text" placeholder="Per hour / month" value={values.salary}
            onChange={(e) => handleChange("salary", e.target.value)} />
          </div>
        </div>

        <div className="tutor-group">
          <label>Subjects</label>
          <input type="text" placeholder="Math, English, Science" value={values.subjects}
            onChange={(e) => handleChange("subjects", e.target.value)}
            onBlur={() => handleBlur("subjects")} />
            {errors.subjects && <p className="error">{errors.subjects}</p>}
        </div>

        <div className="tutor-group">
          <label>Classes / Grades</label>
          <input type="text" placeholder="Grade 1–12 / College" value={values.classes}
            onChange={(e) => handleChange("classes", e.target.value)} />
        </div>

        <div className="tutor-section-title">Availability</div>
        <div className="tutor-grid">
          <div className="tutor-group">
            <label>Available Days</label>
            <select multiple>
              <option>Monday</option><option>Tuesday</option><option>Wednesday</option>
              <option>Thursday</option><option>Friday</option><option>Saturday</option><option>Sunday</option>
            </select>
          </div>

          <div className="tutor-group">
            <label>Available Time</label>
            <div className="time-flex">
              <input type="time" value={values.startTime}
              onChange={(e) => handleChange("startTime", e.target.value)}
              onBlur={() => handleBlur("startTime")} /> <span>to</span> <input type="time" value={values.endTime}
              onChange={(e) => handleChange("endTime", e.target.value)}
              onBlur={() => handleBlur("endTime")} />
            </div>
            {(errors.startTime || errors.endTime) && (
            <p className="error">{errors.startTime}</p>
          )}
          </div>
        </div>

        <div className="tutor-group">
          <label>Description / Bio</label>
          <textarea rows={4} placeholder="Write about the teaching style..."  value={values.bio}
            onChange={(e) => handleChange("bio", e.target.value)}></textarea>
        </div>

        <button className="tutor-submit-btn" type="submit">
          Add Tutor
        </button>
      </form>
    </div>
  );
};

export default TutorForm;












