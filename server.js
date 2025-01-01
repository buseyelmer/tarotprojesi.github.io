// // Gerekli modülleri içeri aktar
// const express = require('express');  // Express modülü
// const mongoose = require('mongoose');  // MongoDB bağlantısı için mongoose
// const bodyParser = require('body-parser');  // JSON verilerini işlemek için body-parser
// const jsonwebtoken = require('jsonwebtoken');  // JSON Web Token modülü
// const cors = require('cors'); // CORS sorunlarını çözmek için cors

// // Express uygulamasını başlat
// const app = express();
// const PORT = 3000;
// const SECRET_KEY = 'your_secret_key'; // Token için kullanılacak gizli anahtar

// // Middleware'ler
// app.use(bodyParser.json()); // JSON verilerini parse eder
// app.use(cors()); // CORS sorunlarını önler
// app.use(express.static("public")); // Statik dosyaları sunmak için (html, css, js)

// // MongoDB bağlantısı
// const dbURL = 'mongodb://localhost:27017/tarotProje';
// mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB bağlantısı başarılı!'))
//     .catch(err => console.error('MongoDB bağlantı hatası:', err));

// // Kullanıcı şeması ve modeli
// const userSchema = new mongoose.Schema({
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     message: { type: String, required: true },
//     password: { type: String, required: true }, // Kullanıcı şifresi (hashlenmeli!)
//     role: { type: String, default: 'user' }, // Rol: user veya admin
// });

// const User = mongoose.model('User', userSchema);

// // Kullanıcı oluşturma endpoint'i
// app.post('/api/users', async (req, res) => {
//     const { firstName, lastName, email, message, password } = req.body;

//     const newUser = new User({ firstName, lastName, email, message, password });
//     try {
//         const savedUser = await newUser.save();
//         res.status(201).json(savedUser);
//     } catch (error) {
//         res.status(500).json({ message: "Kullanıcı kaydedilemedi", error });
//     }
// });

// // Kullanıcı giriş endpoint'i - JWT oluşturma
// app.post('/api/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email, password }); // Basit kontrol (hashlenmemiş şifre için)
//         if (!user) {
//             return res.status(404).json({ message: 'Kullanıcı bulunamadı veya şifre hatalı' });
//         }

//         // Token oluşturma
//         const token = jsonwebtoken.sign({ userId: user._id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
//         res.status(200).json({ token, role: user.role });
//     } catch (error) {
//         res.status(500).json({ message: 'Giriş işlemi başarısız', error });
//     }
// });
// ""
// // JWT doğrulama middleware'i
// function verifyToken(req, res, next) {
//     const token = req.headers['authorization']?.split(' ')[1];
//     if (!token) {
//         return res.status(403).json({ message: 'Token bulunamadı' });
//     }

//     jsonwebtoken.verify(token, SECRET_KEY, (err, decoded) => {
//         if (err) {
//             return res.status(403).json({ message: 'Geçersiz token' });
//         }
//         req.user = decoded; // Doğrulanan kullanıcıyı isteğe ekle
//         next();
//     });
// }

// // Admin paneline erişim endpoint'i
// app.get('/api/admin', verifyToken, (req, res) => {
//     if (req.user.role !== 'admin') {
//         return res.status(403).json({ message: 'Yetkisiz erişim' });
//     }
//     res.json({ message: 'Admin paneline hoş geldiniz!' });
// });

// // Sunucuyu başlat
// app.listen(PORT, () => {
//     console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor.`);
// });








// const path = require('path'); // Path modülü dahil et

// // Statik dosyaları sun
// app.use(express.static(path.join(__dirname, 'public')));












// Gerekli modülleri içeri aktar
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

// Express uygulamasını başlat
const app = express();
app.use(bodyParser.json());

// MongoDB'ye bağlan
mongoose.connect('mongodb://localhost:27017/loginExample', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB bağlantısı başarılı!'))
    .catch(err => console.error('MongoDB bağlantı hatası:', err));

// Kullanıcı şeması ve modeli
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' } // 'admin' veya 'user'
});
const User = mongoose.model('User', userSchema);

// Yeni kullanıcı oluştur (örnek admin ekle)
app.post('/register', async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const user = new User({ username, password, role });
        await user.save();
        res.status(201).json({ message: 'Kullanıcı başarıyla oluşturuldu!' });
    } catch (error) {
        res.status(400).json({ error: 'Kullanıcı oluşturulamadı!' });
    }
});

// Giriş yap ve JWT token oluştur
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) return res.status(401).json({ message: 'Geçersiz kullanıcı adı veya şifre!' });

    const token = jwt.sign({ userId: user._id, role: user.role }, 'secret_key', { expiresIn: '1h' });
    res.json({ message: 'Giriş başarılı!', token });
});

// Admin sayfasına erişim
app.get('/admin', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(403).json({ message: 'Token eksik!' });

    jwt.verify(token, 'secret_key', (err, decoded) => {
        if (err || decoded.role !== 'admin') return res.status(403).json({ message: 'Yetkisiz erişim!' });
        res.json({ message: 'Admin paneline hoş geldiniz!' });
    });
});

// Sunucuyu başlat
app.listen(3000, () => console.log('Sunucu 3000 portunda çalışıyor!'));











app.post('/register', async (req, res) => {
    const { username, password, role } = req.body;
    if (!username || !password || !role) {
        return res.status(400).json({ error: 'All fields are required.' });
    }
    const newUser = new User({ username, password, role });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully.' });
});
