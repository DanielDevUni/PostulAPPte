import { useState, useRef } from 'react';
import { loginUser } from '../../api/user';
import { Hurricane } from 'react-bootstrap-icons';
import ReCAPTCHA from "react-google-recaptcha";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState("");
    const recaptchaRef = useRef();

    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!recaptchaToken) {
            alert('Por favor completa el reCAPTCHA');
            setLoading(false);
            return;
        }

        try {
            const response = await loginUser(email, password, recaptchaToken);
            localStorage.setItem('token', response.data.access);
            alert('Login exitoso!');
            window.location.href = '/';
        } catch (error) {
            console.error('Error:', error);
            alert('Error: ' + (error.response?.data?.detail || 'No se pudo conectar'));
            if (recaptchaRef.current) recaptchaRef.current.reset();
            setRecaptchaToken(""); 
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-bg">
            <div className="auth-container">
                <div className="card card-form p-4 shadow">
                    <div className="card-header">
                        <div className="d-flex align-items-center">
                            <div
                                className="rounded-circle bg-custom d-flex align-items-center justify-content-center me-2"
                                style={{ width: '40px', height: '40px' }}
                            >
                                <Hurricane size={24} />
                            </div>
                            <h3 className="mb-0">Postulappte</h3>
                        </div>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="mb-1">
                                <label className="form-label">Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-2">
                                <label className="form-label">Contraseña:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-2 d-flex justify-content-center">
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey="6LetGXsrAAAAANBrLdW5YiKZvgq3khxb6t-M42rS"
                                    onChange={handleRecaptchaChange}
                                />
                            </div>
                            
                            <button
                                type="submit"
                                className="btn btn-custom w-100"
                                disabled={loading}
                            >
                                {loading ? 'Cargando...' : 'Iniciar Sesión'}
                            </button>
                            <a href="/register" className='btn btn-outline-custom w-100 mt-2'>
                                ¿No tienes cuenta? Regístrate
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;