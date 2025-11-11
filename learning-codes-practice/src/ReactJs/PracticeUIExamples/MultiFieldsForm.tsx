import { useState } from "react";
import {
  Card,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Button,
} from "react-bootstrap";

const genderOptions = [
  { name: "Male", value: "Male" },
  { name: "Female", value: "Female" },
  { name: "Other", value: "Other" },
];

const MultiFieldsForm = () => {
  const [fieldNames, setFieldNames] = useState<any>({
    name: "",
    dob: "",
    gender: "",
    docProfNumber: "",
    multipleSelections: [],
  });

  const handleChange = (e:any) => {
    const { name, value, type, 
        // checked
     } = e.target;

    if (type === "checkbox") {
      setFieldNames((prev:any) => {
        const selections = prev.multipleSelections.includes(value)
          ? prev.multipleSelections.filter((item:any) => item !== value)
          : [...prev.multipleSelections, value];
        return { ...prev, multipleSelections: selections };
      });
    } else {
      setFieldNames((prev:any) => ({ ...prev, [name]: value }));
    }
  };

  const onSubmit = (e:any) => {
    e.preventDefault();
    console.log("Form Data:", fieldNames);
  };

  return (
    <Container className="mt-4">
      <Card style={{ width: "40rem" }}>
        <Card.Header>Multi Fields Form!</Card.Header>
        <Card.Body>
          <Form onSubmit={onSubmit}>
            <FormGroup className="mb-3">
              <FormLabel>Name</FormLabel>
              <FormControl
                type="text"
                name="name"
                value={fieldNames.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Date of Birth</FormLabel>
              <FormControl
                type="date"
                name="dob"
                value={fieldNames.dob}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Gender</FormLabel>
              <FormControl
                as="select"
                name="gender"
                value={fieldNames.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                {genderOptions.map((gender) => (
                  <option key={gender.value} value={gender.value}>
                    {gender.name}
                  </option>
                ))}
              </FormControl>
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Document/Professional Number</FormLabel>
              <div>
                <Form.Check
                  type="radio"
                  label="Option 1"
                  name="docProfNumber"
                  value="Option 1"
                  checked={fieldNames.docProfNumber === "Option 1"}
                  onChange={handleChange}
                />
                <Form.Check
                  type="radio"
                  label="Option 2"
                  name="docProfNumber"
                  value="Option 2"
                  checked={fieldNames.docProfNumber === "Option 2"}
                  onChange={handleChange}
                />
              </div>
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Check Out any three</FormLabel>
              <div>
                <Form.Check
                  type="checkbox"
                  label="Choice A"
                  value="Choice A"
                  checked={fieldNames.multipleSelections.includes("Choice A")}
                  onChange={handleChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Choice B"
                  value="Choice B"
                  checked={fieldNames.multipleSelections.includes("Choice B")}
                  onChange={handleChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Choice C"
                  value="Choice C"
                  checked={fieldNames.multipleSelections.includes("Choice C")}
                  onChange={handleChange}
                />
              </div>
            </FormGroup>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MultiFieldsForm;
