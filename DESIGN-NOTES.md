# 🎨 PODPEROS - Design & Branding Notes

## 🎯 Design Philosophy

### Core Concept: "Pod Peros" (Under Lips)
The entire brand identity revolves around the Slovak phrase "pod peros" (under lips), which is:
1. **Literally** where nicotine pouches go
2. **Memorably** a play on words in Slovak
3. **Visually** represented through lip imagery throughout

### Visual Language

#### Color Psychology
- **Red (#ff1744)**: Energy, passion, attention-grabbing
- **Pink (#ec407a)**: Youth, modernity, approachability  
- **Gradient**: Movement, innovation, freshness

#### Typography Choices
- **Bebas Neue**: Bold, impactful, street-style headers
- **Poppins**: Clean, modern, highly readable body text
- **Space Grotesk**: Alternative for technical elements

## 🎬 Animation Strategy

### Hero Section
```
EFFECT: Massive floating orbs create depth
REASON: Establishes premium, modern feeling
TIMING: 20s loop with 7s offsets for organic movement
```

### Product Cards
```
EFFECT: 3D tilt on hover + scale up
REASON: Makes products feel tangible and interactive
TRIGGER: Mouse position tracking
```

### Scroll Animations
```
LIBRARY: AOS (Animate On Scroll)
EFFECTS:
- fade-up: About cards
- flip-left: Product cards (staggered)
- zoom-in: Feature boxes
- fade-right/left: Split content sections
```

## 📐 Layout Principles

### Grid System
- **Desktop**: 3-4 columns for cards
- **Tablet**: 2 columns
- **Mobile**: 1 column stacked

### Spacing Scale
```css
--space-xs: 10px
--space-sm: 20px
--space-md: 40px
--space-lg: 60px
--space-xl: 80px
--space-2xl: 100px
```

### Breakpoints
```css
Mobile:    < 480px  (Single column, large touch targets)
Tablet:    < 768px  (2 columns, reduced spacing)
Laptop:    < 968px  (Mobile menu, 2-3 columns)
Desktop:   < 1200px (Full layout, 3-4 columns)
Wide:      1200px+  (Max content width)
```

## 🎨 Component Design

### Hero Section Design
```
┌─────────────────────────────────────────────┐
│  [Logo]              [Nav Menu]      [☰]   │
├─────────────────────────────────────────────┤
│                                             │
│  POD                  ╭─ Floating Pouch    │
│  PEROS                │                     │
│  [gradient]           💋 Lip Icon          │
│                       │                     │
│  Tagline text         ╰─ Floating Pouch    │
│                                             │
│  [Find Machine] [Products]                 │
│                                             │
│           ↓ Scroll indicator                │
└─────────────────────────────────────────────┘
```

### Product Card Design
```
┌─────────────────────┐
│  [NEW]              │  ← Badge (top-right)
│                     │
│    Product Image    │  ← 250px height
│                     │
├─────────────────────┤
│  ZYN                │  ← Large brand name
│  Cool Mint, Citrus  │  ← Flavors
│  [3mg] [6mg]        │  ← Strength badges
└─────────────────────┘
```

### Location Card Design
```
┌──────────────────────────────┐
│  📍  Bratislava              │
│      Centrum, Staré Mesto    │
│      [8 automatov]           │
└──────────────────────────────┘
```

## 🎭 Interactive Elements

### Hover States

#### Buttons
```
Default:  Gradient background, white text
Hover:    Transform up 3px, glow shadow increase
Active:   Scale down 0.98
```

#### Product Cards
```
Default:  Flat, subtle border
Hover:    3D tilt (perspective), pink border, glow
          Scale up 1.02, translateY -10px
```

#### Nav Links
```
Default:  White text
Hover:    Pink color, underline grows from left
Active:   Full underline, pink text
```

### Click Interactions

#### Mobile Menu
```
Hamburger click → Menu slides in from right
Menu background: Dark with backdrop blur
Close: Click hamburger or any nav link
```

#### Age Verification
```
On load (first visit):
→ Full-screen overlay with blur
→ Two buttons: "ÁNO, mám 18+" / "NIE"
→ Yes: Save to localStorage, fade out
→ No: Redirect to Google
```

#### Contact Form
```
Submit → Button text changes to "Odosiela sa..."
       → Disabled state for 1.5s
       → Success message "Odoslané! ✓"
       → Green background flash
       → Reset form after 2s
```

## 🎨 Color Usage Map

### Sections by Color Dominance

```
Hero:      Dark BG + Red/Pink gradient orbs
About:     Dark surface BG + Pink accents
Products:  Dark BG + Red/Pink product badges
Features:  Dark surface BG + Pink icons
Locations: Dark BG + Red location markers
Contact:   Dark surface BG + Pink form accents
Footer:    Dark BG + Pink highlights
```

### Gradient Variations

```css
Primary:   linear-gradient(135deg, #ff1744, #ec407a, #d81b60)
Secondary: linear-gradient(135deg, #c51162, #880e4f)
Hover:     Same gradient with increased opacity
Text:      Gradient applied via background-clip
```

## 📱 Mobile Optimizations

### Touch Targets
- Minimum: 44x44px (Apple guidelines)
- Buttons: 50px height on mobile
- Nav links: 60px height in mobile menu
- Product cards: Full-width, easy tap

### Performance
```
✅ CSS transforms (GPU accelerated)
✅ Debounced scroll events
✅ Intersection Observer for lazy loading
✅ Minimal repaints/reflows
✅ Will-change hints for animations
```

### Mobile-Specific Features
```javascript
// Simplified animations on mobile
if (window.innerWidth < 768) {
    AOS.init({ duration: 600, once: true });
}

// Touch-friendly parallax
// Reduced complexity on smaller screens
```

## 🎯 Brand Voice & Messaging

### Tone
- **Energetic**: Use exclamation marks, dynamic language
- **Youthful**: Slang, casual Slovak expressions
- **Direct**: Clear CTAs, no corporate jargon
- **Bold**: Confident statements about quality

### Key Messages

1. **Convenience**: "24/7", "Rýchle & Jednoduché"
2. **Freshness**: "Vždy nové príchute", "Každý mesiac fresh sortiment"
3. **Quality**: Top brands (ZYN, VELO, LYFT, PABLO)
4. **Innovation**: "Nad očakávaniami", modern vending technology

### Tagline
```
"Pod perami, nad očakávaniami"
(Under lips, above expectations)
```

## 🖼️ Image Strategy

### Required Images

#### Logo
- Format: PNG (transparent) or SVG
- Size: 200x80px @ 2x (400x160px actual)
- Style: Incorporate lip icon + brand name
- Colors: White text + gradient accent

#### Product Images
- Format: JPG or WebP
- Size: 400x300px minimum
- Style: Product packaging on clean background
- Brands: ZYN, VELO, LYFT, PABLO + others

#### Hero Floating Elements
- Pouch containers: 150x200px
- Lip icon: SVG (scalable)
- Style: Real product photos or stylized renders

#### About/Location Images
- Vending machine: 800x600px
- Location photos: 600x400px
- Style: High-quality, modern aesthetic

### Fallback Strategy
```html
<!-- Primary image with SVG fallback -->
<img src="product.jpg" 
     onerror="this.src='placeholder.svg'">

<!-- Data URLs for small graphics -->
<img src="data:image/svg+xml,..." alt="...">
```

## 🎪 Special Effects

### Gradient Orbs
```
Purpose:  Create depth and movement
Implementation:  3 div elements with blur filter
Animation:  Float animation with translate + scale
Colors:  Primary red, pink, dark pink
Opacity:  30% to blend with dark background
```

### Lip Icon SVG
```xml
<svg viewBox="0 0 200 100">
  <path d="M 20 50 Q...Z" fill="#ff1744"/>
  <ellipse opacity="0.5"/>  <!-- inner shine -->
</svg>

Style: Stylized lips, not realistic
Color: Red gradient with darker outline
Animation: Subtle pulse (scale 1.0 to 1.05)
```

### Scroll Progress Bar
```
Position:  Fixed top (0,0)
Height:    3px
Background:  Red-to-pink gradient
Shadow:    Glow effect
Width:     0-100% based on scroll percentage
```

### Floating Particles (Optional)
```javascript
// Currently not implemented, but prepared for:
// - Canvas-based particles
// - Following mouse cursor
// - Pouch/lip shaped particles
```

## 🎓 Accessibility Considerations

### Current Implementation
✅ Semantic HTML5 elements
✅ Alt text for images (with fallbacks)
✅ ARIA labels for icons
✅ Focus states on interactive elements
✅ Sufficient color contrast (white on dark)

### Future Improvements
- [ ] Keyboard navigation testing
- [ ] Screen reader optimization
- [ ] Reduced motion preference support
- [ ] Focus trap in mobile menu
- [ ] Skip to content link

## 🎯 Conversion Optimization

### CTAs (Call-to-Actions)

**Primary CTA**: "Nájdi Automat" (Find Machine)
- Placement: Hero section, prominent
- Style: Gradient button with glow
- Action: Scroll to locations section

**Secondary CTA**: "Naše Produkty" (Our Products)
- Placement: Hero section
- Style: Outline button
- Action: Scroll to products section

**Form CTA**: "Odoslať" (Submit)
- Placement: Contact form
- Style: Full-width gradient button
- Feedback: Animated success message

### Trust Signals
```
✅ Legal disclaimers prominently displayed
✅ Age verification (18+)
✅ Major brand logos (ZYN, VELO, etc.)
✅ Multiple location references
✅ Social proof (product popularity badges)
```

## 📊 Design Metrics

### Loading Performance
- Target First Contentful Paint: < 1.5s
- Target Time to Interactive: < 3s
- Image optimization: WebP + lazy loading
- Font loading: Display swap strategy

### Animation Performance
- 60fps target for all animations
- GPU acceleration for transforms
- Reduced motion on low-end devices
- Debounced scroll events

### Responsive Breakpoints
```
Mobile S:  320px  (iPhone SE)
Mobile M:  375px  (iPhone X)
Mobile L:  425px  (iPhone Plus)
Tablet:    768px  (iPad)
Laptop:    1024px (Standard)
Desktop:   1440px (Full HD)
4K:        2560px (Optional)
```

## 🎨 Style Guide Summary

### DO's ✅
- Use red/pink gradient for primary actions
- Maintain dark background throughout
- Use Bebas Neue for all major headings
- Include lip imagery and iconography
- Keep animations smooth (ease-out-cubic)
- Ensure 44px+ touch targets on mobile
- Display age warnings prominently

### DON'Ts ❌
- Don't use light backgrounds (breaks theme)
- Don't use fonts other than Bebas/Poppins
- Don't add slow/heavy animations
- Don't hide legal disclaimers
- Don't use low-contrast text
- Don't forget mobile optimization
- Don't skip age verification

## 🚀 Future Design Enhancements

### Phase 2 Ideas
- Parallax product showcase
- 3D vending machine visualization
- Interactive flavor selector
- Animated brand introductions
- Video backgrounds in hero
- Particle effects on scroll

### Phase 3 Ideas
- Custom cursor design
- Scroll-triggered animations
- Product comparison tool
- Virtual machine tour
- AR product preview
- Gamification elements

---

## 📐 Design Specifications

### Component Measurements

```css
Navbar Height:       80px (60px mobile)
Hero Min Height:     100vh
Section Padding:     100px vertical (60px mobile)
Card Border Radius:  20-25px
Button Border Radius: 50px (full pill)
Icon Size:           60-80px (medium), 100px (large)
Max Content Width:   1400px
Gutter:              20px (mobile), 40px (desktop)
```

### Shadow System

```css
Card Shadow:     0 10px 40px rgba(0,0,0,0.5)
Glow Shadow:     0 0 30px rgba(255,23,68,0.3)
Hover Shadow:    0 0 50px rgba(255,23,68,0.5)
Button Shadow:   0 5px 20px rgba(255,23,68,0.4)
```

### Z-Index Scale

```css
Background:      0
Content:         1
Floating:        10
Navbar:          1000
Mobile Menu:     1001
Scroll Progress: 9999
Age Popup:       10000
```

---

**Design by**: Cursor AI for Podperos
**Date**: December 2025
**Version**: 1.0
