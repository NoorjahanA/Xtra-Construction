# XTRA Construction – Home Page (React)

A recreation of the **XTRA Construction 2** demo site
(<https://xtratheme.com/elementor/construction-2/>), written from scratch.
The home page is complete. The menu links also open real pages (About, Services, FAQ, Contact),
because the original site works that way.

## Technology used
- **React 18** (function components, `useState`, `useEffect`)
- **HTML5** and **CSS3** (plain CSS with Flexbox, Grid, media queries, keyframes)
- **JavaScript (ES6+)**
- Helpers: **Vite** (dev server and build), **react-router-dom** (page links), **react-icons** (icons)

## Dependencies
| Package | Why |
|---|---|
| react, react-dom | the UI |
| react-router-dom | moving between pages without reloading |
| react-icons | icons |
| vite, @vitejs/plugin-react (dev) | dev server and build |

## Installation
```bash
npm install
cp .env.example .env     # optional
```

## Development command
```bash
npm run dev      # opens http://localhost:5173
```

## Build command
```bash
npm run build    # creates the /dist folder
npm run preview  # try the production build locally
```

## Deployment
**Vercel:** import the GitHub repo. Framework = Vite, build command `npm run build`, output `dist`.
`vercel.json` is already included, so refreshing on `/about` works.
**Netlify:** build command `npm run build`, publish directory `dist`. `public/_redirects` handles refreshes.

## Environment configuration
| Variable | Required | What it does |
|---|---|---|
| `VITE_FORM_ENDPOINT` | no | URL the forms send data to (for example a Formspree link). If empty, the form pretends to send. |

## Brief API documentation
There is no backend. The forms (home, FAQ, Contact) send one request when `VITE_FORM_ENDPOINT` is set:

`POST <VITE_FORM_ENDPOINT>` with `Content-Type: application/json`
```json
{ "name": "…", "email": "…", "subject": "…", "department": "…", "message": "…" }
```
A `2xx` answer shows the success message, anything else shows an error message.

## Folder structure
```
src/
  main.jsx            starts the app
  App.jsx             list of pages (routes), page fade-in, scroll animations
  data.js             ALL text and lists of the website (edit content here)
  components/         pieces used on many pages (Header, Footer, ContactForm, ...)
  sections/           the sections of the home page (Hero, Features, About, ...)
  pages/              one file per page (Home, About, Services, Faq, Contact)
  styles/
    base.css          colours, reset, buttons, shared animations
    header-footer.css header, menu, search, footer
    home.css          home page sections and forms
    pages.css         About, Services, FAQ and Contact pages
public/images/        all photos and logos
```

## How the main features work
- **Menu / dropdown:** CSS shows the dark dropdown on hover. On mobile the menu slides in and "Pages" opens on tap.
- **Hero slider:** `useState` stores the slide number; a timer changes it every 7 seconds; arrows change it too.
- **Scroll fade-in:** any element with class `fade` gets class `show` when it scrolls into view (`App.jsx`).
- **Hover cards, tiles and projects:** pure CSS `:hover` rules.
- **FAQ accordion:** `useState` remembers which question is open.

## Assumptions
- Colours are `#f4c03b` (yellow) and `#243344` (navy), measured from the reference.
- The Blog, Shop, Cart and similar links open a simple "not built yet" page, since only the home page was requested.
- The original's Envato promo bar and floating demo sidebar belong to the demo site, so they are left out.

## Known limitations
- The 8 project photos and the testimonial avatars were not visible in the reference screenshots (they load late), so project tiles reuse crops of the other photos and avatars show initials. Replace `public/images/project-1.jpg … project-8.jpg` with your own.
- The video popup uses a sample YouTube id. Change `VIDEO_ID` in `src/data.js`.
- The contact map is an OpenStreetMap embed (no API key), styled grey with CSS.
- The forms only send real mail when you add a form-service URL.
