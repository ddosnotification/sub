# 🔴 PODPEROS - Nikotínové Vrecúška z Automatu

Modern, responsive website for Podperos - a Slovak company providing nicotine pouches through vending machines.

## 🎨 Design Features

### Brand Identity
- **Name**: "Podperos" (Slovak for "under lips")
- **Colors**: Red & Pink gradient theme (#ff1744, #ec407a, #d81b60)
- **Style**: Modern, trendy, edgy with playful branding
- **Target**: Young adults looking for convenient nicotine pouch access

### Key Visual Elements
- 💋 Lip imagery and iconography
- 📦 Nicotine pouch product showcases
- 🎨 Gradient orbs and dynamic backgrounds
- ✨ Smooth animations and transitions
- 📱 Fully responsive design

## 🚀 Features

### 1. Hero Section
- **Massive typography** using Bebas Neue font
- Animated gradient orbs in background
- Floating product elements with parallax effect
- Clear CTAs for finding machines and viewing products
- Scroll indicator with mouse animation

### 2. About Section
- **Three key value propositions**:
  - ⚡ Fast & Simple (vending machine convenience)
  - ✨ Always New Flavors (fresh monthly selection)
  - 🕐 24/7 Availability (machines never sleep)
- Brand story emphasizing "pod peros" (under lips) concept
- Partnership with major brands (ZYN, VELO, LYFT, PABLO)

### 3. Products Section
- **Product cards** with flip animations
- Badges (NEW, HOT, POPULAR, EXTREME)
- Multiple strength options
- Top brands showcased:
  - ZYN (Cool Mint, Citrus, Spearmint)
  - VELO (Ice Cool, Berry Frost, Tropical)
  - LYFT (Winter Chill, Ruby Berry, Lime)
  - PABLO (Ice Cold, Exclusive, Banana)

### 4. Special Features
- Vapes & special editions section
- Regular updates info
- Cashless payment options

### 5. Locations Section
- City-by-city vending machine locations
- Interactive map placeholder
- Contact CTA for detailed locations

### 6. Contact Section
- Contact form with submission animation
- Social media links (Instagram, Facebook, TikTok)
- Email and phone information

## 🛠 Technical Stack

### Frontend Technologies
- **HTML5**: Semantic markup
- **CSS3**: Modern features (Grid, Flexbox, Custom Properties, Animations)
- **Vanilla JavaScript**: No framework dependencies
- **External Libraries**:
  - [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) - Scroll animations
  - [Font Awesome 6](https://fontawesome.com/) - Icons
  - [Google Fonts](https://fonts.google.com/):
    - Bebas Neue (Display titles)
    - Poppins (Body text)
    - Space Grotesk (Alternative)

### Key Features Implemented
- ✅ Smooth scroll with offset for fixed navbar
- ✅ Mobile hamburger menu with slide-in animation
- ✅ Scroll progress bar
- ✅ 3D tilt effect on product cards
- ✅ Parallax scrolling effects
- ✅ Age verification popup (18+)
- ✅ Typing effect for tagline
- ✅ Scroll-to-top button
- ✅ Form validation and submission animation
- ✅ Intersection Observer for performance
- ✅ Debounced scroll events
- ✅ Mouse parallax on floating elements

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1200px+ (Full experience)
- **Laptop**: 968px - 1199px (Adjusted spacing)
- **Tablet**: 768px - 967px (Mobile menu, stacked layouts)
- **Mobile**: < 768px (Single column, touch-optimized)
- **Small Mobile**: < 480px (Optimized for small screens)

### Mobile Optimizations
- Hamburger menu with smooth slide-in
- Touch-friendly button sizes
- Optimized font sizes
- Single-column layouts
- Reduced animations for performance

## 🎯 Browser Support

- ✅ Chrome (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Edge (90+)
- ✅ Opera (76+)

## 🚀 Getting Started

### Installation

1. Clone or download this repository
2. No build process required - pure HTML/CSS/JS
3. Open `index.html` in a browser or serve via HTTP server

### Local Development

#### Using Python (recommended):
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Using Node.js:
```bash
npx http-server
```

#### Using PHP:
```bash
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## 📂 Project Structure

```
podperos/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles (includes responsive)
├── js/
│   └── script.js       # All JavaScript functionality
├── images/
│   └── logo.png        # Company logo (add your own)
└── README.md           # This file
```

## 🎨 Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-red: #ff1744;
    --primary-pink: #ec407a;
    --dark-pink: #d81b60;
    --deep-pink: #c51162;
    --dark-bg: #0a0a0a;
    /* ... more variables ... */
}
```

### Logo
Replace `images/logo.png` with your own logo. Recommended size: 200x80px (transparent PNG)

### Content
Edit text directly in `index.html`. All content is in Slovak language.

### Adding Products
Copy and paste the `.product-card` structure in the products section:
```html
<div class="product-card" data-aos="flip-left">
    <!-- Product content -->
</div>
```

## ⚠️ Legal Compliance

### Age Verification
- 18+ age gate implemented on first visit
- Stored in localStorage
- Redirect to Google if user is under 18

### Disclaimers
- "Nikotín je návyková látka" (Nicotine is addictive)
- "Produkty len pre 18+" (Products only for 18+)
- Warnings displayed in footer and throughout site

## 🔧 Maintenance

### Adding New Locations
Update the `.location-card` elements in the Locations section.

### Updating Products
Modify product cards in the Products section with new brands/flavors.

### Social Media Links
Update hrefs in the Contact section:
```html
<a href="https://instagram.com/podperos.sk" class="social-link">
    <i class="fab fa-instagram"></i>
</a>
```

## 🎭 Animations

### Scroll Animations (AOS)
- Fade in/up/down/left/right
- Flip left/right
- Zoom in/out
- Custom delays for staggered effects

### Custom Animations
- Floating elements (product pouches)
- Gradient orb movement
- Parallax scrolling
- 3D card tilt on hover
- Typing effect for tagline
- Badge pulse animations

## 📊 Performance

### Optimizations Implemented
- ✅ Intersection Observer for lazy loading
- ✅ Debounced scroll events
- ✅ CSS transforms for animations (GPU accelerated)
- ✅ Minimal external dependencies
- ✅ Optimized images (fallback SVGs)

### Lighthouse Scores (Target)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## 🌐 Deployment

### Static Hosting Options
- **Netlify**: Drag & drop deployment
- **Vercel**: GitHub integration
- **GitHub Pages**: Free hosting
- **Firebase Hosting**: Google's hosting solution
- **Any web server**: Upload via FTP/SFTP

### No Build Process Required
This is a static site with no dependencies or build steps.

## 📝 TODO / Future Enhancements

- [ ] Add actual Google Maps integration for locations
- [ ] Backend form submission (currently client-side only)
- [ ] Product inventory management system
- [ ] Real-time machine availability status
- [ ] Multi-language support (English version)
- [ ] Dark/Light theme toggle (currently dark only)
- [ ] E-commerce integration
- [ ] Newsletter signup
- [ ] Blog/News section
- [ ] Virtual machine tour (3D visualization)

## 🤝 Contributing

This is a custom website for Podperos. For modifications:
1. Test on multiple devices and browsers
2. Maintain Slovak language content
3. Keep the red/pink brand colors
4. Ensure 18+ compliance remains intact

## 📄 License

Copyright © 2025 Podperos. All rights reserved.

## 🆘 Support

For technical support or questions:
- Email: info@podperos.sk
- Instagram: @podperos.sk

---

**Built with ❤️ for Podperos**

*Pod perami, nad očakávaniami!* 🔴💋
