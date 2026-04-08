import LanguagePage from '../components/LanguagePage';
import { javaContent } from '../data/java-content';
import DukeCarModel from '../components/DukeCarModel';

const Java = () => {
  return (
    <>
      <LanguagePage content={javaContent} />

      {/* 3D model at the bottom */}
      <DukeCarModel />
    </>
  );
};

export default Java;
