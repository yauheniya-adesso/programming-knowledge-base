// src/data/copilot-studio.js
import Introduction from './copilot-studio/introduction.mdx';
import KeyConcepts from './copilot-studio/key-concepts.mdx';
import BreakDownScenario from './copilot-studio/business-scenario-copilot-components.mdx';

export const copilotStudioContent = {
  icon: "images/copilotstudio.svg",
  title: "Copilot Studio",
  sections: [
    {
      id: "copilot-studio-introduction",
      title: "Introduction",
      Content: Introduction,
    },
    {
      id: "copilot-studio-key-concepts",
      title: "Key Concepts",
      Content: KeyConcepts,
    },
    {
      id: "business-scenario-copilot-components",
      title: "Business Scenario to Copilot Components",
      Content: BreakDownScenario,
    },
  ],
};
