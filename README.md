# 📺 YouTube Clone

A browser-based YouTube homepage clone built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies.

---

## 🔗 Live Demo

👉 [Live Link](https://ashutosht0210.github.io/YouTube-Clone/)

---

## 📁 Project Structure

```
YouTube-Clone/
├── README.md           # Readme File
├── index.html          # Main HTML file (navbar, sidebar, video grid)
├── style.css           # All styling (dark theme, grid, sticky elements)
├── app.js              # Video data array + dynamic card generation
└── Resources/
    └── yt-logo.png     # YouTube logo image
```

---

## 🚀 Getting Started

No build step or server required. Just open the file:

```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Serve locally with VS Code Live Server
# Right-click index.html → Open with Live Server
```

---

## ⚙️ How It Works

### `index.html`
The main layout — contains the navbar, sticky sidebar, suggestion filter bar, and an empty `.video-section` div that gets populated by JavaScript.

### `style.css`
Handles all the styling:
- Fixed navbar at the top
- Sticky sidebar that stays in view while scrolling
- Sticky suggestion bar below the navbar
- Responsive video grid that adjusts columns based on screen width

### `app.js`
Stores video data as an array of objects and dynamically injects video cards into `.video-section`:

```js
const videos = [
  {
    title: "Video Title",
    channel: "Channel Name",
    views: "1M views",
    time: "2 days ago",
    thumbnail: "https://picsum.photos/seed/1/400/225"
  },
  // ...
]
```

Each object is looped over and injected as an HTML card using `innerHTML`. To add more videos, just add a new object to the array.

---

## ✨ Features

- 📌 Sticky navbar and sidebar — stays in place while scrolling
- 📌 Sticky suggestion/filter bar below the navbar
- 🎨 Dark theme matching YouTube's UI
- 🔲 Responsive video grid (1 → 2 → 3 columns)
- ⚡ Video cards dynamically generated from a JavaScript array
- 🖱️ Hover effects on sidebar icons and video cards

---

## 📐 Responsive Behaviour

| Screen Width | Columns |
|---|---|
| < 768px | 1 column |
| 768px – 1300px | 2 columns |
| > 1300px | 3 columns (locked) |

---

## 🛠️ Customisation

| What | Where | How |
|---|---|---|
| Add/change videos | `app.js` | Add a new object to the `videos` array |
| Change thumbnail | `app.js` | Update the `thumbnail` URL in each object |
| Change grid columns | `style.css` | Edit `grid-template-columns` in `.video-section` |
| Change sidebar icons | `index.html` | Replace `<i>` or `<svg>` inside each sidebar div |
| Change colour scheme | `style.css` | Edit background colours (`#0f0f0f`, `#121212`, `#212121`) |

---

## 🌐 External Dependencies

All loaded via CDN — no installation needed:

| Resource | Purpose |
|---|---|
| [Font Awesome 7](https://fontawesome.com/) | Icons (search, mic, bell, user, sidebar) |
| [YouTube Favicon](https://youtube.com) | Browser tab icon |
| [Picsum Photos](https://picsum.photos) | Placeholder thumbnail images |

---

## 📌 Known Limitations

- No real video data — thumbnails and titles are hardcoded placeholders.
- No search functionality yet.
- No video player page — clicking thumbnails does nothing.

---

## 🗺️ Planned Features

- [ ] YouTube Data API v3 integration for real videos
- [ ] Search functionality
- [ ] Video player page
- [ ] Shorts section

---

## 📄 License

This project is a personal/educational clone of YouTube's homepage. Not affiliated with or endorsed by Google or YouTube.
