import { useRef, useState } from "react";
import { registerUser } from "../../api/user";
import { Hurricane } from "react-bootstrap-icons";
import ReCAPTCHA from "react-google-recaptcha";

function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    document_type: "",
    document: "",
    gender: "",
    role: "",
    email: "",
    password: "",
    repassword: "",
    address: "",
    birth_date: "",
    cellphone_number: "",
  });
  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const recaptchaRef = useRef();

  const handleRecaptchaChange = (token) => setRecaptchaToken(token);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!recaptchaToken) {
      alert("Por favor completa el reCAPTCHA");
      setLoading(false);
      return;
    }
    try {
      const data = {
        email: formData.email,
        password: formData.password,
        repassword: formData.repassword,
        name: formData.name,
        lastname: formData.lastname,
        document: formData.document,
        document_type: formData.document_type,
        gender: formData.gender,
        role: formData.role,
        address: formData.address,
        birth_date: formData.birth_date,
        cellphone_number: formData.cellphone_number,
      };
      console.log("DATA A ENVIAR:", data);
      await registerUser(data);
      alert("Registro exitoso!");
      window.location.href = "/";
    } catch (error) {
      alert("Error: " + (error.response?.data?.detail || "No se pudo conectar"));
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
                style={{ width: "40px", height: "40px" }}
              >
                <Hurricane size={24} />
              </div>
              <h3 className="mb-0">Postulappte</h3>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={handleRegister}>
              {step === 1 && (
                <div className="row">
                  <div className="col-md-12 mb-1">
                    <label>Nombre:</label>
                    <input name="name" value={formData.name} onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="col-md-12 mb-1">
                    <label>Apellido:</label>
                    <input name="lastname" value={formData.lastname} onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="col-md-6 mb-1">
                    <label>Tipo de documento:</label>
                    <select name="document_type" value={formData.document_type} onChange={handleChange} className="form-control" required>
                      <option value="">Selecciona...</option>
                      <option value="1">Cédula de Ciudadanía (CC)</option>
                      <option value="2">Pasaporte</option>
                      <option value="3">Licencia de conducción</option>
                      <option value="4">Cédula de Extranjería (CE)</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-1">
                    <label>Documento:</label>
                    <input name="document" value={formData.document} onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="col-md-12 mb-2">
                    <label>Género:</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} className="form-control" required>
                      <option value="">Selecciona...</option>
                      <option value="1">Masculino</option>
                      <option value="2">Femenino</option>
                      <option value="3">Otro</option>
                    </select>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="row">
                  
                  <div className="col-md-12 mb-1">
                    <label>Rol:</label>
                    <select name="role" value={formData.role} onChange={handleChange} className="form-control" required>
                      <option value="">Selecciona...</option>
                      <option value="1">Usuario</option>
                      <option value="2">Director de Talento Humano</option>
                      <option value="3">Admin</option>
                    </select>
                  </div>
                  <div className="col-md-12 mb-1">
                    <label>Dirección:</label>
                    <input name="address" value={formData.address} onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="col-md-12 mb-1">
                    <label>Fecha de nacimiento:</label>
                    <input type="date" name="birth_date" value={formData.birth_date} onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="col-md-12 mb-2">
                    <label>Celular:</label>
                    <input name="cellphone_number" value={formData.cellphone_number} onChange={handleChange} className="form-control" required />
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="row">
                  <div className="col-md-12 mb-1">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="col-md-12 mb-1">
                    <label>Contraseña:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="col-md-12 mb-2">
                    <label>Repite la contraseña:</label>
                    <input type="password" name="repassword" value={formData.repassword} onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="mb-2 d-flex justify-content-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LetGXsrAAAAANBrLdW5YiKZvgq3khxb6t-M42rS"
                      onChange={handleRecaptchaChange}
                    />
                  </div>
                </div>
              )}

              <div className="d-flex justify-content-between">
                {step > 1 && <button type="button" className="btn btn-outline-custom" onClick={() => setStep(step - 1)}>Anterior</button>}
                {step < 3 && <button type="button" className="btn btn-outline-custom ms-auto" onClick={() => setStep(step + 1)}>Siguiente</button>}
                {step === 3 && <button type="submit" className="btn btn-custom ms-auto" disabled={loading}>{loading ? "Cargando..." : "Registrarme"}</button>}
              </div>
              <a href="/login" className='btn btn-outline-custom w-100 mt-2'>
                ¿Ya tienes cuenta? Logueate
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;