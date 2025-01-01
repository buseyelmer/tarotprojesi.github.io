// auth.js
export const loginUser = async (email, password) => {
    // Backend'e API isteği gönderebilirsiniz. Örnek olarak şu şekilde bir POST isteği gönderebilirsiniz.
    const response = await fetch('http://localhost:3000/api/kullanici/giris', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
  
    if (response.ok) {
      // Giriş başarılıysa, token ve rol bilgisini localStorage'a kaydedebiliriz.
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      return { success: true };
    } else {
      return { success: false, message: data.message };
    }
  };
  
  export const getUserRole = () => {
    // Kullanıcı rolünü localStorage'dan alıyoruz
    return localStorage.getItem('role');
  };
  