import Image from "next/image";
import { useState } from "react";
import FormUser from "../components/FormUser";
import { useAuth } from "../context/AuthContext";
import LoginIcon from '../resources/login/02.png';
import SignUpIcon from '../resources/signUpIcon.png';
import '../styles/login/login.css';

const LOGIN = `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_LOGIN_ENDPOINT}`
const SIGN_UP = `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.NEXT_PUBLIC_SIGNUP_ENDPOINT}`

export const ModalFormUser = () => {
    const [redirect, setRedirect] = useState<boolean>(true);
    const [endpoint, setEndpoint] = useState<string>(LOGIN);
    const [activeButton, setActiveButton] = useState<string | null>('login');

    const { closeModal } = useAuth();

    const handleRedirect = (formType: 'login' | 'signUp') => {
        setRedirect(true);

        if (formType === 'login') {
            setActiveButton('login');
            return setEndpoint(LOGIN);
        }

        setActiveButton('signUp');
        setEndpoint(SIGN_UP);
    }

    return (
        <div className="overlay-form">
            <div className='container-form container-form-show'>
                <div className='container-questions'>
                    <div className={'container-buttons-register'}>
                        <button className={activeButton === 'signUp' ? 'active' : ''} onClick={() => handleRedirect('signUp')}>
                            Sign Up
                        </button>
                        <button className={activeButton === 'login' ? 'active' : ''} onClick={() => handleRedirect('login')}>
                            Log in
                        </button>
                    </div>
                    <div className='container-register-user'>
                        {redirect &&
                            <FormUser
                                onSuccess={() => closeModal()}
                                endpoint={endpoint}
                            />
                        }
                    </div>
                </div>
                <div className='container-info-login'>
                    <div className='container-info-description'>
                        <h1>
                            {endpoint === LOGIN ?
                                'Welcome back to Quickbet Movies!'
                                :
                                'Welcome to Quickbet Movies!'
                            }
                        </h1>
                        <p>
                            {endpoint === LOGIN ?
                                "🍿 Ready to dive into the world of unlimited entertainment? Enter your credentials and let the cinematic adventure begin!"
                                :
                                "🎬 Ready to unlock a universe of cinematic delights? Sign up now and start your journey with us!"
                            }
                        </p>
                        <Image
                            width={500}
                            height={500}
                            src={endpoint === SIGN_UP ? LoginIcon : SignUpIcon}
                            alt='Login Icon'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}