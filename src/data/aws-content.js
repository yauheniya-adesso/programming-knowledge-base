// src/data/aws-content.js
import AwsIntroduction from './aws/introduction.mdx';
import AwsBedrockTextVideo from './aws/bedrock-text-video.mdx';
import AwsKnowledgeBases from './aws/knowledge-bases.mdx';
import AwsConverseApi from './aws/converse-api.mdx';
import AwsAgents from './aws/agents.mdx';
import AwsGuardrails from './aws/guardrails.mdx';
import AwsAgentCore from './aws/agentcore.mdx';

export const awsContent = {
  icon: "logos:aws",
  title: "AWS Generative AI",
  sections: [
    {
      id: "aws-introduction",
      title: "Introduction",
      Content: AwsIntroduction,
    },
    {
      id: "aws-bedrock-text-video",
      title: "Text & Video Generation",
      Content: AwsBedrockTextVideo,
    },
    {
      id: "aws-knowledge-bases",
      title: "Knowledge Bases (RAG)",
      Content: AwsKnowledgeBases,
    },
    {
      id: "aws-converse-api",
      title: "Converse API & Prompts",
      Content: AwsConverseApi,
    },
    {
      id: "aws-agents",
      title: "Bedrock Agents",
      Content: AwsAgents,
    },
    {
      id: "aws-guardrails",
      title: "Guardrails",
      Content: AwsGuardrails,
    },
    {
      id: "aws-agentcore",
      title: "AgentCore",
      Content: AwsAgentCore,
    },
  ],
};
