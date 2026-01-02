# Image Dimensions Guide

## 📐 Standardized Image Dimensions

All images should be optimized and properly sized for consistent display across the website.

---

## 🪟 Service Card Images (Homepage)

**Location**: `images/services/[service-name]/[service-name]-window1.jpeg`

**Dimensions**: 
- **Recommended**: 800×600px (4:3 aspect ratio)
- **Minimum**: 600×450px
- **Maximum**: 1200×900px

**Used in**:
- Homepage service cards
- Service page hero sections (same image)

**Files Needed**:
- `images/services/double-hung-windows/double-hung-window1.jpeg`
- `images/services/single-hung-windows/single-hung-window1.jpeg`
- `images/services/casement-windows/casement-window1.jpeg`
- `images/services/awning-windows/awning-window1.jpeg`
- `images/services/sliding-windows/sliding-window1.jpeg`
- `images/services/picture-windows/picture-window1.jpeg`
- `images/services/bay-bow-windows/bay-bow-window1.jpeg`
- `images/services/special-shape-windows/special-shape-window1.jpeg`

---

## 🏠 About Section Image

**Location**: `images/about-section-image.jpeg`

**Dimensions**:
- **Recommended**: 800×1000px (4:5 aspect ratio)
- **Minimum**: 600×750px
- **Maximum**: 1200×1500px

**Used in**: Homepage about section

---


## 🎨 Service Hero Images (Service Pages)

**Note**: Uses the same image as service card images (see above)

**Location**: Same as service card images
- `images/services/[service-name]/[service-name]-window1.jpeg`

**Dimensions**: Same as service card images (800×600px recommended)

**Display**: 4:5 aspect ratio container (image will be cropped to fit)

---

## ✅ Image Quality Checklist

- [ ] All service card images are 800×600px (4:3 ratio)
- [ ] About section image is 800×1000px (4:5 ratio)
- [ ] Images are optimized (compressed) to < 300KB each
- [ ] Images are in JPEG format (.jpeg)
- [ ] All images use consistent lighting and style
- [ ] Images are sharp and in focus
- [ ] No watermarks or text overlays

---

## 🔧 CSS Image Handling

All images are set to:
- `object-fit: cover` - Ensures images fill their containers
- `width: 100%` and `height: 100%` - Fills container completely
- Proper aspect ratios enforced via CSS

Images will automatically:
- Fill their containers completely
- Maintain aspect ratios
- Crop if necessary to fit (centered)
- Display consistently across all devices

---

## 📱 Responsive Behavior

- **Desktop**: Images display at full size in their containers
- **Tablet**: Images scale proportionally
- **Mobile**: Images maintain aspect ratios, may be cropped slightly

All images are optimized with `loading="lazy"` for better performance.

