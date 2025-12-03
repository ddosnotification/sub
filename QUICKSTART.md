# 🚀 Quick Start Guide - PODPEROS Website

## ⚡ Getting Started in 5 Minutes

### Step 1: Open the Website
Simply open `index.html` in your web browser:
- Double-click the file, or
- Right-click → Open with → Your browser
- Or drag and drop into browser window

**No server required!** The website runs entirely in the browser.

### Step 2: View on Different Devices
To test responsive design:

#### Desktop Browser
1. Press `F12` to open DevTools
2. Click the device icon (Toggle device toolbar)
3. Try different screen sizes:
   - iPhone SE (375px)
   - iPhone 11 (414px)
   - iPad (768px)
   - Desktop (1920px)

#### Real Mobile Device
1. Transfer website folder to your phone, or
2. Use a local server (see below)
3. Open on mobile browser

### Step 3: Customize Your Content

#### Change Logo
1. Place your logo as `images/logo.png` or `images/logo.svg`
2. Recommended: Transparent background, 200x200px+
3. The SVG logo is already there as placeholder

#### Add Product Images
Replace placeholders in HTML:
```html
<!-- Before -->
<div class="product-placeholder">
    <i class="fas fa-box"></i>
</div>

<!-- After -->
<img src="images/velo-ice-cool.jpg" alt="VELO Ice Cool">
```

#### Update Text Content
Edit `index.html` - all text is in Slovak:
- Line 51-64: Hero section text
- Line 101-142: About section
- Line 148-231: Products
- Line 275-296: Location info

#### Change Colors
Edit `css/style.css` at the top:
```css
:root {
    --primary-red: #FF0844;      /* Change this */
    --primary-pink: #FF2D87;     /* And this */
    /* ... more colors */
}
```

### Step 4: Test Features

#### Navigation
- Click logo → Goes to top
- Click menu items → Scrolls to sections
- On mobile: Click hamburger → Menu opens

#### Contact Form
- Fill out form
- Click "Odoslať" (Send)
- See success notification

#### Hidden Features
- Try Konami code: ↑↑↓↓←→←→BA
- Watch scroll progress bar (top)
- See floating pouches move
- Hover over product cards

## 🖥️ Using a Local Server (Optional)

If you want to test with a proper server:

### Python Server
```bash
cd /workspace
python3 -m http.server 8000
```
Then visit: `http://localhost:8000`

### Node.js Server
```bash
npx http-server /workspace -p 8000
```
Then visit: `http://localhost:8000`

### VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## 📝 Common Customizations

### Add More Products
Copy existing product card in `index.html`:
```html
<div class="product-card" data-aos="zoom-in" data-aos-delay="100">
    <div class="product-badge">NEW</div>
    <div class="product-image">
        <img src="images/your-product.jpg" alt="Product Name">
    </div>
    <h3 class="product-name">Your Product</h3>
    <p class="product-strength">Strong</p>
    <div class="product-features">
        <span class="product-tag">Flavor</span>
        <span class="product-tag">16mg</span>
    </div>
</div>
```

### Change Locations
Edit location cards in `index.html` (around line 275):
```html
<div class="info-card">
    <i class="fas fa-map-marker-alt"></i>
    <h3>Your City</h3>
    <p>Your address description</p>
</div>
```

### Update Social Media Links
In footer section (line 308):
```html
<a href="https://instagram.com/yourhandle">
    <i class="fab fa-instagram"></i>
</a>
```

### Modify Hero Text
Lines 51-64 in `index.html`:
```html
<h1 class="hero-title">
    <span class="title-line">YOUR</span>
    <span class="title-line highlight">BRAND</span>
</h1>
```

## 🎨 Design Tweaks

### Adjust Font Sizes
In `css/style.css`:
```css
.hero-title {
    font-size: clamp(4rem, 10vw, 8rem);
    /* Change min (4rem) and max (8rem) */
}
```

### Change Animation Speed
In `js/main.js`:
```javascript
AOS.init({
    duration: 1000,  // Change this (milliseconds)
    easing: 'ease-out-cubic',
    once: true
});
```

