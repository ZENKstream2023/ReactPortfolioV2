import React, { useState } from 'react';
import axios from 'axios';

function LoginView() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [formType, setFormType] = useState('signin');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:3200/signin', {
        email,
        password
      });
      if (response.data.status === "ok") {
        // Redireccionar a la página del panel después del inicio de sesión exitoso
        window.location.href = '/panel';
      }
    } catch (error) {
      // Manejar el error si la solicitud falla
      console.log(error);
    }
  };

  const createAccount = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:3200/signup', {
        email,
        password
      });
      if (response.data.status === "ok") {
        // Redireccionar a la página del panel después de crear la cuenta exitosamente
        window.location.href = '/panel';
      }
    } catch (error) {
      // Manejar el error si la solicitud falla
      console.log(error);
    }
  };

  return (
    <div className="banner">
      <div style={{ marginTop: '15em', paddingInline: '40%', zIndex: 1 }}>
        {formType === 'signin' ? (
          <form onSubmit={handleSignIn} className="signin">
            <img className="mb-4" src="logofooter.png" alt="" width="160em" height="130em" />
            <h1 className="h3 mb-3 fw-normal"></h1>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <label htmlFor="floatingPassword">Contraseña</label>
            </div>
            <button className="btn btn-primary w-100 py-2 mt-3" style={{ background: 'linear-gradient(to right, #df18df, #4c9ae7)' }} type="submit">Iniciar Sesión</button>
            <div className="text-center">
              <button className="btn btn-link" onClick={() => setFormType('signup')}>Crear Cuenta</button>
            </div>
          </form>
        ) : (
          <form onSubmit={createAccount} className="signup">
            <img className="mb-4" src="logofooter.png" alt="" width="150em" height="130em" />
            <h1 className="h3 mb-3 fw-normal"></h1>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <label htmlFor="floatingPassword">Contraseña</label>
            </div>
            <button className="btn btn-primary w-100 py-2 mt-3" style={{ background: 'linear-gradient(to right, #df18df, #4c9ae7)' }} type="submit">Crear Cuenta</button>
            <div className="text-center">
              <button className="btn btn-link" onClick={() => setFormType('signin')}>Entrar</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginView;