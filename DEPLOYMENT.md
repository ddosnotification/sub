# 🚀 PODPEROS - Deployment Guide

## Rýchly Štart

### Lokálne Testovanie

#### Metóda 1: Priamy Prístup
```bash
# Otvor index.html priamo v prehliadači
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

#### Metóda 2: Python Server
```bash
# Python 3
cd /workspace
python3 -m http.server 8000

# Otvor http://localhost:8000 v prehliadači
```

#### Metóda 3: Node.js Server
```bash
# Nainštaluj serve
npm install -g serve

# Spusti server
serve

# Otvor http://localhost:3000 v prehliadači
```

#### Metóda 4: PHP Server
```bash
php -S localhost:8000
```

## 📤 Deployment Options

### 1. GitHub Pages (FREE)

```bash
# 1. Vytvor GitHub repozitár
git init
git add .
git commit -m "Initial commit: PODPEROS website"
git branch -M main
git remote add origin https://github.com/USERNAME/podperos.git
git push -u origin main

# 2. Povoľ GitHub Pages
# Settings → Pages → Source: main branch → Save
# URL: https://USERNAME.github.io/podperos/
```

### 2. Netlify (FREE)

#### Drag & Drop
1. Choď na [netlify.com](https://netlify.com)
2. Drag & drop celý folder na Netlify
3. Automaticky deploy!

#### Git Integration
```bash
# 1. Push na GitHub (viď vyššie)
# 2. Pripoj repozitár na Netlify
# 3. Automatický deploy pri každom push
```

#### Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### 3. Vercel (FREE)

```bash
# Nainštaluj Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

### 4. Cloudflare Pages (FREE)

1. Choď na [pages.cloudflare.com](https://pages.cloudflare.com)
2. Pripoj GitHub repozitár
3. Build settings:
   - Build command: (nič)
   - Output directory: `.`
4. Deploy!

### 5. Firebase Hosting (FREE tier)

```bash
# Nainštaluj Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Inicializuj projekt
firebase init hosting

# Deploy
firebase deploy
```

### 6. Vlastný Hosting (cPanel, FTP)

```bash
# 1. Zabal všetky súbory
zip -r podperos.zip index.html css/ js/ images/ README.md

# 2. Upload cez FTP alebo cPanel File Manager
# 3. Rozbal na serveri
# 4. Hotovo!
```

## 🔧 Pred Deploymentom

### Checklist

- [ ] Skontroluj všetky linky
- [ ] Otestuj na mobile
- [ ] Otestuj na desktop
- [ ] Skontroluj loading speed
- [ ] Validuj HTML (validator.w3.org)
- [ ] Validuj CSS
- [ ] Test cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] Skontroluj SEO meta tags
- [ ] Pridaj Google Analytics (voliteľné)
- [ ] Nastav 404 page (voliteľné)
- [ ] Pridaj robots.txt (voliteľné)
- [ ] Pridaj sitemap.xml (voliteľné)

### Optimalizácie (Voliteľné)

#### 1. Minify CSS & JS
```bash
# Použiť online nástroj alebo:
npm install -g minify
minify css/style.css > css/style.min.css
minify js/script.js > js/script.min.js

# Update index.html na používanie .min verzií
```

#### 2. Optimalizuj Images
```bash
# SVG už optimalizované
# Ak pridáš PNG/JPG, použi:
npm install -g imagemin-cli
imagemin images/*.{jpg,png} --out-dir=images/optimized
```

#### 3. Add Cache Headers
```nginx
# nginx
location ~* \.(css|js|jpg|png|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

```apache
# .htaccess
<FilesMatch "\.(css|js|jpg|png|svg)$">
    Header set Cache-Control "max-age=31536000, public"
</FilesMatch>
```

## 🌐 Custom Doména

### Nakúpiť Doménu
- [GoDaddy](https://godaddy.com) - podperos.sk
- [Namecheap](https://namecheap.com)
- [Google Domains](https://domains.google)

### Nastaviť DNS

#### Pre Netlify/Vercel
```
A Record: @ → 75.2.60.5 (Netlify IP)
CNAME: www → your-site.netlify.app

alebo

A Record: @ → 76.76.21.21 (Vercel IP)
CNAME: www → your-site.vercel.app
```

#### Pre GitHub Pages
```
A Record: @ → 185.199.108.153
A Record: @ → 185.199.109.153
A Record: @ → 185.199.110.153
A Record: @ → 185.199.111.153
CNAME: www → USERNAME.github.io
```

## 📊 Analytics (Voliteľné)

### Google Analytics
```html
<!-- Pridaj do <head> v index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Plausible Analytics (Privacy-friendly)
```html
<script defer data-domain="podperos.sk" src="https://plausible.io/js/script.js"></script>
```

## 🔐 SSL Certificate

Všetky moderné platformy (Netlify, Vercel, GitHub Pages, Cloudflare) poskytujú **FREE SSL** automaticky!

## 🐛 Troubleshooting

### Problém: Fonts sa nenačítajú
```html
<!-- Pridaj preconnect -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### Problém: CORS errors
- Použiť HTTP server (nie file://)
- Alebo deploy na hosting

### Problém: Animácie nefungujú na mobile
- Už fixnuté! Responsive breakpoints nastavené.

### Problém: Pomalé načítanie
```html
<!-- Pridaj loading="lazy" na images -->
<img src="images/logo.svg" alt="PODPEROS" loading="lazy">
```

## 📱 PWA Upgrade (Pokročilé)

### 1. Vytvor manifest.json
```json
{
  "name": "PODPEROS",
  "short_name": "PODPEROS",
  "description": "Vždy niečo nové pod peros",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0a0a0a",
  "theme_color": "#FF1744",
  "icons": [
    {
      "src": "images/logo.svg",
      "sizes": "any",
      "type": "image/svg+xml"
    }
  ]
}
```

### 2. Pridaj do index.html
```html
<link rel="manifest" href="manifest.json">
```

### 3. Service Worker (voliteľné)
```javascript
// sw.js
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('podperos-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/style.css',
        '/js/script.js',
        '/images/logo.svg'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
```

## 🎯 Odporúčaný Workflow

1. **Development**: Lokálny server (Python/Node)
2. **Testing**: Deploy na Netlify preview
3. **Production**: Netlify/Vercel s custom doménou
4. **Updates**: Git push → Auto deploy

## 💰 Náklady

- **FREE Tier**: GitHub Pages, Netlify, Vercel, Cloudflare Pages
- **Doména**: ~10-15€/rok (.sk doména)
- **Hosting**: 0€ (static site)
- **SSL**: 0€ (included)
- **Celkové náklady**: ~10-15€/rok

## 📞 Support

Pre problémy s deploymentom:
- [Netlify Docs](https://docs.netlify.com)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages Docs](https://docs.github.com/pages)

---

**Quick Deploy Commands:**

```bash
# Netlify
netlify deploy --prod

# Vercel  
vercel --prod

# Firebase
firebase deploy

# GitHub Pages
git push origin main
```

**Live in < 5 minutes!** 🚀
