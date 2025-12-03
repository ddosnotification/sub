# 🚀 PODPEROS Quick Start Guide

## Getting Started in 3 Steps

### 1️⃣ Open the Website
Simply open `index.html` in your web browser. That's it! No build process, no installation needed.

**Ways to open:**
- Double-click `index.html` file
- Right-click → Open with → Your preferred browser
- Drag and drop `index.html` into browser window

### 2️⃣ Add Your Logo (Optional)
- Place your company logo as `images/logo.png`
- Recommended size: 500x500px PNG with transparency
- Currently uses `logo.svg` as placeholder

### 3️⃣ Customize (Optional)
Edit content directly in the files - no special tools needed!

## 📝 Quick Customization Guide

### Change Colors
Edit `css/style.css` and modify these variables (lines 15-20):
```css
:root {
    --primary: #FF006E;        /* Main pink */
    --primary-dark: #C70050;   /* Dark pink */
    --primary-light: #FF4E88;  /* Light pink */
}
```

### Update Content
Edit `index.html` and search for:
- **Hero Text**: Search for "VŽDY POD PEROS"
- **Products**: Search for "products-grid"
- **Contact Info**: Search for "info@podperos.sk"
- **Phone**: Search for "+421 900 000 000"

### Add/Remove Products
Find the products section (line ~189) and copy/paste product cards:
```html
<div class="product-card" data-aos="fade-up">
    <!-- Product content -->
</div>
```

### Change Brands
Update brand names in the brands section (line ~320):
```html
<div class="brand-logo">YOUR BRAND</div>
```

## 🎨 Branding Overview

### Main Theme
- **Primary Colors**: Pink/Red (#FF006E, #FF2D87, #FF89B5)
- **Dark Mode**: Background (#0A0A0A)
- **Concept**: "Pod Peros" = Under Lips (Slovak)

### Visual Elements
- Stylized lips graphics (SVG animations)
- Nicotine pouch illustrations
- Gradient overlays and glows
- Modern wide typography
- Smooth scroll animations

## 📱 Testing Responsive Design

Test the website on different screen sizes:

### Desktop (1920px+)
- Full layout with all animations
- Multi-column grids
- Hover effects active

### Tablet (768px - 1024px)
- Adjusted grid layouts
- Touch-optimized buttons
- Simplified animations

### Mobile (< 768px)
- Single column layout
- Hamburger menu
- Optimized for thumb navigation

**Quick Test**: Resize your browser window to see responsive changes!

## 🔧 Troubleshooting

### Logo Not Showing?
- Check file is named exactly `logo.png` or `logo.svg`
- Place in `images/` folder
- Clear browser cache (Ctrl+F5 / Cmd+Shift+R)

### Animations Not Working?
- Check internet connection (uses CDN libraries)
- Try different browser (Chrome/Firefox recommended)
- Clear browser cache

### Mobile Menu Not Opening?
- Check JavaScript is enabled
- Open browser console (F12) for errors
- Try refreshing the page

## 📊 Performance Tips

### For Production:
1. **Compress images** - Use tools like TinyPNG
2. **Minify CSS/JS** - Use online minifiers
3. **Enable caching** - Configure on your web server
4. **Use CDN** - For faster library loading
5. **Lazy load images** - For faster initial load

## 🌐 Deployment Options

### Simple Hosting (Recommended)
- **Netlify**: Drag & drop the folder
- **Vercel**: Connect to Git repository
- **GitHub Pages**: Free hosting with custom domain
- **Traditional hosting**: Upload via FTP

### Steps for Netlify (Easiest):
1. Go to netlify.com
2. Drag workspace folder to deploy
3. Get instant live URL
4. Add custom domain (optional)

### Steps for GitHub Pages:
1. Create GitHub repository
2. Push all files
3. Enable GitHub Pages in settings
4. Site live at yourusername.github.io/repo-name

## 📞 Need Help?

### Common Questions

**Q: Can I use this commercially?**
A: Yes! This is custom built for PODPEROS.

**Q: Do I need to credit libraries?**
A: Libraries (AOS, Particles.js) are already credited in code comments.

**Q: Can I modify the design?**
A: Absolutely! All code is yours to customize.

**Q: Will this work offline?**
A: Partially. External libraries need internet, but main site works offline.

**Q: How do I update content regularly?**
A: Edit HTML directly, or consider a CMS for frequent updates.

## 🎯 Next Steps

### Essential:
- [ ] Add your actual logo
- [ ] Update contact information
- [ ] Review and customize all text content
- [ ] Test on real mobile devices

### Recommended:
- [ ] Add Google Analytics
- [ ] Set up contact form
- [ ] Add social media links
- [ ] Create age verification popup
- [ ] Add actual product images

### Advanced:
- [ ] Connect to backend/CMS
- [ ] Add product inventory system
- [ ] Implement location finder
- [ ] Set up newsletter system
- [ ] Create admin dashboard

## 🔥 Pro Tips

1. **Update Products Regularly** - Keep the "new arrivals" section fresh
2. **Use Real Photos** - Replace placeholder colors with actual product photos
3. **A/B Test CTAs** - Try different call-to-action text
4. **Monitor Analytics** - See what products get most attention
5. **Mobile First** - Most users will visit on phones
6. **Speed Matters** - Keep load time under 3 seconds
7. **Legal Compliance** - Ensure age restriction is prominent
8. **Social Proof** - Add customer reviews/testimonials

## ✅ Launch Checklist

Before going live:
- [ ] All content reviewed and spell-checked
- [ ] Contact information updated
- [ ] Logo added
- [ ] Tested on mobile, tablet, desktop
- [ ] Tested in Chrome, Firefox, Safari
- [ ] All links work
- [ ] Social media links added (if applicable)
- [ ] Age restriction notice visible
- [ ] Legal disclaimers added
- [ ] Analytics installed
- [ ] Favicon added
- [ ] Meta tags for SEO added
- [ ] SSL certificate configured

## 📚 Resources

### Learn More:
- **HTML/CSS**: MDN Web Docs (developer.mozilla.org)
- **JavaScript**: JavaScript.info
- **AOS Library**: michalsnik.github.io/aos
- **Particles.js**: vincentgarreau.com/particles.js

### Design Inspiration:
- **Dribbble**: dribbble.com (search "nicotine pouch" or "modern landing page")
- **Awwwards**: awwwards.com
- **Behance**: behance.net

### Tools:
- **Color Picker**: coolors.co
- **Font Pairing**: fontpair.co
- **Image Compression**: tinypng.com
- **SVG Editor**: boxy-svg.com

---

**Need more help?** Check the main `README.md` for detailed documentation.

**Ready to launch?** 🚀 Just open `index.html` and you're live (locally)!

*Vždy pod peros. Vždy čerstvé.* 🔥
