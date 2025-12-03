# 🚀 PODPEROS Deployment Guide

## Overview
This guide covers multiple deployment options for the PODPEROS website.

## Quick Deployment (5 Minutes)

### Option 1: Netlify (Recommended - Easiest)

**Steps:**
1. Go to [netlify.com](https://netlify.com)
2. Sign up (free account)
3. Click "Add new site" → "Deploy manually"
4. Drag and drop the entire `/workspace` folder
5. Done! You'll get a URL like `your-site.netlify.app`

**Custom Domain:**
- Go to Site settings → Domain management
- Add your custom domain (e.g., podperos.sk)
- Follow DNS configuration instructions
- SSL certificate is automatic!

**Continuous Deployment:**
- Connect to GitHub repository
- Automatic deploys on every push
- Branch previews available

### Option 2: Vercel

**Steps:**
1. Go to [vercel.com](https://vercel.com)
2. Sign up and create new project
3. Import from Git or upload files
4. Configure:
   - Framework: None (static site)
   - Root directory: ./
   - Build command: (leave empty)
   - Output directory: ./
5. Deploy!

### Option 3: GitHub Pages (Free)

**Steps:**
1. Create GitHub repository
2. Upload all files
3. Go to repository Settings → Pages
4. Source: Deploy from branch → main
5. Site will be at `yourusername.github.io/repository-name`

**Using Custom Domain:**
```
# Create CNAME file in root
echo "podperos.sk" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

Then configure DNS:
- Type: A Record
- Host: @
- Value: 185.199.108.153
- TTL: 3600

## Traditional Web Hosting

### Via FTP/SFTP

**Required Files:**
```
index.html
css/style.css
js/main.js
images/logo.svg
images/logo-placeholder.txt
images/favicon-instructions.txt
```

**Upload Steps:**
1. Connect to your hosting via FTP client (FileZilla, Cyberduck, etc.)
2. Navigate to public_html or www directory
3. Upload all files maintaining folder structure
4. Set permissions (usually 644 for files, 755 for folders)
5. Visit your domain!

### Via cPanel

1. Log into cPanel
2. File Manager → public_html
3. Upload → Select files
4. Extract if uploaded as ZIP
5. Verify file structure
6. Done!

## Advanced Deployment

### Using Docker

Create `Dockerfile`:
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t podperos-website .
docker run -p 80:80 podperos-website
```

### Using Nginx (Linux Server)

1. Install Nginx:
```bash
sudo apt update
sudo apt install nginx
```

2. Copy files:
```bash
sudo cp -r /workspace/* /var/www/html/
```

3. Configure Nginx (`/etc/nginx/sites-available/podperos`):
```nginx
server {
    listen 80;
    server_name podperos.sk www.podperos.sk;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    # Enable gzip compression
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
}
```

4. Enable and restart:
```bash
sudo ln -s /etc/nginx/sites-available/podperos /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Pre-Deployment Checklist

### Required Changes:
- [ ] Update contact email in HTML
- [ ] Update phone number in HTML
- [ ] Add actual logo (logo.png or use logo.svg)
- [ ] Update domain in meta tags
- [ ] Test all links
- [ ] Add Google Analytics (optional)

### Optional Enhancements:
- [ ] Add favicon
- [ ] Compress images
- [ ] Minify CSS/JS
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Configure CDN

### Testing Before Launch:
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on mobile devices
- [ ] Test all navigation links
- [ ] Test form submissions (if any)
- [ ] Check responsive design
- [ ] Verify loading speed
- [ ] Check SEO meta tags
- [ ] Test accessibility

## Performance Optimization

### Image Optimization
Use tools like:
- [TinyPNG](https://tinypng.com) - Compress PNG/JPG
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - Optimize SVG
- [Squoosh](https://squoosh.app) - Modern image compression

### Minification
```bash
# Install minification tools
npm install -g minify

# Minify CSS
minify css/style.css > css/style.min.css

# Minify JS
minify js/main.js > js/main.min.js
```

Update HTML to use minified versions:
```html
<link rel="stylesheet" href="css/style.min.css">
<script src="js/main.min.js"></script>
```

### Enable Caching
Add to `.htaccess` (Apache):
```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## DNS Configuration

### For podperos.sk

**A Records:**
```
Type: A
Host: @
Value: [Your server IP]
TTL: 3600
```

**CNAME for www:**
```
Type: CNAME
Host: www
Value: podperos.sk
TTL: 3600
```

**Propagation:**
DNS changes can take 24-48 hours to fully propagate globally.

## SSL Certificate

### Free SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d podperos.sk -d www.podperos.sk

# Auto-renewal
sudo certbot renew --dry-run
```

### Cloudflare (Easiest)
1. Add site to Cloudflare
2. Update nameservers
3. SSL/TLS → Full (automatic)
4. Performance & Security features included!

## Monitoring & Analytics

### Google Analytics
Add before `</head>`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Alternative Analytics
- **Plausible** - Privacy-friendly
- **Fathom** - Simple, privacy-focused
- **Matomo** - Self-hosted option

## SEO Configuration

### Create sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://podperos.sk/</loc>
    <lastmod>2024-12-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Create robots.txt
```
User-agent: *
Allow: /
Sitemap: https://podperos.sk/sitemap.xml
```

### Submit to Search Engines
- Google Search Console
- Bing Webmaster Tools
- Yandex Webmaster

## Maintenance

### Regular Updates
- Update product information weekly
- Check for broken links monthly
- Review analytics monthly
- Update content seasonally
- Backup files regularly

### Backup Strategy
```bash
# Automated backup script
#!/bin/bash
DATE=$(date +%Y%m%d)
tar -czf backup-$DATE.tar.gz /var/www/html/
# Upload to cloud storage
```

## Troubleshooting

### Site Not Loading
1. Check DNS propagation: whatsmydns.net
2. Verify file permissions
3. Check server logs
4. Test with different browser/device
5. Clear DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)

### Slow Loading
1. Check image sizes
2. Enable compression
3. Use CDN
4. Minimize HTTP requests
5. Enable browser caching

### Mobile Issues
1. Test on real devices
2. Use Chrome DevTools device mode
3. Check viewport meta tag
4. Verify touch target sizes
5. Test on slow connections

## Support

### Hosting Issues
Contact your hosting provider's support with:
- Error messages
- Server logs
- Steps to reproduce

### Technical Questions
- Stack Overflow: tag `html`, `css`, `javascript`
- Web Development communities
- Frontend Mentor forums

## Next Steps After Deployment

1. **Monitor Performance**
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

2. **Set Up Monitoring**
   - UptimeRobot (free uptime monitoring)
   - Status page service

3. **Marketing**
   - Social media announcement
   - Google My Business
   - Local directories

4. **Collect Feedback**
   - User surveys
   - Analytics review
   - A/B testing

---

**Congratulations on deploying PODPEROS!** 🎉

*Need help? Check QUICKSTART.md or README.md for more information.*