### Disable Animations
Remove or comment out in `index.html`:
```html
<!-- Remove data-aos attributes -->
<div class="about-card"> <!-- Instead of data-aos="fade-up" -->
```

## 🐛 Troubleshooting

### Logo Not Showing
- Check `images/logo.svg` exists
- Or add `images/logo.png`
- Check browser console for errors (F12)

### Fonts Not Loading
- Check internet connection (fonts load from Google)
- Look for errors in console
- Fonts fallback to system fonts

### Animations Not Working
- Check AOS library loaded (view page source)
- Check JavaScript console for errors
- Disable browser extensions temporarily

### Mobile Menu Not Opening
- Check JavaScript loaded
- Check console for errors
- Try clearing browser cache

### Styling Looks Broken
- Check `css/style.css` exists and loaded
- Hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac)
- Check for CSS syntax errors

## 📱 Mobile Testing Tips

### Test These Specifically
1. **Tap targets** - All buttons easy to click?
2. **Text size** - Readable without zooming?
3. **Hamburger menu** - Opens/closes smoothly?
4. **Form inputs** - Easy to type on phone?
5. **Scroll performance** - Smooth, no lag?

### Viewport Sizes to Test
- 320px (small phone)
- 375px (iPhone SE)
- 390px (iPhone 12)
- 414px (iPhone 11 Pro Max)
- 768px (iPad portrait)
- 1024px (iPad landscape)

## 🎯 Before Going Live

### Checklist
- [ ] Replace placeholder logo
- [ ] Add real product images
- [ ] Update all text/content
- [ ] Update contact information
- [ ] Add real social media links
- [ ] Test contact form backend
- [ ] Optimize images (compress)
- [ ] Test on multiple browsers
- [ ] Test on real mobile devices
- [ ] Add Google Analytics (optional)
- [ ] Set up proper domain
- [ ] Add SSL certificate
- [ ] Create 404 page
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Check page speed (Lighthouse)

## 🎓 Learning Resources

### To Understand the Code
- **HTML**: MDN Web Docs (developer.mozilla.org)
- **CSS Grid/Flexbox**: CSS-Tricks guides
- **JavaScript**: javascript.info
- **AOS Library**: michalsnik.github.io/aos

### Design Inspiration
- Dribbble.com - Design ideas
- Awwwards.com - Award-winning sites
- Behance.net - Creative portfolios

## 💡 Pro Tips

1. **Images**: Use WebP format for smaller file sizes
2. **Performance**: Compress images before adding (TinyPNG.com)
3. **SEO**: Update meta tags in `<head>`
4. **Analytics**: Add Google Analytics code before `</body>`
5. **Forms**: Connect to backend (Firebase, Formspree, etc.)
6. **Backup**: Keep original files before making changes

## 🆘 Need Help?

### Common Questions

**Q: How do I change the language?**
A: Edit all text in `index.html` - currently in Slovak

**Q: Can I add more pages?**
A: Yes! Create `products.html`, `about.html`, etc.

**Q: How do I make the form actually work?**
A: You need a backend service or use:
- Formspree.io (free)
- Netlify Forms
- Firebase Functions
- Your own server

**Q: The website looks different on my phone!**
A: That's the responsive design - it adapts to screen size

**Q: Can I use this for commercial purposes?**
A: Yes! Customize and use as needed for your business

## 📊 File Overview

```
/workspace/
├── index.html (354 lines)
│   Main HTML - Edit content here
│
├── css/style.css (1,120 lines)
│   All styling - Edit design here
│
├── js/main.js (500+ lines)
│   Interactivity - Edit behavior here
│
├── images/
│   └── logo.svg (placeholder logo)
│
├── README.md
│   Comprehensive documentation
│
├── FEATURES.md
│   Detailed feature breakdown
│
├── TESTING.md
│   Testing guidelines
│
└── QUICKSTART.md (this file)
    Quick reference guide
```

## ✨ Enjoy Your Website!

You now have a modern, responsive website for PODPEROS!

**Remember**: 
- Start simple - open `index.html`
- Customize gradually
- Test on multiple devices
- Have fun with it!

---

**Questions?** Check README.md for more details.

**"Pod pery, nad očakávania"** 🎉
