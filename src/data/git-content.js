// src/data/git-content.js
import whatIsGit from './git/what-is-git.html?raw';
import basicTerms from './git/basic-terms.html?raw';

export const gitContent = {
  icon: "simple-icons:git",
  title: "Git",
  sections: [
    {
      id: "what-is-git",
      title: "What is Git?",
      content: whatIsGit
    },
    {
      id: "basic-terms",
      title: "Basic Terms",
      content: basicTerms
    },

  ]
};
