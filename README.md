# Development Setup Notes

## Tailwind CSS Configuration

This project currently uses Tailwind CSS via CDN for development purposes. 

### For Development:
- All Tailwind classes are available immediately
- No build step required
- Custom configuration is in `public/index.html`

### For Production:
1. Install Tailwind properly:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

2. Update build scripts in `package.json` to:
```json
"build": "tailwindcss -i ./src/input.css -o ./public/css/main.css --minify",
"build:watch": "tailwindcss -i ./src/input.css -o ./public/css/main.css --watch"
```

3. Remove the CDN script from `index.html` and use the built CSS file instead
