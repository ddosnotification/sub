# 🚀 PODPEROS Website Setup Guide

## ✅ What's Included

Your Podperos website is now complete with:

### Files Created
- ✅ `index.html` - Main website file (Slovak language)
- ✅ `css/style.css` - All styling with responsive design
- ✅ `js/script.js` - Animations and interactions
- ✅ `images/logo.svg` - SVG logo (fallback)
- ✅ `images/logo.png` - PNG logo placeholder
- ✅ `README.md` - Complete documentation

## 🎨 Design Highlights

### Branding
- **Colors**: Red/Pink gradient (#ff1744, #ec407a, #d81b60)
- **Typography**: Bebas Neue (headlines) + Poppins (body)
- **Theme**: Modern, edgy, youth-oriented
- **Concept**: "Pod peros" (under lips) - nicotine pouch placement

### Sections
1. **Hero** - Massive typography with animated gradient orbs
2. **About** - Three value propositions + brand story
3. **Products** - Product cards with 3D effects (ZYN, VELO, LYFT, PABLO)
4. **Features** - Vapes, updates, payments
5. **Locations** - City listings + map placeholder
6. **Contact** - Form + social media links

## 📱 Fully Responsive

Tested and optimized for:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Laptop (968px+)
- 🖥️ Desktop (1200px+)

## 🎬 Animations Included

- ✨ Scroll animations (AOS library)
- 🎨 Gradient orb floating
- 🎯 Parallax scrolling
- 💳 3D product card tilt
- 📊 Scroll progress bar
- ⬆️ Scroll-to-top button
- ⌨️ Typing effect for tagline
- 🔄 Form submission animation
- 🚪 18+ Age verification popup

## 🏃 Quick Start

### Option 1: Double-Click (Simplest)
Just open `index.html` in your web browser!

### Option 2: Local Server (Recommended)

**Python 3:**
```bash
cd /workspace
python3 -m http.server 8000
```

**Node.js:**
```bash
npx http-server
```

Then visit: http://localhost:8000

## 🎯 Next Steps

### 1. Replace Logo
Replace `images/logo.png` with your actual logo:
- Recommended size: 200x80px
- Format: PNG with transparent background
- The SVG fallback will be used if PNG fails

### 2. Update Contact Info
Edit `index.html` around line 420-450:
```html
<p>info@podperos.sk</p>
<p>+421 XXX XXX XXX</p>
<p>@podperos.sk</p>
```

### 3. Add Real Locations
Update the locations section with actual addresses.

### 4. Configure Form
The contact form currently shows a success message but doesn't send data.
Options:
- **Formspree**: Add `action="https://formspree.io/f/YOUR_ID"`
- **Netlify Forms**: Add `netlify` attribute
- **Backend**: Connect to your own backend API

### 5. Add Google Maps
Replace the map placeholder with Google Maps embed:
```html
<iframe src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE" 
        width="100%" height="400" style="border:0;" 
        allowfullscreen="" loading="lazy">
</iframe>
```

### 6. Update Social Links
Change the `#` in social media links to your real profiles:
```html
<a href="https://instagram.com/podperos.sk" class="social-link">
    <i class="fab fa-instagram"></i>
</a>
```

### 7. Add Real Product Images
Replace placeholder images with actual product photos:
- Create `images/products/` folder
- Add product images
- Update `<img src="images/products/zyn.jpg">` in HTML

## 🎨 Customization Tips

### Change Colors
Edit `css/style.css` (lines 8-18):
```css
:root {
    --primary-red: #ff1744;
    --primary-pink: #ec407a;
    --dark-pink: #d81b60;
    /* Change these to your brand colors */
}
```

### Modify Text
All text is in Slovak and directly in `index.html`. 
Search and replace as needed.

### Add More Products
Copy a `.product-card` div and modify:
```html
<div class="product-card" data-aos="flip-left">
    <div class="product-badge">NEW</div>
    <!-- ... -->
</div>
```

### Adjust Animations
Edit animation settings in `js/script.js` (lines 9-15):
```javascript
AOS.init({
    duration: 1000,  // Animation speed
    once: false,     // Repeat on scroll
    offset: 100,     // Trigger offset
    // ...
});
```

## 🌐 Deployment Options

### Free Hosting
1. **Netlify** (Recommended)
   - Drag & drop your files
   - Automatic SSL
   - Custom domain support
   - URL: https://app.netlify.com/drop

2. **GitHub Pages**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
   Enable Pages in Settings

3. **Vercel**
   - Import from GitHub
   - Zero configuration

4. **Firebase Hosting**
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init hosting
   firebase deploy
   ```

### Paid Hosting
- Any web hosting with HTML support
- Upload via FTP/SFTP
- No special requirements

## 🔧 Troubleshooting

### Logo Not Showing
- Check if `images/logo.png` exists
- SVG fallback will load automatically
- Update path if needed: `src="./images/logo.png"`

### Animations Not Working
- Check browser console for errors
- Ensure AOS library is loading
- Internet connection needed for CDN libraries

### Mobile Menu Stuck
- Clear browser cache
- Check JavaScript console
- Ensure script.js is loading

### Form Not Submitting
- This is expected (no backend)
- Follow "Configure Form" steps above
- Test submission animation locally

## 📊 Performance Tips

### Optimize Images
```bash
# Using ImageOptim, TinyPNG, or command line:
pngcrush -brute logo.png logo-optimized.png
```

### Enable Compression
Add to `.htaccess` (Apache):
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css text/javascript
</IfModule>
```

### Add Caching
```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
</IfModule>
```

## 🛡️ Security & Compliance

### Age Verification
- ✅ Implemented (18+ popup)
- Stored in localStorage
- Redirects under-age users

### Legal Disclaimers
- ✅ "Nikotín je návyková látka"
- ✅ "Produkty len pre 18+"
- ✅ Footer warnings

### GDPR Compliance
Consider adding:
- Privacy policy page
- Cookie consent banner
- Data processing info

## 📞 Support

### Common Issues

**Q: Can I use this commercially?**
A: Yes, it's built for Podperos commercial use.

**Q: Do I need to credit anyone?**
A: No attribution required.

**Q: Can I modify the design?**
A: Absolutely! Customize as needed.

**Q: Why pure HTML/CSS/JS?**
A: No build process, easy to host, fast loading.

**Q: How do I add more pages?**
A: Create new HTML files and link them:
```html
<a href="about.html">About</a>
```

## 🎓 Learning Resources

- [HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript Info](https://javascript.info/)
- [AOS Library](https://michalsnik.github.io/aos/)

## ✨ Enhancement Ideas

Future improvements you could add:

### Short Term
- [ ] Add actual product images
- [ ] Configure contact form backend
- [ ] Add Google Maps integration
- [ ] Update social media links
- [ ] Add real phone numbers

### Medium Term
- [ ] Blog/news section
- [ ] Newsletter signup
- [ ] Multi-language (English)
- [ ] Machine availability status
- [ ] Customer reviews

### Long Term
- [ ] E-commerce functionality
- [ ] User accounts
- [ ] Loyalty program
- [ ] Mobile app
- [ ] Machine finder app

## 🎉 You're Ready!

Your Podperos website is complete and ready to launch!

**Key Features:**
✅ Modern design with red/pink branding
✅ Fully responsive (mobile to desktop)
✅ Smooth animations and interactions
✅ Slovak language content
✅ 18+ age verification
✅ SEO-friendly structure
✅ Fast loading (no heavy frameworks)

**Test it now:**
1. Open `index.html` in browser
2. Test on mobile device
3. Check all links and buttons
4. Verify age gate works
5. Test contact form animation

---

**Questions?** Check README.md for detailed documentation.

**Ready to launch?** Follow deployment steps above.

**Need changes?** All code is well-commented and easy to modify.

---

### 🔴 PODPEROS
*Pod perami, nad očakávaniami!*
