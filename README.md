# 🔴 PODPEROS - Modern Snus Vending Machine Website

![Status](https://img.shields.io/badge/status-active-success.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Modern, trendy website for PODPEROS - a Slovak company operating vending machines for nicotine pouches (snus) and premium vapes.

## 🎨 Brand Identity

**PODPEROS** (meaning "under lips" in Slovak) is all about:
- 🆕 Always new products and fresh flavors
- ⭐ Top picks from huge brands (VELO, Pablo, White Fox, Siberia, ZYN)
- ⏰ 24/7 availability through vending machines
- 🎯 Modern, trendy, and funny branding

## 🚀 Features

### Design
- **Super Modern Hero Section** - Clean background with wide typography (Anton, Bebas Neue fonts)
- **Red/Pink Color Scheme** - Eye-catching gradient design (#FF0844 to #FF2D87)
- **Lips & Pouch Visuals** - Creative animations and illustrations
- **Responsive Design** - Optimized for mobile and desktop devices
- **Smooth Animations** - Using AOS library for scroll animations

### Sections
1. **Hero** - Bold headline with floating pouch animations
2. **About** - Company values and benefits (24/7, new flavors, premium quality)
3. **Products** - Showcase of top picks with badges (NEW, HOT, SPECIAL)
4. **Why Podperos** - Benefits with animated lips illustration
5. **Location** - Where to find the vending machines + contact form
6. **Footer** - Social media links and quick navigation

### Interactive Features
- Mobile hamburger menu
- Smooth scroll navigation
- Contact form with notifications
- Parallax effects on scroll
- Custom cursor on desktop
- Scroll progress indicator
- Product card hover effects
- Easter egg (Konami code) 🎮
- Keyboard accessibility

## 📁 Project Structure

```
/workspace/
├── index.html          # Main HTML file (Slovak language)
├── css/
│   └── style.css       # All styles (modern, responsive)
├── js/
│   └── main.js         # Interactive features and animations
├── images/             # Logo and product images
│   ├── logo.png        # Company logo (add your own)
│   └── README.md       # Image guidelines
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with CSS Grid, Flexbox, Animations
- **JavaScript (ES6+)** - Interactive features
- **AOS Library** - Animate On Scroll effects
- **Font Awesome** - Icons
- **Google Fonts** - Anton, Bebas Neue, Space Grotesk

## 🎯 Getting Started

### Installation

1. Clone or download this repository
2. Add your `logo.png` to the `images/` folder
3. Open `index.html` in a web browser

### Customization

#### Update Logo
Place your logo file as `images/logo.png` (PNG format, transparent background recommended)

#### Add Product Images
Replace the placeholder product images in the HTML:
```html
<div class="product-placeholder">
    <i class="fas fa-box"></i>
</div>
```
With actual images:
```html
<img src="images/product-name.jpg" alt="Product Name">
```

#### Modify Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-red: #FF0844;
    --primary-pink: #FF2D87;
    --dark-bg: #0A0A0F;
    /* ... more colors */
}
```

#### Update Content
Edit the Slovak text in `index.html` to match your business needs.

## 📱 Responsive Breakpoints

- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: 320px - 767px

## 🌟 Key Design Elements

### Color Palette
- Primary Red: `#FF0844`
- Primary Pink: `#FF2D87`
- Dark Background: `#0A0A0F`
- Darker Background: `#050508`
- Light Text: `#FFFFFF`
- Gray Text: `#B8B8C0`

### Typography
- **Headings**: Anton, Bebas Neue (wide, bold, uppercase)
- **Body**: Space Grotesk (modern, clean, readable)
- **Size Range**: Responsive with `clamp()` function

### Animations
- Fade in on scroll (AOS)
- Floating pouches
- Hover effects on cards
- Smooth page transitions
- Parallax scrolling
- Animated lips illustration

## 🔧 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design Inspiration

The design combines modern web trends:
- Bold typography (similar to Nike, Supreme)
- Gradient overlays (Instagram, Spotify style)
- Card-based layouts (Dribbble, Behance)
- Smooth animations (Apple, Stripe)
- Dark theme with vibrant accents (modern SaaS apps)

## 🚀 Performance

- Lazy loading for images
- Optimized animations (CSS transforms)
- Minimal JavaScript
- Efficient AOS library
- Fast page load times

## 📝 Content Guidelines

All content is in **Slovak language** targeting local market:
- Casual, modern tone
- Focus on convenience and variety
- Emphasis on 24/7 availability
- Age restriction compliance (18+)

## 🤝 Future Enhancements

Potential features to add:
- [ ] Real-time product availability
- [ ] Interactive vending machine map
- [ ] Online ordering/reservation
- [ ] User accounts and loyalty program
- [ ] Integration with payment systems
- [ ] Product reviews and ratings
- [ ] Blog/news section
- [ ] Multi-language support

## ⚠️ Legal Notice

This website is for products intended for adults 18+ only. Comply with local regulations regarding nicotine product sales and advertising.

## 📄 License

Copyright © 2025 PODPEROS. All rights reserved.

---

**Built with ❤️ for PODPEROS**

*Pod pery, nad očakávania.* (Under lips, above expectations.)
