// src/components/SignupModal.tsx
import React, { useState } from "react";
import { Modal, Button, Accordion, Form, Row, Col } from "react-bootstrap";
import State from "../../MasterData/State.json"
import District from "../../MasterData/District.json"

interface SignupModalProps {
    show: boolean;
    handleClose: () => void;
    handleShow: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ show, handleClose, handleShow }) => {
    const [activeStep, setActiveStep] = useState<string | null>("0");
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
        termsAccepted: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleNext = (step: string) => setActiveStep(step);
    const handlePrev = (step: string) => setActiveStep(step);


    return (
        <>
            <Button variant="primary" className="ms-3" onClick={handleShow}>Sign Up</Button>
            <Modal show={show} onHide={handleClose} size="xl" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Accordion activeKey={activeStep} alwaysOpen>
                        {/* Step 1 */}
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Step 1: Basic Info</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Aadhar</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="aadhar"
                                                    value={formData.aadhar}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Mobile</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="mobile"
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Button variant="primary" onClick={() => handleNext("1")}>
                                        Next
                                    </Button>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* Step 2 */}
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Step 2: Family Info</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Father Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="fatherName"
                                                    value={formData.fatherName}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Mother Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="motherName"
                                                    value={formData.motherName}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Guardian Mobile</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="guardianMobile"
                                                    value={formData.guardianMobile}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Guardian Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="guardianEmail"
                                                    value={formData.guardianEmail}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Button variant="secondary" className="me-2" onClick={() => handlePrev("0")}>
                                        Previous
                                    </Button>
                                    <Button variant="primary" onClick={() => handleNext("2")}>
                                        Next
                                    </Button>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* Step 3 */}
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Step 3: Address</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>State</Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    name="state"
                                                    value={formData.state}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select State</option>
                                                    {State && State.state.map((state) => (
                                                        <option value={state.value}>{state.name}</option>
                                                    ))}
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>District</Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    name="district"
                                                    value={formData.district}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select District</option>
                                                    {District && District.districts.map((district) => (
                                                        <option value={district.value}>{district.name}</option>
                                                    ))}
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Block</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="block"
                                                    value={formData.block}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Panchayat</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="panchayat"
                                                    value={formData.panchayat}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Village</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="village"
                                                    value={formData.village}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Ward</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="ward"
                                                    value={formData.ward}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>House No</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="houseNo"
                                                    value={formData.houseNo}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Landmark</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="landmark"
                                                    value={formData.landmark}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Area</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="area"
                                                    value={formData.area}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Pincode</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="pincode"
                                                    value={formData.pincode}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Button variant="secondary" className="me-2" onClick={() => handlePrev("1")}>
                                        Previous
                                    </Button>
                                    <Button variant="primary" onClick={() => handleNext("3")}>
                                        Next
                                    </Button>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* Step 4 */}
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Step 4: Security/Password</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Confirm Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    name="confirmPassword"
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Button variant="secondary" className="me-2" onClick={() => handlePrev("2")}>
                                        Previous
                                    </Button>
                                    <Button variant="primary" onClick={() => handleNext("4")}>
                                        Next
                                    </Button>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>


                        {/* Step 5 - Preview */}
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Step 5: Preview</Accordion.Header>
                            <Accordion.Body>
                                <div className="preview-container">
                                    {Object.entries(formData).reduce((rows: any[], [key, value], idx) => {
                                        // Every 2 items create a new row
                                        if (idx % 2 === 0) rows.push([]);
                                        rows[rows.length - 1].push([key, value]);
                                        return rows;
                                    }, []).map((pair, rowIdx) => (
                                        <Row className="mb-3" key={rowIdx}>
                                            {pair.map(([key, value]: any) => (
                                                <Col md={6} key={key}>
                                                    <label className="text-muted">
                                                        {key
                                                            .replace(/([A-Z])/g, " $1")
                                                            .replace(/^./, (str: any) => str.toUpperCase())}
                                                    </label>
                                                    <div>
                                                        <strong>
                                                            {typeof value === "boolean"
                                                                ? value
                                                                    ? "Accepted"
                                                                    : "Not Accepted"
                                                                : (value ? value : "---").toString()}
                                                        </strong>

                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    ))}
                                </div>

                                <div className="mt-4">
                                    <Form.Check
                                        type="checkbox"
                                        id="termsAndConditions"
                                        name="termsAccepted"
                                        checked={formData.termsAccepted}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                termsAccepted: e.target.checked,
                                            })
                                        }
                                        label={
                                            <>
                                                <strong> I confirm that the information I have provided is correct and I
                                                    accept the{" "}
                                                    terms and conditions.
                                                </strong>
                                            </>
                                        }
                                    />
                                </div>

                                <div className="mt-3">
                                    <Button
                                        variant="secondary"
                                        className="me-2"
                                        onClick={() => handlePrev("3")}
                                    >
                                        Previous
                                    </Button>
                                    <Button
                                        variant="success"
                                        onClick={() => alert("Form Submitted!")}
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>


                    </Accordion>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default SignupModal;
