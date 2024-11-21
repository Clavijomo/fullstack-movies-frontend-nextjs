"use client"
import '../styles/login/login.css';
import { useLoginUser } from "../hooks/login/useLoginUser"

const Login = () => {
    const {
        error,
        user,
        handleChange,
        handleSubmit
    } = useLoginUser();

    return (
        <div className='container-form'>
            <div>

            </div>
            <div>
                <div className='container-info-login'>
                    <div className='container-info-description'>
                        <h1>Welcome to Quickbet Movies!</h1>
                        <p>🎬 Ready to unlock a universe of cinematic delights? Sign up now and start your journey with us!</p>
                        <img src="../" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login