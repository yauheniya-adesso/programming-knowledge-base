import LanguagePage from '../components/LanguagePage';
import { copilotStudioContent } from '../data/copilot-studio';

const CopilotStudio = ({ initialSection }) => {
  return <LanguagePage content={copilotStudioContent} initialSection={initialSection} />;
};

export default CopilotStudio;
