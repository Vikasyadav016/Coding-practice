import React, { useState } from "react";
import Step1_Info from "./Step1_Info";
import Step2_Category from "./Step2_Category";
import Step3_Pricing from "./Step3_Pricing";
import Step4_Thumbnail from "./Step4_Thumbnail";
import Step5_Curriculum from "./Step5_Curriculum";
import Step6_Preview from "./Step6_Preview";
import { Button, ProgressBar } from "react-bootstrap";

const CourseWizard = () => {
  const [step, setStep] = useState(1);
  const [courseData, setCourseData] = useState<any>({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const steps = [
    <Step1_Info data={courseData} setData={setCourseData} />,
    <Step2_Category data={courseData} setData={setCourseData} />,
    <Step3_Pricing data={courseData} setData={setCourseData} />,
    <Step4_Thumbnail data={courseData} setData={setCourseData} />,
    <Step5_Curriculum data={courseData} setData={setCourseData} />,
    <Step6_Preview data={courseData} />,
  ];

  return (
    <div className="p-4">
      <h3>Create Course Wizard</h3>

      <ProgressBar now={(step / 6) * 100} className="mb-4" />

      {steps[step - 1]}

      <div className="d-flex justify-content-between mt-4">
        {step > 1 && (
          <Button variant="secondary" onClick={prevStep}>
            Back
          </Button>
        )}

        {step < 6 ? (
          <Button onClick={nextStep}>Next</Button>
        ) : (
          <Button variant="success">Publish Course</Button>
        )}
      </div>
    </div>
  );
};

export default CourseWizard;
