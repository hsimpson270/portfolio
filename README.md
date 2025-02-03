# Introduction

Thanks for checking out my site!

I started this project with two goals in mind:

1. Learn [Astro](https://astro.build/)
2. Build a website as minimal and lightweight as I possibly could, with a strong focus on accessibility and performance

I came across Astro when researching modern front-end frameworks and after reading through their [elevator pitch](https://docs.astro.build/en/concepts/why-astro/) I knew I wanted to give it a try. A framework designed to be as lightweight and fast as possible out of the box really spoke to me and my ethos as a developer, so I took that concept and wanted to build a site based on the same ideals.

## Tech Stack

- Framework: [Astro](https://astro.build/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Build: [Vite](https://vite.dev/)
- Hosting: [Cloudflare Pages](https://www.cloudflare.com/)
- Linting: [ESLint](https://eslint.org/)
- Formatting: [Prettier](https://prettier.io/)

## Optimizations

### TL;DR

- Total page size: 23.1 KB (16.1 KB without Cloudflare Analytics)
- Render time: 300ms
- [Lighthouse](https://pagespeed.web.dev/analysis/https-hunter-simpson-dev/r7m7wr7yk1?form_factor=desktop)
  - Performance: 100
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100
 - [Security Headers](https://securityheaders.com/): A

### Headers

In order to satisfy the requirements of the [Security Headers](https://securityheaders.com/) audit, I created a `_headers` file in the root of my `public` folder which allowed me to control the `Content-Security-Policy`, among other things. Setting that value's `default-src` property to `none` allows me to blanket deny any resources and prevent any cross-site scripting attacks. From there, I only add additional properties I need for my particular use case. More reading on this, as well as the other headers I specified, can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).

### Open Graph

I leveraged the [Open Graph Protocol](https://ogp.me/) to create shareable links of my website by specifying the appropriate values within my site's `head`. To generate beautiful image previews within those links, I used [OG Image Maker](https://ogimagemaker.com/).

### Images

I created my site logo and favicon using [Figma](https://www.figma.com/). To optimize the images on the site, I used [TinyPNG](https://tinypng.com/) for `.png` files and [SVGO](https://jakearchibald.github.io/svgomg/) for `.svg` files.

### Styling

Using Tailwind CSS is overkill for a small static site like mine, but I opted to use it regardless because 1. I wanted to get more familiar with it and 2. it optimizes css extremely effectively, especially when leveraging its Vite plugin. Additionally, I overrode all of the default color variables within the site's `@theme` and only included the ones I used, saving an additional 6 KB.

## End Result

I am happy to say I achieved all of my initial goals. The site is extremely lightweight (16.1 KB in total), extremely fast (loads in 300ms), and fully accessible. It supports both light mode and dark mode, based on either the user's system preferences or their selected value within the site. It also accounts for a user's motion preferences to reduce site animations if desired. 

As far as things learned goes, I learned a lot about Astro in the process and I really enjoyed working with it. I got to experiment with Tailwind v4 now that it is finally out of beta. Plus, I learned a lot of new things I wouldn't necessarily have learned otherwise, like the security headers or Open Graph for example. Lastly, I challenged myself to design and build the site from the ground up wihout using an existing template in order to work on my design skills, which I don't normally get to use in day-to-day work.

## Shoutouts

- Inspiration: [antfu.me](https://antfu.me/)
- Icons: [Myna UI](https://icon-sets.iconify.design/mynaui/)
