import LanguagePage from '../components/LanguagePage';
import { awsContent } from '../data/aws-content';

const AWS = ({ initialSection }) => {
  return <LanguagePage content={awsContent} initialSection={initialSection} />;
};

export default AWS;