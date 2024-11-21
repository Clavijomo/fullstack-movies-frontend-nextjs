import { useLoginUser } from "../hooks/login/useLoginUser";
import '../styles/form/formstyles.css';

interface Props {
    endpoint: string
}

function FormUser({ endpoint }: Props) {
    const {
        error,
        user,
        handleChange,
        handleSubmit,
    } = useLoginUser({ endpoint });

    const isSignUp = endpoint.includes('register');

    return (
        <div className="container-register-user">
            <p>{!isSignUp && "We love having you back"}</p>
            {error && <div className='error-message'>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="section-registry">
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={user.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={user?.password}
                            onChange={(e) => handleChange('password', e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <button className="button-input" type="submit">Continue</button>
                    </div>
                </div>
            </form>
            <p>For any questions, reach out to support@Quickbetdmovies.com</p>
        </div>
    )
}

export default FormUser;