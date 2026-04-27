import LanguagePage from '../components/LanguagePage';
import { reactContent } from '../data/react-content';

const React = ({ initialSection }) => {
  return <LanguagePage content={reactContent} initialSection={initialSection} />;
};

export default React;