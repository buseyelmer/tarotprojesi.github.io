// Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginUser } from './auth'; // Kullanıcıyı giriş yapmasına yardımcı olacak fonksiyon

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    const response = await loginUser(email, password); // Login fonksiyonunu çağır
    if (response.success) {
      history.push('/dashboard'); // Başarılı giriş sonrası yönlendirme
    } else {
      alert('Giriş başarısız!'); // Hata durumu
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
