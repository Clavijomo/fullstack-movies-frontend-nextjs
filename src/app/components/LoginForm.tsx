function LoginForm() {
    return (
        <div>

            <h1>Login</h1>
            {error && <div className='error-message'>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={user.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={user?.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm