import React, { useState } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Card,
  Toast,
  ToastContainer,
  Spinner,
} from "react-bootstrap";

// DUMMY COUNTRY - STATE - CITY DATA
const locationData: Record<string, Record<string, string[]>> = {
  India: {
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Karnataka: ["Bengaluru", "Mysore"],
    Delhi: ["New Delhi"],
  },
  USA: {
    California: ["Los Angeles", "San Diego"],
    Texas: ["Houston", "Dallas"],
  },
};

// SKILL SUGGESTIONS
const allSkillSuggestions = [
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "HTML",
  "CSS",
  "TypeScript",
  "Python",
  "Java",
  "C++",
  "Data Structures",
  "Bootstrap",
  "Tailwind",
];

interface TutorFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  experience: string;
  skills: string[];
  bio: string;
  profileImage?: File | null;

  country: string;
  state: string;
  city: string;
}

const AddTutorOrTeacher: React.FC = () => {
  const [formData, setFormData] = useState<TutorFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    experience: "",
    skills: [],
    bio: "",
    profileImage: null,
    country: "",
    state: "",
    city: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof TutorFormData, string>>
  >({});
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  // Skill input
  const [skillsInput, setSkillsInput] = useState("");
  const [skillSuggestions, setSkillSuggestions] = useState<string[]>([]);

  // handle text / textarea change
  const handleChange = (
    e: any
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    validateField(name as keyof TutorFormData, value);
  };

  // handle country change
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = e.target.value;

    setFormData((prev) => ({
      ...prev,
      country,
      state: "",
      city: "",
    }));
  };

  // handle state change
  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const state = e.target.value;

    setFormData((prev) => ({
      ...prev,
      state,
      city: "",
    }));
  };

  // skill input change
  const onSkillInput = (value: string) => {
    setSkillsInput(value);

    if (!value.trim()) {
      setSkillSuggestions([]);
      return;
    }

    const filtered = allSkillSuggestions.filter((sk) =>
      sk.toLowerCase().includes(value.toLowerCase())
    );

    setSkillSuggestions(filtered);
  };

  // select suggestion
  const selectSkillSuggestion = (skill: string) => {
    addSkill(skill);
    setSkillsInput("");
    setSkillSuggestions([]);
  };

  // add skill
  const handleSkillKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && skillsInput.trim()) {
      e.preventDefault();
      addSkill(skillsInput.trim());
    }
  };

  const addSkill = (skill: string) => {
    if (!formData.skills.includes(skill)) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skill],
      }));
    }
    setSkillsInput("");
  };

  const removeSkill = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }));
  };

  // file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, profileImage: file }));

    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // validation
  const validateField = (
    name: keyof TutorFormData,
    value: string | string[]
  ) => {
    let msg = "";

    const requiredFields: (keyof TutorFormData)[] = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "subject",
      "experience",
      "bio",
      "country",
      "state",
      "city",
    ];

    if (requiredFields.includes(name) && !value) {
      msg = "This field is required";
    }

    if (name === "email" && typeof value === "string") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) msg = "Invalid email format";
    }

    if (name === "phone" && typeof value === "string") {
      const phoneRegex = /^[0-9]{10}$/;
      if (value && !phoneRegex.test(value)) msg = "Phone must be 10 digits";
    }

    if (name === "experience" && typeof value === "string") {
      if (Number(value) < 1) msg = "Experience must be at least 1 year";
    }

    setErrors((prev) => ({ ...prev, [name]: msg }));
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof TutorFormData, string>> = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "profileImage" && !value) {
        newErrors[key as keyof TutorFormData] = "This field is required";
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowToast(true);
      console.log("Final Tutor Data:", formData);
    }, 1500);
  };

  // clear form
  const clearForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      experience: "",
      skills: [],
      bio: "",
      profileImage: null,
      country: "",
      state: "",
      city: "",
    });
    setPreviewImage(null);
    setErrors({});
  };

  return (
    <>
      <Card className="shadow p-4 mt-4 mb-4" style={{ marginLeft: "25px",marginRight:'25px', paddingTop: "50px", minHeight: "100vh" }}>
        <h3 className="mb-4 text-primary fw-semibold">Add New Tutor</h3>

        <Form onSubmit={handleSubmit}>
          {/* NAME */}
          <Row>
            <Col md={6}>
              <Form.Group className="mb-1">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  isInvalid={!!errors.firstName}
                />
                <small className="text-danger">{errors.firstName}</small>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-1">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  isInvalid={!!errors.lastName}
                />
                <small className="text-danger">{errors.lastName}</small>
              </Form.Group>
            </Col>
          </Row>

          {/* CONTACT */}
          <Row>
            <Col md={6}>
              <Form.Group className="mb-1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <small className="text-danger">{errors.email}</small>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-1">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  isInvalid={!!errors.phone}
                />
                <small className="text-danger">{errors.phone}</small>
              </Form.Group>
            </Col>
          </Row>

          {/* SUBJECT + EXPERIENCE */}
          <Row>
            <Col md={6}>
              <Form.Group className="mb-1">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  isInvalid={!!errors.subject}
                />
                <small className="text-danger">{errors.subject}</small>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-1">
                <Form.Label>Experience (years)</Form.Label>
                <Form.Control
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  isInvalid={!!errors.experience}
                />
                <small className="text-danger">{errors.experience}</small>
              </Form.Group>
            </Col>
          </Row>

          {/* COUNTRY - STATE - CITY */}
          <Row>
            <Col md={4}>
              <Form.Group className="mb-1">
                <Form.Label>Country</Form.Label>
                <Form.Select
                  name="country"
                  value={formData.country}
                  onChange={handleCountryChange}
                  isInvalid={!!errors.country}
                >
                  <option value="">Select Country</option>
                  {Object.keys(locationData).map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </Form.Select>
                <small className="text-danger">{errors.country}</small>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-1">
                <Form.Label>State</Form.Label>
                <Form.Select
                  name="state"
                  value={formData.state}
                  onChange={handleStateChange}
                  disabled={!formData.country}
                  isInvalid={!!errors.state}
                >
                  <option value="">Select State</option>
                  {formData.country &&
                    Object.keys(locationData[formData.country]).map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                </Form.Select>
                <small className="text-danger">{errors.state}</small>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-1">
                <Form.Label>City</Form.Label>
                <Form.Select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  disabled={!formData.state}
                  isInvalid={!!errors.city}
                >
                  <option value="">Select City</option>
                  {formData.country &&
                    formData.state &&
                    locationData[formData.country][formData.state].map(
                      (city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      )
                    )}
                </Form.Select>
                <small className="text-danger">{errors.city}</small>
              </Form.Group>
            </Col>
          </Row>

          {/* SKILLS AUTOSUGGEST */}
          <Form.Group className="mb-1">
            <Form.Label>Skills</Form.Label>
            <Form.Control
              placeholder="Type a skill"
              value={skillsInput}
              onChange={(e) => onSkillInput(e.target.value)}
              onKeyDown={handleSkillKeyDown}
            />

            {/* Suggestions Dropdown */}
            {skillSuggestions.length > 0 && (
              <div
                className="border rounded p-2 mt-1 bg-white shadow-sm"
                style={{ position: "absolute", zIndex: 10 }}
              >
                {skillSuggestions.map((skill) => (
                  <div
                    key={skill}
                    onClick={() => selectSkillSuggestion(skill)}
                    className="p-1 px-2 hover-bg"
                    style={{ cursor: "pointer" }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            )}

            <div className="mt-2 d-flex flex-wrap">
              {formData.skills.map((skill) => (
                <span
                  key={skill}
                  className="badge bg-primary me-2 mb-2 skill-tag"
                  onClick={() => removeSkill(skill)}
                  style={{ cursor: "pointer" }}
                >
                  {skill} ✖
                </span>
              ))}
            </div>
          </Form.Group>

          {/* IMAGE UPLOAD */}
          <Form.Group className="mb-1">
            <Form.Label>Profile Image</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="mt-2 rounded"
                width={120}
              />
            )}
          </Form.Group>

          {/* BIO */}
          <Form.Group className="mb-4">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              isInvalid={!!errors.bio}
            />
            <small className="text-danger">{errors.bio}</small>
          </Form.Group>

          {/* BUTTONS */}
          <div className="d-flex justify-content-end gap-3">
            <Button variant="secondary" onClick={clearForm}>
              Clear
            </Button>

            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                "Save Tutor"
              )}
            </Button>
          </div>
        </Form>
      </Card>

      {/* TOAST */}
      <ToastContainer className="position-fixed bottom-0 end-0 p-3">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={2000}
          autohide
          bg="success"
        >
          <Toast.Body className="text-white">
            Tutor added successfully!
          </Toast.Body>
        </Toast>
      </ToastContainer>

      {/* STYLE */}
      <style>{`
        .hover-bg:hover {
          background-color: #f1f1f1;
        }
        .skill-tag {
          animation: fadeIn 0.2s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
};

export default AddTutorOrTeacher;
