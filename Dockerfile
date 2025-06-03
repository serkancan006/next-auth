# Node 22 Alpine bazlı image kullanıyoruz
FROM node:22-alpine

# Uygulama dizinine geçiyoruz
WORKDIR /app

# Package dosyalarını kopyala (cache için)
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama dosyalarını kopyala
COPY . .

# Next.js build işlemi
RUN npm run build

# Container'ın dinleyeceği port
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "start"]
