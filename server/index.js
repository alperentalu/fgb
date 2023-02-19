const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();

// Kullanıcı adı ve parola yerine burada basitçe bir nesne kullanıyoruz
const users = [
  {
    id: 1,
    username: 'exampleuser',
    password: 'examplepassword'
  }
];

// JWT için gerekli olan gizli anahtar (Secret Key)
const jwtSecretKey = 'Alperen';

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Login endpoint
app.post('/login', (req, res) => {
  // Kullanıcının veri tabanında var olup olmadığını kontrol etmek için basit bir işlev
  function userExists(user) {
    return user.username === req.body.username && user.password === req.body.password;
  }

  const user = users.find(userExists);

  if (user) {
    // Kullanıcı varsa JWT token'ı oluştur ve yanıt olarak gönder
    jwt.sign({ user }, jwtSecretKey, { expiresIn: '1h' }, (err, token) => {
      res.json({
        token
      });
    });
  } else {
    // Kullanıcı yoksa 401 (Unauthorized) yanıtı ver
    res.status(401).send('Kullanıcı adı veya şifre hatalı.');
  }
});
function verifyToken(req, res, next) {
    // Header'dan token'ı al
    const token = req.headers['authorization'].split(' ')[1];
  
    if (!token) {
      // token yoksa hata döndür
      return res.status(401).send('Erişim reddedildi. Token bulunamadı.');
    }
  
    try {
      // Token'ı doğrula
      const decoded = jwt.verify(token, jwtSecretKey);
      // İsteğe token ver
      req.token = decoded;
  
      // İşlemi devam ettir
      next();
    } catch (err) {
      res.status(400).send('Geçersiz token.');
    }
  }
  
  // Korumalı rotalar
  app.get('/api/protected', verifyToken, (req, res) => {
    res.send(`Hoş geldiniz ${req.token.user.username}!`);
  });
// Uygulamayı dinlemeye başla
app.listen(3000, () => console.log('Uygulama 3000 numaralı portta çalışıyor.'));
