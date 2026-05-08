// src/data/claude-code-content.js
import ClaudeCodeIntroduction from './claude-code/introduction.mdx';
import ClaudeCodeCommonCommands from './claude-code/common-commands.mdx';
import ClaudeCodeProjectMemory from './claude-code/project-memory.mdx';
import ClaudeCodePermissions from './claude-code/permissions-and-plan-mode.mdx';
import ClaudeCodeHowAgentsWork from './claude-code/how-agents-work.mdx';

export const claudeCodeContent = {
  icon: "simple-icons:claude",
  title: "Claude Code",
  sections: [
    {
      id: "claude-code-introduction",
      title: "Introduction",
      Content: ClaudeCodeIntroduction
    },
    {
      id: "claude-code-common-commands",
      title: "Common Commands",
      Content: ClaudeCodeCommonCommands
    },
    {
      id: "claude-code-project-memory",
      title: "CLAUDE.md & Memory",
      Content: ClaudeCodeProjectMemory
    },
    {
      id: "claude-code-permissions",
      title: "Permissions & Plan Mode",
      Content: ClaudeCodePermissions
    },
    {
      id: "claude-code-how-agents-work",
      title: "How a Coding Agent Works",
      Content: ClaudeCodeHowAgentsWork
    }
  ]
};
