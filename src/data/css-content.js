// src/data/css-content.js
import cssIntro from './css/intro.html?raw';
import cssUsage from './css/usage.html?raw';
import tailwind from './css/tailwind.html?raw';
import bootstrap from './css/bootstrap.html?raw';

export const cssContent = {
  icon: "simple-icons:css3",
  title: "CSS",
  sections: [
    {
      id: "css-intro",
      title: "Overview",
      content: cssIntro
    },
    {
      id: "css-usage",
      title: "Using CSS",
      content: cssUsage
    },
    {
      id: "tailwind-css",
      title: "Tailwind CSS",
      content: tailwind
    },
    {
      id: "bootstrap",
      title: "Bootstrap",
      content: bootstrap
    }
  ]
};
