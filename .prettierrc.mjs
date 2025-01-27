/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  quoteProps: 'consistent',
  singleQuote: true,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: ".prettierrc.mjs",
      options: {
        parser: "json",
      },
    },
  ],
};
