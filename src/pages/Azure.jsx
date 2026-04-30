import LanguagePage from '../components/LanguagePage';
import { azureContent } from '../data/azure-content';

const Azure = ({ initialSection }) => {
  return <LanguagePage content={azureContent} initialSection={initialSection} />;
};

export default Azure;