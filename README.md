# Google Clone 2.0 with Tailwind CSS & NEXT.JS

## reference

- [Sonny Sangha - Let's build Google 2.0 with Tailwind CSS & NEXT.JS! (Responsive, SSR React, Pagination)](https://www.youtube.com/watch?v=24xpTmaPOdY)

## Recommended Extension

- [Tabnine AI Code Completion](https://www.tabnine.com/welcome)

## install

- [nextjs](https://nextjs.org/docs/getting-started)

```sh
> npx create-next
# or
> yarn create next-app
```

- [Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs)

```sh
# If you're on Next.js v10 or newer
> yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest

> npx tailwindcss init -p
```

```js
// tailwind.config.js
module.exports = {
	mode: 'jit', // https://tailwindcss.com/docs/just-in-time-mode
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
```
