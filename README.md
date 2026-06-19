# FullStackX — Landing Page

A production-ready, fully responsive landing page for the **FullStackX** AI-First Software Engineering Accelerator.

## 🚀 Quick Start (Local)

No build tools or dependencies required — it's a pure static site.

### Option 1 — Open directly in browser
```bash
# Clone the repo (if you haven't already)
git clone https://github.com/sachinmait/fullstackx-landing-page.git
cd fullstackx-landing-page

# Open index.html in your default browser
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows
```

### Option 2 — Serve with Python (recommended for accurate local behaviour)
```bash
cd fullstackx-landing-page
python3 -m http.server 8080
# Visit http://localhost:8080
```

### Option 3 — Serve with Node.js `http-server`
```bash
npx http-server -p 8080
# Visit http://localhost:8080
```

## 📁 File Structure

```
fullstackx-landing-page/
├── index.html    # Main HTML — all sections and content
├── styles.css    # Responsive styles, design tokens, layout
├── script.js     # Navbar toggle, smooth scroll, fade-in animations
└── README.md     # This file
```

## 📋 Sections

| Section | Description |
|---|---|
| **Hero** | Headline, stats, and CTA buttons |
| **Overview** | Course description and tools used |
| **Who It's For** | Target audience cards |
| **Philosophy** | AI-First 3-phase philosophy |
| **Learning Outcomes** | 8 concrete learning outcomes |
| **Curriculum** | 6-week, 10-module timeline |
| **Final Outcome** | What learners leave with |
| **Contact** | Faculty contact details |

## 🎨 Design

- Color palette: deep indigo + cyan accent + emerald highlights
- Fully responsive: mobile, tablet, desktop
- Sticky navbar with active link tracking
- Smooth-scroll anchor links
- Intersection Observer fade-in animations
- Accessible: semantic HTML, ARIA labels, focus styles

## 📬 Contact

| Name | Role | Phone | Email |
|---|---|---|---|
| Dr. Bhoomi Gupta | HoD – ITE | 9990111970 | bhoomigupta@mait.ac.in |
| Prof. (Dr.) Sachin Gupta | Dean, Research and Innovation | 9811468541 | deanresearch@mait.ac.in |
