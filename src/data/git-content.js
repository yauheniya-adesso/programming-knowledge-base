// src/data/git-content.js
import whatIsGit from './git/what-is-git.html?raw';
import basicTerms from './git/basic-terms.html?raw';
import workflowExample from './git/workflow-example.html?raw';
import cloningForking from './git/cloning-forking.html?raw';
import managingProjects from './git/managing-projects.html?raw';

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
    {
      id: "workflow-example",
      title: "Workflow Example",
      content: workflowExample
    },
    {
      id: "cloning-forking",
      title: "Cloning and Forking",
      content: cloningForking
    },
    {
      id: "managing-projects",
      title: "Managing Projects",
      content: managingProjects
    },
  ]
};
