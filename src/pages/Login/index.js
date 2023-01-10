import {Form, Spinner} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import constants from "../../constants";
import React from "react";
import {onChangeText} from "../../utils/eventHandlers";
import {AlertMessage, AuthErrorMessage} from "../../components";
import validator from "validator/es";
import "./style.css"
import useFetchMutation from "../../hooks/useFetchMutation";
import {login} from "../../services/authApi";
import {getToken} from "../../utils/token";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [isEmailEmpty, setIsEmailEmpty] = React.useState(false);
    const [isPasswordEmpty, setIsPasswordEmpty] = React.useState(false);
    const [isEmailPasswordError, setIsEmailPasswordError] = React.useState(false);

    const [isEmailInvalid, setIsEmailInvalid] = React.useState(false);
    const [isPasswordInvalid, setIsPasswordInvalid] = React.useState(false);

    const [isLoading, setIsLoading] = React.useState(false);

    const {fetchMutation: onLogin} = useFetchMutation(
        login,
        () => navigate(constants.ROUTES.DASHBOARD)
    )
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setIsEmailEmpty(false);
        setIsPasswordEmpty(false);
        if (email === "" || password === "") {
            if (email === "") {
                setIsEmailEmpty(true);
                setIsEmailPasswordError(false);
            }
            if (password === "") {
                setIsPasswordEmpty(true);
                setIsEmailPasswordError(false);
            }
        } else {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                if (validator.isEmail(email)) {
                    setIsEmailInvalid(false)
                    onLogin({email, password});
                    // if (email.toLowerCase() === constants.DATA.EMAIL && password === constants.DATA.PASSWORD) {
                    // isLoggedin(true);
                    // localStorage.setItem("email", email)
                    // onLogin({email, password});
                    // navigate(constants.ROUTES.DASHBOARD);
                    // } else {
                    //     setIsPasswordEmpty(false);
                    //     setIsEmailEmpty(false);
                    //     setIsEmailPasswordError(true);
                    // }
                } else {
                    setIsEmailInvalid(true)
                }

                if (password.length <= 6) {
                    setIsPasswordInvalid(true)
                } else {
                    setIsPasswordInvalid(false)
                }
            }, 2000)

        }
    }
    return (
        <>
            <section className="vh-100 bg-login">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="shadow" style={{borderRadius: "1rem"}}>
                                <div className="card-body p-5 card">
                                    <div className="mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase text-center">Login</h2>
                                        <p className="text-black-50 text-center">Please enter your login and
                                            password!</p>
                                        <div className="text-center mt-3">{isEmailPasswordError &&
                                            <AuthErrorMessage/>}</div>
                                        <Form onSubmit={onSubmitHandler} className="mt-5">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <div className="form-outline form-white">
                                                    <Form.Control onChange={onChangeText(setEmail)} type="text"
                                                                  placeholder="Enter email"
                                                                  disabled={isLoading}
                                                                  style={{cursor: isLoading && "not-allowed"}}/>
                                                </div>
                                                {isEmailEmpty && <AlertMessage message="please provide a email"/>}
                                                {isEmailInvalid && <AlertMessage message="invalid email format"/>}
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control onChange={onChangeText(setPassword)} type="password"
                                                              placeholder="Password"
                                                              disabled={isLoading}
                                                              style={{cursor: isLoading && "not-allowed"}}/>
                                                {isPasswordEmpty && <AlertMessage message="please provide a password"/>}
                                                {isPasswordInvalid && <AlertMessage message="6 min length character"/>}
                                            </Form.Group>
                                            <div className="text-center mt-5">
                                                <button type="submit" className="btn btn-outline-success btn-lg px-5"
                                                        disabled={isLoading}
                                                        style={{cursor: isLoading && "not-allowed"}}>
                                                    {isLoading ? (<>
                                                            <Spinner
                                                                as="span"
                                                                animation="grow"
                                                                size="sm"
                                                                role="status"
                                                                aria-hidden="true"
                                                            />
                                                        </>
                                                    ) : "Sign In"}
                                                </button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;