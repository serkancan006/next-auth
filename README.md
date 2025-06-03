- npm run dev veya npm start ile uygulamayı başlattıktan sonra
- /login sayfasına girin ve auth0 ile giriş yap butonuna tıklayın  daha sonra
- kullanıcı adı: admin, şifre: 123456Aa* olarak girip test edebilirsiniz
- ayrıca docker dosyaları mevcuttur

- önemli not: yapılanmayı next-auth'un session providerı ile  kurup auth0 api'ına istek atacak şekilde de yapılandırılabilirdi ayrıca  @auth0/nextjs-auth0 kütüphanesi ile de auth0 ya bağlanılabilir fakat projede next-auth istenildiği için bu şekilde bir yapılanma yapılmıştır.