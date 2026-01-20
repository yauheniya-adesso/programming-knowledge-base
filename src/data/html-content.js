// src/data/html-content.js
import doctype from './html/doctype.html?raw';
import headTag from './html/head.html?raw';
import bodyTag from './html/body.html?raw';
import formTag from './html/form.html?raw';

export const htmlContent = {
  icon: "simple-icons:html5",
  title: "HTML",
  sections: [
    {
      id: "doctype",
      title: "!DOCTYPE",
      content: doctype
    },
    {
      id: "head-tag",
      title: "<head> Tag",
      content: headTag
    },
    {
      id: "body-tag",
      title: "<body> Tag",
      content: bodyTag
    },
    {
      id: "form-tag",
      title: "<form> Tag",
      content: formTag
    }

  ]
};
