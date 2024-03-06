import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SingUpForm from "../../components/client/login/SingUpForm";
import useAuth from "../../hooks/useAuth";

const Register = () => {
    const { isCorrect, useRegister, errorMSG } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isCorrect) {
            navigate('/home');
        }
    }, [isCorrect, navigate]);

    return (
        <div>
            <h1>Register</h1>
            <SingUpForm send_data={(data => useRegister(data))} errorMSG={errorMSG} />
        </div>
    );
};

export default Register;