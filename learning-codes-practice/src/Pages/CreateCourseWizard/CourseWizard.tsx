import { useState } from "react";
import { ProgressBar, Card } from "react-bootstrap";
import Step1_BasicInfo from "./Setp1_BasicInfo";
import Step2_Objectives from "./Step2_Objectives";
import Step3_Content from "./Step3_Content";
import Step4_Pricing from "./Step4_Pricing";
import PreviewSidebar from "./PreviewSidebar";


const steps = [
  "Basic Info",
  "Objectives",
  "Content",
  "Pricing",
];

const CourseWizard = () => {
  const [step, setStep] = useState(0);

  const [course, setCourse] = useState<any>({
    title: "",
    category: "",
    level: "",
    description: "",
    thumbnail: "",
    outcomes: [],
    requirements: [],
    chapters: [],
    price: "",
    discount: "",
    status: "Draft",
  });

  const next = () => {
    if (step < 3) setStep(step + 1);
  };

  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = () => {
    alert("Course Created Successfully 🎉");
    console.log(course);
  };

  return (
    <div className="d-flex p-3">
      {/* LEFT WIZARD CONTENT */}
      <div className="flex-grow-1 pe-3">

        <Card className="p-3 mb-3">
          <h4 className="fw-bold">Create Course Wizard</h4>
          <small className="text-muted">Step {step + 1} of 4 — {steps[step]}</small>

          <ProgressBar 
            striped 
            now={(step + 1) * 25} 
            className="mt-3" 
          />
        </Card>

        <Card className="p-4">
          {step === 0 && (
            <Step1_BasicInfo course={course} setCourse={setCourse} next={next} />
          )}
          {step === 1 && (
            <Step2_Objectives course={course} setCourse={setCourse} next={next} prev={prev} />
          )}
          {step === 2 && (
            <Step3_Content course={course} setCourse={setCourse} next={next} prev={prev} />
          )}
          {step === 3 && (
            <Step4_Pricing course={course} setCourse={setCourse} prev={prev} submit={handleSubmit} />
          )}
        </Card>
      </div>

      {/* RIGHT PREVIEW SIDEBAR */}
      <PreviewSidebar course={course} />
    </div>
  );
};

export default CourseWizard;
