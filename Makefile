prod/index.js: src/*.tsx
	bun build --minify src/index.tsx --outfile prod/index.js

tailwind:
	bunx tailwindcss -i src/input.css -o prod/style.css --watch --minify
