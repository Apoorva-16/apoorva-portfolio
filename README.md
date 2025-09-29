Portfolio site for Apoorva Reddy

What this includes

- `index.html` — single-page portfolio with sections for About, Experience, Projects, Skills, and Contact.
- `resume.html` — a print-friendly resume page mirroring the supplied resume content.
- `styles.css` — styling and print overrides.
- `script.js` — small JS for mobile navigation.

How to preview locally

Open the files in a browser. From the project folder you can run a lightweight static server, for example:

# if you have Python 3 installed
python3 -m http.server 8000

Then open http://localhost:8000 in your browser and navigate to `index.html`.

Customizing content

Edit `index.html` and `resume.html` to update contact links, LinkedIn URL, or project details. The CSS is simple and easy to change in `styles.css`.

Next steps (suggested)

- Add project pages or case-studies and links to code repos.
- Add analytics or contact form (requires backend).
- Deploy to GitHub Pages or Netlify for a public URL.

What's new (animations & photo)

- The hero now includes small animations: fade-in reveals, a typing line of rotating phrases, and a subtle floating profile photo.
- A placeholder SVG profile image is at `assets/photo.svg`. Replace it with your own photo (use a square PNG/JPG/SVG named `photo.svg` or update the `src` in `index.html`).

Tips to replace the photo

- Copy your photo into the `assets/` folder and name it `photo.jpg` (or `photo.png`). Then update the `<img>` src in `index.html`.
- For best results use a square image at least 320x320px and compress it to a reasonable size for faster load.
