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
      subsections: [
        { id: "key-facts-at-a-glance", title: "Key Facts at a Glance" },
        { id: "where-copilot-studio-sits-in-power-platform", title: "Where Copilot Studio Sits in Power Platform" },
        { id: "environments-solutions--licensing", title: "Environments, Solutions & Licensing" },
        { id: "deployment-channels", title: "Deployment Channels" },
      ],
    },
    {
      id: "copilot-studio-key-concepts",
      title: "Key Concepts",
      Content: KeyConcepts,
      subsections: [
        { id: "anatomy-of-an-agent", title: "Anatomy of an Agent" },
        { id: "topics", title: "Topics" },
        { id: "entities--variables", title: "Entities & Variables" },
        { id: "actions-power-automate-flows", title: "Actions (Power Automate Flows)" },
        { id: "generative-ai-features", title: "Generative AI Features" },
        { id: "knowledge-sources", title: "Knowledge Sources" },
        { id: "channels", title: "Channels" },
        { id: "quick-mental-model", title: "Quick Mental Model" },
      ],
    },
    {
      id: "business-scenario-copilot-components",
      title: "Business Scenario to Copilot Components",
      Content: BreakDownScenario,
      subsections: [
        { id: "scenario", title: "Scenario" },
        { id: "instructions", title: "Instructions" },
        { id: "checklist-for-success", title: "Checklist for Success" },
      ],
    },
  ],
};
