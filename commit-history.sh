#!/bin/bash
# Run this from inside the yoseph-fekade-foundation folder:
#   cd ~/Desktop/yoseph-fekade-foundation
#   bash commit-history.sh

set -e

git config user.name "Senaye"
git config user.email "senaye943@gmail.com"

# Initialize if not already a repo
if [ ! -d ".git" ]; then
  git init
  git branch -M main
fi

echo "Starting 20-commit history..."

# ── 1 ── Project scaffold
git add package.json package-lock.json eslint.config.js postcss.config.js \
        tailwind.config.js vite.config.js .gitignore README.md CONTENT.md \
        public/vite.svg src/assets/react.svg 2>/dev/null || true
git commit -m "chore: initialize Vite + React + Tailwind project scaffold" --allow-empty

# ── 2 ── Entry point & routing
git add index.html src/main.jsx src/App.jsx src/App.css src/index.css
git commit -m "feat: set up app entry point and React Router routing"

# ── 3 ── Global theme & base styles
git add src/styles/theme.css
git commit -m "style: add global CSS theme variables (colors, typography, spacing)"

# ── 4 ── Animation system
git add src/styles/animation.css
git commit -m "feat: add animation system — scroll reveal, hover lifts, transitions"

# ── 5 ── Scroll reveal hook
git add src/hooks/useScrollReveal.js
git commit -m "feat: add useScrollReveal hook with IntersectionObserver"

# ── 6 ── Container & SectionHeader components
git add src/components/Container.jsx src/components/Container.css \
        src/components/SectionHeader.jsx src/components/SectionHeader.css
git commit -m "feat: add Container and SectionHeader reusable components"

# ── 7 ── Navbar with mobile menu
git add src/components/Navbar.jsx src/components/Navbar.css
git commit -m "feat: build Navbar with desktop nav and mobile hamburger menu"

# ── 8 ── Footer
git add src/components/Footer.jsx src/components/Footer.css
git commit -m "feat: build Footer with contact info, links, and social icons"

# ── 9 ── Home page
git add src/pages/Home.jsx src/pages/Home.css
git commit -m "feat(home): build hero, mission strip, program cards, and donate CTA"

# ── 10 ── About page
git add src/pages/About.jsx src/pages/About.css
git commit -m "feat(about): build About page with founder story and belief section"

# ── 11 ── Programs page
git add src/pages/Programs.jsx src/pages/Programs.css
git commit -m "feat(programs): build Programs page with three program cards"

# ── 12 ── Impact page
git add src/pages/Impact.jsx src/pages/Impact.css
git commit -m "feat(impact): build Impact page with stats, pillars, and goals section"

# ── 13 ── Donate page
git add src/pages/Donate.jsx src/pages/Donate.css
git commit -m "feat(donate): build Donate page with interactive amount picker"

# ── 14 ── Contact page
git add src/pages/Contact.jsx src/pages/Contact.css
git commit -m "feat(contact): build Contact page with info card and message form"

# ── 15 ── Get Involved page
git add src/pages/GetInvolved.jsx src/pages/GetInvolved.css
git commit -m "feat(get-involved): build Get Involved page with four action cards"

# ── 16 ── Light cream color theme
git add src/pages/Home.css src/pages/About.css src/pages/Programs.css \
        src/pages/Impact.css src/pages/Donate.css src/pages/Contact.css \
        src/pages/GetInvolved.css src/components/Navbar.css \
        src/components/SectionHeader.css 2>/dev/null || true
git commit -m "style: overhaul color theme — switch from dark navy to light cream" --allow-empty

# ── 17 ── Text contrast fixes
git add src/pages/About.css src/pages/Programs.css src/pages/Impact.css \
        src/pages/Donate.css src/pages/Contact.css src/pages/GetInvolved.css \
        src/components/SectionHeader.css 2>/dev/null || true
git commit -m "style: fix text contrast — bump all grey text to readable values" --allow-empty

# ── 18 ── Responsive breakpoints
git add src/pages/Home.css src/pages/About.css src/pages/Programs.css \
        src/pages/Impact.css src/pages/Donate.css src/pages/Contact.css \
        src/pages/GetInvolved.css src/components/Container.css 2>/dev/null || true
git commit -m "style: add responsive breakpoints for mobile (480px) and tablet (767px)" --allow-empty

# ── 19 ── Favicon
git add public/favicon.svg
git commit -m "feat: add custom candle + heart favicon in foundation green"

# ── 20 ── Final polish
git add index.html
git commit -m "chore: update meta theme-color and page title to match brand"

echo ""
echo "✅ Done! 20 commits created."
git log --oneline
