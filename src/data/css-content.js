// src/data/css-content.js
import CssIntro from './css/intro.mdx';
import CssUsage from './css/usage.mdx';
import Tailwind from './css/tailwind.mdx';
import Bootstrap from './css/bootstrap.mdx';

export const cssContent = {
  icon: "simple-icons:css3",
  title: "CSS",
  sections: [
    {
      id: "css-intro",
      title: "Overview",
      Content: CssIntro
    },
    {
      id: "css-usage",
      title: "Using CSS",
      Content: CssUsage
    },
    {
      id: "tailwind-css",
      title: "Tailwind CSS",
      Content: Tailwind
    },
    {
      id: "bootstrap",
      title: "Bootstrap",
      Content: Bootstrap
    }
  ]
};
