export default function Custom404() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>We couldn't find the page you were looking for.</p>
            <button onClick={() => window.history.back()} style={{ marginTop: '20px' }}>
                Go Back
            </button>
        </div>
    );
}
