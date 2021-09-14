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
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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

- jit : yarn dev => 바로바로 반영해서 빠른 개발

```js
// styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

```

- [heroicons](https://heroicons.com/)

```sh
> yarn add @heroicons/react
```

## Mobile first design

## Components

- 기능 추가를 위한 component

```js
// components/Avatar
const Avatar = ({ url }) => {
	return (
		<img
			loading="lazy"
			src={url}
			className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
			alt="profile Pic"
		/>
	);
};

export default Avatar;
```

## Image

- image 사용시 url로 가져오는거면 next.config.js 설정 필요 : security

```js
// next.config.js
module.exports = {
	images: {
		domains: ['www.google.co.uk'],
	},
};

// restart server
```

## className command

```js
h;
mr; // margin
cursor - pointer;
focus: outline - none; // focus 됬을때 outline 없이
transition duration: 150 transform hover: scale-110; // 속도 150 변화 / 마우스 올렸을때
flex; // 옆으로 배열
w - full; // width 최대
mt - 5; // margin-top
hidden sm:inline-flex // sm에서 안보인다
flex-grow // size 커지는거 따라서 같이 커진다
border-b-5 // border bottom 5size


<div className="group">
	<div className="group-hover:underline">Click</div>
</div>
```

## [event.preventDefault](https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault)

## useRouter

- url 이동

```js
import { useRouter } from 'next/router';

const Home = () => {
	const router = useRouter();

	return <button onClick={() => router.push('/profile')}>profile</button>;
};

export default Home;
```

## building the Google Front Page

## building the Header Component

## building the Header Option(s) Component

## building the Search Results

- [Google Search API](https://developers.google.com/custom-search/v1/using_rest)

## [tailwind line clamp](https://blog.tailwindcss.com/multi-line-truncation-with-tailwindcss-line-clamp)

```sh
> npm install @tailwindcss/line-clamp
```

```js
// tailwind.config.js
module.exports = {
	// ...
	plugins: [
		// ...
		require('@tailwindcss/line-clamp'),
	],
};

<p className="line-clamp-2">{result.description}</p>;
```
