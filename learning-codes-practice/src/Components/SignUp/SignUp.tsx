import React from "react";
import { Modal, Button, Accordion, Form, Row, Col } from "react-bootstrap";
import State from "../../MasterData/State.json"
import District from "../../MasterData/District.json"
import useSignUpForm from "./signUpFormValidations";
import PopupMessage from "../MessagePopUp/DynamicPopUpMessage";

interface SignupModalProps {
    show: boolean;
    handleClose: () => void;
    handleShow: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ show, handleClose, handleShow }) => {

    const {
        activeStep,
        errors,
        formData,
        setFormData,
        handleChange,
        handleNext,
        handlePrev,
        handleFormFinalSubmit,
        popup,
        setPopup
    } = useSignUpForm()


    return (
        <>
            <Button variant="primary" className="ms-3" onClick={handleShow}>Sign Up</Button>
            <Modal show={show} size="xl" centered>
                <Modal.Header className="d-flex justify-content-between align-items-center">
                    <Modal.Title>Registration Form</Modal.Title>
                    <Button variant="dark" onClick={handleClose}>X</Button>
                </Modal.Header>
                <PopupMessage
                    visible={popup.visible}
                    message={popup.message}
                    type={popup.type}
                    width="300px"
                    borderRadius="10px"
                    position="top-right"
                    onClose={() => setPopup({ ...popup, visible: false })}
                    duration={2000}
                />
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
                                                <Form.Label>Name<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.name}
                                                />
                                                {errors.name && <div className="text-danger small mt-1">{errors.name}</div>}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Email<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.email}
                                                />
                                                {errors.email && <div className="text-danger small mt-1">{errors.email}</div>}
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Aadhar<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="aadhar"
                                                    value={formData.aadhar}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.aadhar}
                                                />
                                                {errors.aadhar && <div className="text-danger small mt-1">{errors.aadhar}</div>}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Mobile<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="mobile"
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.mobile}
                                                />
                                                {errors.mobile && <div className="text-danger small mt-1">{errors.mobile}</div>}
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
                                                <Form.Label>Father Name<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="fatherName"
                                                    value={formData.fatherName}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.fatherName}
                                                />
                                                {errors.fatherName && <div className="text-danger small mt-1">{errors.fatherName}</div>}
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
                                                <Form.Label>Guardian Mobile<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="guardianMobile"
                                                    value={formData.guardianMobile}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.guardianMobile}
                                                />
                                                {errors.guardianMobile && <div className="text-danger small mt-1">{errors.guardianMobile}</div>}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Guardian Email<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="guardianEmail"
                                                    value={formData.guardianEmail}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.guardianEmail}
                                                />
                                                {errors.guardianEmail && <div className="text-danger small mt-1">{errors.guardianEmail}</div>}
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
                                                <Form.Label>State<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    name="state"
                                                    value={formData.state}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.state}
                                                >
                                                    <option value="">Select State</option>
                                                    {State && State.state.map((state) => (
                                                        <option value={state.value}>{state.name}</option>
                                                    ))}
                                                </Form.Control>
                                                {errors.state && <div className="text-danger small mt-1">{errors.state}</div>}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>District<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    name="district"
                                                    value={formData.district}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.district}
                                                >
                                                    <option value="">Select District</option>
                                                    {District && District.districts.map((district) => (
                                                        <option value={district.value}>{district.name}</option>
                                                    ))}
                                                </Form.Control>
                                                {errors.district && <div className="text-danger small mt-1">{errors.district}</div>}
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Block<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="block"
                                                    value={formData.block}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.block}
                                                />
                                                {errors.block && <div className="text-danger small mt-1">{errors.block}</div>}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Panchayat<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="panchayat"
                                                    value={formData.panchayat}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.panchayat}
                                                />
                                                {errors.panchayat && <div className="text-danger small mt-1">{errors.panchayat}</div>}
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Village<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="village"
                                                    value={formData.village}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.village}
                                                />
                                                {errors.village && <div className="text-danger small mt-1">{errors.village}</div>}
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
                                                <Form.Label>Pincode<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="pincode"
                                                    value={formData.pincode}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.pincode}
                                                />
                                                {errors.pincode && <div className="text-danger small mt-1">{errors.pincode}</div>}
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
                                                <Form.Label>Password<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.password}
                                                />
                                                {errors.password && <div className="text-danger small mt-1">{errors.password}</div>}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Confirm Password<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    name="confirmPassword"
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.confirmPassword}
                                                />
                                                {errors.confirmPassword && <div className="text-danger small mt-1">{errors.confirmPassword}</div>}
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
                                        isInvalid={!!errors.termsAccepted}
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
                                        onClick={handleFormFinalSubmit}
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
