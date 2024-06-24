build: build/index.js build/style.css

build/index.js: src/*.tsx
	bun build --minify src/index.tsx --outfile build/index.js

build/style.css: src/input.css
	bunx tailwindcss -i src/input.css -o build/style.css --minify

tailwind:
	bunx tailwindcss -i src/input.css -o build/style.css --watch --minify

clean:
	rm build/*
