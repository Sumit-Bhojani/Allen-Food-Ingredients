# Allen Food Ingredients Website

Premium food ingredients website built with **React + Vite** (frontend) and **Node.js + Express** (backend).

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Install Dependencies
```bash
# Install client dependencies
cd client && npm install

# Install server dependencies  
cd ../server && npm install
```

### Run Development Server
```bash
# Start frontend (from project root)
npm run dev
# → Opens at http://localhost:5173

# Start backend (in a separate terminal)
npm run server
# → Runs on http://localhost:5000
```

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
Allen Food Ingredients/
├── client/                  # React Frontend (Vite)
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   └── WhatsAppButton.jsx
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── ProductCategory.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Certifications.jsx
│   │   ├── data/            # Static data
│   │   │   ├── products.js
│   │   │   └── content.js
│   │   ├── App.jsx
│   │   └── index.css
│   └── package.json
├── server/                  # Node.js Backend (Express)
│   ├── routes/
│   │   └── contact.js
│   ├── index.js
│   ├── .env
│   └── package.json
├── package.json
└── README.md
```

## 🎨 Features
- Modern responsive design with Playfair Display + Inter fonts
- Animated sections with Framer Motion
- 8 product categories with 40+ individual products
- Contact form with validation
- WhatsApp chat widget
- Sticky navigation with dropdown menus
- Mobile-responsive hamburger menu
- Smooth scroll-to-top on page navigation
- SEO-friendly page structure

## 🛠 Tech Stack
- **Frontend:** React 18, Vite, React Router, Framer Motion
- **Backend:** Node.js, Express, Nodemailer
- **Styling:** CSS3 with custom properties (CSS variables)
- **Icons:** React Icons (Feather + Font Awesome)
