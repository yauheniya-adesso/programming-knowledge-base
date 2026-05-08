import LanguagePage from '../components/LanguagePage';
import { claudeCodeContent } from '../data/claude-code-content';

const ClaudeCode = ({ initialSection }) => {
  return <LanguagePage content={claudeCodeContent} initialSection={initialSection} />;
};

export default ClaudeCode;
