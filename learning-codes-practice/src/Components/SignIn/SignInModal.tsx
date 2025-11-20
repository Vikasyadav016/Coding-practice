import { Button, Card, Form, Modal } from "react-bootstrap";
import useSignInForm from "./signInForm";
import Loader from "../CommonLoader/Loader";
import PopupMessage from "../MessagePopUp/DynamicPopUpMessage";
import "./SignInPage.css"
import { useDispatch, useSelector } from "react-redux";
import { CloseSignInModal, ShowSignInModal } from "../../Redux/Actions";

const SignInModal = () => {
const dispath = useDispatch()

    const show  = useSelector((state:any) => state.signInModalOpen);

    const { signInFields, showLoader, popup, handleSignInFunction, handleSignInChanges, setPopup } = useSignInForm()

    return (
        <>
            <Button variant="primary" className="ms-3" onClick={() => dispath(ShowSignInModal())}>Sign In</Button>
            <Modal
                show={show}
                size="lg"
                centered
                aria-labelledby="large-modal-title"
            >
                <Modal.Body>
                    <Loader loading={showLoader} />
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
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Id/Email Address<span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your id/email"
                                    name='email'
                                    value={signInFields.email}
                                    onChange={handleSignInChanges}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password<span className="text-danger">*</span></Form.Label>
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
                                    onClick={()=>dispath(CloseSignInModal())}
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
