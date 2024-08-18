/** @type {import('next-i18next').UserConfig} */

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "ع", "א", "br", "ук", "د", "あ", "yi", "fr"],
  },
  react: { useSuspense: false },
  localePath: path.resolve("./public/locales"),
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
