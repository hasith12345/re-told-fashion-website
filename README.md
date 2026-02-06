# reTold - Modern Fashion Brand Website

A light-themed, minimalist fashion brand website for reTold, featuring a collection of editorial pieces designed for creative professionals and fashion enthusiasts.

## 🎨 Design Philosophy

- **Light Theme**: Clean, off-white backgrounds with subtle grays
- **Minimalist Aesthetic**: Elegant serif typography (Playfair Display) paired with clean sans-serif body text (Inter)
- **Editorial Style**: Magazine-quality photography and storytelling-focused content
- **Premium Feel**: Soft shadows, subtle hover effects, and smooth transitions

## 📁 Project Structure

```
/app
  ├── page.tsx              # Landing page with hero and collection grid
  ├── layout.tsx            # Root layout with metadata
  ├── globals.css           # Global styles and design tokens
  ├── not-found.tsx         # 404 page
  └── cloth/[id]/page.tsx   # Dynamic product detail page

/components
  ├── navbar.tsx            # Navigation bar (sticky, responsive)
  ├── cloth-card.tsx        # Reusable product card component
  └── image-gallery.tsx     # Interactive image gallery with thumbnails

/lib
  └── cloth-data.ts         # Product data and utilities

/public
  ├── minimalist-drape.jpg
  ├── structured-form.jpg
  └── editorial-essence.jpg
```

## 🎯 Key Features

### Landing Page (`/`)
- Full-screen hero section with brand statement
- Collection grid showcasing 3 editorial pieces
- Brand philosophy section (3 columns)
- Sticky navigation bar
- Dark footer with links

### Product Detail Page (`/cloth/[id]`)
- Large hero image with multi-image gallery
- Interactive thumbnail selector
- Complete product story and description
- Detailed sections: Inspiration, Fabric, Silhouette, Purpose
- Related products carousel
- Back navigation

### Components

**Navbar**
- Responsive (hamburger menu on mobile)
- Sticky positioning
- Clean typography with tracking
- Logo and navigation links

**ClothCard**
- Image preview with hover zoom effect
- Product name and teaser text
- Clickable card that navigates to detail page
- Smooth transitions

**ImageGallery**
- Main image display
- Thumbnail selector for multiple views
- Smooth image transitions

## 🎨 Color System

- **Background**: 99% white (#FAFAF8)
- **Foreground**: 10% black (#1A1A1A)
- **Secondary**: 95% gray (#F2F2F0)
- **Muted**: 92% gray (#EAEAE8)
- **Accent**: 85% gray (#D9D9D6)

## 🔤 Typography

- **Headings**: Playfair Display (serif) - elegant, editorial
- **Body**: Inter (sans-serif) - clean, modern
- **Tracking**: Wide letter spacing for a premium feel

## ✨ Animations

- **Fade In**: 0.6s ease-out for content reveals
- **Slide Up**: 0.6s ease-out for upward motion
- **Scale on Hover**: Images scale up slightly on card hover
- **Smooth Transitions**: All interactive elements have smooth color/opacity transitions

## 📱 Responsive Design

- **Mobile First**: Designed for small screens first
- **Breakpoints**: sm (640px), md (768px), lg (1024px)
- **Touch Friendly**: Large touch targets and readable text
- **Flexible Layouts**: Grid adjusts from 1 column (mobile) to 3 columns (desktop)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
# http://localhost:3000
```

## 📦 Dependencies

- Next.js 16
- React 19
- Tailwind CSS 3
- Google Fonts (Playfair Display, Inter)

## 🎯 Pages

| Page | Route | Description |
|------|-------|-------------|
| Landing | `/` | Home page with collection |
| Minimalist Drape | `/cloth/minimalist-drape` | Product detail |
| Structured Form | `/cloth/structured-form` | Product detail |
| Editorial Essence | `/cloth/editorial-essence` | Product detail |
| Not Found | `/*` | 404 page |

## 💡 Customization

### Update Products
Edit `/lib/cloth-data.ts` to modify:
- Product names and descriptions
- Gallery images
- Product stories and details

### Change Colors
Edit the CSS variables in `/app/globals.css`:
```css
:root {
  --background: 0 0% 99%;
  --foreground: 0 0% 10%;
  /* ... other colors */
}
```

### Add New Pages
Create new route folders in `/app` following Next.js app router conventions.

## 📄 License

This is a student assignment project created with v0.

---

**reTold** - Stories Stitched Into Form
