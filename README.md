# Personal Positioning & Discovery Website

A strategic personal platform designed to position the owner as a senior technical operator and systems thinker. Built according to PRD specifications with a focus on judgment over credentials, decisions over timelines, and signal over noise.

## Project Status

**Phase 0 – Definition & Scaffold** ✓

- [x] Finalize structure
- [x] Deploy v0 with placeholders

**Phase 1 – Content Depth** (Next)

- [ ] Populate Journey entries with real decisions
- [ ] Add case studies with actual projects
- [ ] Write initial essays

## Quick Start

This is a static site with no build step required. To run locally:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Project Structure

```
theo-site/
├── index.html              # Homepage - authority + point of view
├── css/
│   └── style.css           # Design system + all styles
├── js/
│   └── main.js             # Minimal JS (nav, animations)
└── pages/
    ├── journey.html        # Decision log (reverse-chronological)
    ├── work.html           # Case studies (3-5 max)
    ├── writing.html        # Essays + thought leadership
    ├── engage.html         # Audience-specific contact paths
    ├── simulator.html      # Interactive decision simulator
    └── framing.html        # AI-style problem framing generator
```

## Interactive Features

### Decision Simulator (`/pages/simulator.html`)
An interactive tool that lets visitors experience real decisions you've faced:
- 5 scenario-based challenges with constrained choices
- Visitors make their call, then see your choice and reasoning
- Calibration score shows alignment with your thinking
- Demonstrates judgment without passive reading

**To customize:** Edit the `scenarios` array in the `<script>` section with your actual decisions.

### Problem Framing Generator (`/pages/framing.html`)
A tool that demonstrates your technical thinking by decomposing visitor problems:
- Visitors describe their problem in 2-3 sentences
- Pattern detection routes to relevant framing templates
- Shows: reframe, key questions, architecture patterns, system sketch, risks
- Pre-qualifies inbound by demonstrating value before conversation

**To customize:** Edit the `templates` object with your own framing patterns and examples.

**To add AI:** Replace the pattern-matching with an actual LLM API call for dynamic, personalized responses.

## Design Principles

Per the PRD, the design enforces:

1. **Judgment over Credentials** – No résumé format, focus on decisions
2. **Decisions over Timelines** – Why, not when
3. **Depth over Breadth** – 3-5 case studies, not a portfolio dump
4. **Clarity over Marketing** – No jargon, no fluff
5. **Signal over Noise** – Everything serves the goal

## Technical Stack

- **HTML5** – Semantic markup, accessibility-first
- **CSS3** – Custom properties, no framework
- **Vanilla JS** – Minimal, progressive enhancement
- **Fonts** – Instrument Serif (display) + DM Sans (body)

Intentionally boring. No build tools, no dependencies, no maintenance burden.

## Deployment

Deploy to any static hosting:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the folder
- **GitHub Pages**: Push to `gh-pages` branch
- **Cloudflare Pages**: Connect repo

## Content Guidelines

### Journey Entries

Each entry should include:
- **Context**: Problem space at the time
- **Constraints**: Technical, market, time limitations
- **Decision**: What was chosen and why
- **Outcome**: Success, failure, or iteration
- **Insight**: How thinking evolved

### Case Studies

Each case study should include:
- **Problem Framing**: Business + technical problem
- **System Architecture**: High-level overview
- **Key Tradeoffs**: What was explicitly excluded
- **Current Status**: Live, paused, killed, evolving

### Writing

Essays should be:
- Short-form (5-10 minute read)
- Opinionated with clear stance
- Technical or product-focused
- Meant to start conversations

## Customization

### Update Contact Info

Search and replace these placeholder emails:
- `theo@example.com` → your general email
- `recruiting@example.com` → role inquiries
- `founders@example.com` → project inquiries  
- `diligence@example.com` → investor inquiries
- `hello@example.com` → general inquiries

### Update Social Links

In all HTML files, update:
- LinkedIn URL
- GitHub URL
- Any other profiles

### Update Domain

In `index.html`, update:
- `og:url` meta tag
- `canonical` link

## Color Customization

All colors are defined in CSS custom properties in `style.css`:

```css
:root {
  --color-bg: #FAFAFA;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #666666;
  /* ... */
}
```

Dark mode is automatically supported via `prefers-color-scheme`.

## Performance

Target metrics:
- First Contentful Paint: < 1s
- Largest Contentful Paint: < 2s
- Total page weight: < 100KB (excluding fonts)

## Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast WCAG AA compliant
- Reduced motion support (respects `prefers-reduced-motion`)

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## License

Private. All rights reserved.

---

> "If the site ever feels complete, it is likely obsolete."

This is a long-lived asset. Iterate publicly. Ship early.
