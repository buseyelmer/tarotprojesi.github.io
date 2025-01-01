// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login'; // Login sayfası
import Dashboard from './Dashboard'; // Dashboard sayfası
import { getUserRole } from './auth'; // Rolü alacağımız auth fonksiyonu

function App() {
  const [role, setRole] = useState(null);

  // Kullanıcı rolünü almak ve yönetmek
  useEffect(() => {
    const userRole = getUserRole(); // auth.js'den getUserRole fonksiyonuyla
    setRole(userRole); 
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route 
          path="/dashboard" 
          render={(props) => (
            role === 'admin' ? 
              <Dashboard {...props} role={role} /> : 
              <div>Access Denied</div>
          )}
        />
        <Route path="/" exact render={() => <div>Welcome Home</div>} />
      </Switch>
    </Router>
  );
}

export default App;




document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Backend'e giriş bilgilerini gönder
    const response = await fetch('http://localhost:3000/api/kullanici/giris', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ eposta: email, sifre: password })
    });
  
    const data = await response.json();
  
    if (response.ok) {
      // Token'ı localStorage'a kaydet
      localStorage.setItem('token', data.token);
  
      // Kullanıcının rolünü kontrol et ve uygun panele yönlendir
      if (data.token) {
        const decoded = JSON.parse(atob(data.token.split('.')[1])); // Token'ı çöz
        if (decoded.role === 'admin') {
          window.location.href = 'admin-panel.html'; // Admin paneline yönlendir
        } else if (decoded.role === 'user') {
          window.location.href = 'user-panel.html'; // Kullanıcı paneline yönlendir
        }
      }
    } else {
      // Hata mesajını göster
      document.getElementById('error-message').innerText = 'Geçersiz e-posta veya şifre.';
    }
  });
