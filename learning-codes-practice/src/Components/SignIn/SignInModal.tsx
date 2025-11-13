import { useState } from 'react';
import { Button, Card, Form, Modal } from 'react-bootstrap';
import Loader from '../CommonLoader/Loader';

interface SignInField {
    email: string;
    password: string;
}

const SignInModal = ({ show, handleClose, handleShow, }: any) => {
    const [signInFields, setSignInFields] = useState<SignInField>({
        email: '',
        password: ''
    });
    const [errorMessage, setErrormessage] = useState<string>('')
    const [showLoader, setShowLoader] = useState<boolean>(false);

    const handleSignInFunction = (e: any) => {
        e.preventDefault()
        try {
            setShowLoader(true);
            if (!signInFields.email && !signInFields.password) {
                setErrormessage("Login Id/Email and Password is required.")
            } else {
                console.log("data", signInFields)
            }
            setShowLoader(false);
        } catch (error) {
            console.log("error", error)
            setShowLoader(false);
        }

    }

    const handleSignInChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignInFields((pre: any) => ({
            ...pre,
            [name]: value
        }));
    };

    return (
        <>

            <Button variant="primary" className="ms-3" onClick={handleShow}>Sign In</Button>
            <Modal
                show={show}
                size="lg"
                centered
                aria-labelledby="large-modal-title"
            >
                <Modal.Body>
                    <Loader loading={showLoader} />
                    <Card.Body>
                        <div className="text-center mb-2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                alt="Login Icon"
                                className="signin-icon mb-3"
                            />
                            <h3 className="fw-bold">Welcome Back</h3>
                            <p className="text-muted">Sign in to continue learning</p>
                        </div>

                        <Form>
                            <div className="text-center mt-3">
                                <span style={{ color: 'red' }}>
                                    {errorMessage}
                                </span>
                            </div>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Id/Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your id/email"
                                    name='email'
                                    value={signInFields.email}
                                    onChange={handleSignInChanges}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter your password"
                                    name='password'
                                    value={signInFields.password}
                                    onChange={handleSignInChanges}
                                />
                            </Form.Group>

                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <Form.Check
                                    type="checkbox"
                                    label="Remember me"
                                    className="text-muted"
                                />
                                <a href="#forgot" className="forgot-link">
                                    Forgot Password?
                                </a>
                            </div>

                            <div className="d-flex w-100 gap-2">
                                <Button
                                    variant='dark'
                                    type="button"
                                    className="btn btn-dark w-50"
                                    onClick={handleClose}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="btn btn-primary w-50"
                                    onClick={handleSignInFunction}
                                >
                                    Sign In
                                </Button>
                            </div>


                            <div className="text-center mt-3">
                                <span className="text-muted">
                                    Don’t have an account?{" "}
                                    <a href="#signup" className="signup-link">
                                        Sign Up
                                    </a>
                                </span>
                            </div>
                        </Form>
                    </Card.Body>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default SignInModal;
