// src/data/azure-content.js
import AzureIntroduction from './azure/introduction.mdx';
import AzureServicesOverview from './azure/services-overview.mdx';
import AzureOpenAI from './azure/azure-openai.mdx';
import AzureAISearch from './azure/azure-ai-search.mdx';
import AzureDocumentIntelligence from './azure/azure-document-intelligence.mdx';
import AzureStorage from './azure/azure-storage.mdx';
import AzureDevOpsPipelines from './azure/azure-devops-pipelines.mdx';

export const azureContent = {
  icon: "devicon:azure",
  title: "Azure for Agentic AI",
  sections: [
    {
      id: "azure-introduction",
      title: "Introduction",
      Content: AzureIntroduction,
    },
    {
      id: "azure-services-overview",
      title: "Services Overview",
      Content: AzureServicesOverview,
    },
    {
      id: "azure-openai",
      title: "Azure OpenAI",
      Content: AzureOpenAI,
    },
    {
      id: "azure-ai-search",
      title: "Azure AI Search",
      Content: AzureAISearch,
    },
    {
      id: "azure-document-intelligence",
      title: "Document Intelligence",
      Content: AzureDocumentIntelligence,
    },
    {
      id: "azure-storage",
      title: "Blob Storage & Queues",
      Content: AzureStorage,
    },
    {
      id: "azure-devops-pipelines",
      title: "Azure DevOps Pipelines",
      Content: AzureDevOpsPipelines,
    },
  ],
};