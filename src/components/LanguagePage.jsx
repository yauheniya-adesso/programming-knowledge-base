// src/components/LanguagePage.jsx
import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import TableOfContents from './TableOfContents';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-markup';

const LanguagePage = ({ content }) => {
  const [activeSection, setActiveSection] = useState(content.sections[0]?.id);
  const containerRef = useRef(null);

  // Scroll to section
  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // Highlight all code blocks after every render
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.querySelectorAll('pre code').forEach((block) => {
        Prism.highlightElement(block);
      });
    }
  });

  return (
    <div className="flex gap-8">

      {/* Table of contents */}
      <aside className="hidden lg:block w-64">
        <TableOfContents
          sections={content.sections}
          activeSection={activeSection}
          onSectionClick={scrollToSection}
        />
      </aside>
      
      {/* Main content */}
      <div className="flex-1" ref={containerRef}>
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-4 text-black">
          {content.icon && <Icon icon={content.icon} width={36} height={36} color="#006EC7" />}
          {content.title}
        </h1>

        {content.sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="mb-12 bg-white rounded-lg shadow-md p-8"
          >
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-[#006EC7] pb-2 text-[#006EC7]">
              {section.title}
            </h2>

            {/* Render raw HTML from imported files */}
            <div
              className="prose max-w-none text-black"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </section>
        ))}
      </div>
    </div>
  );
};

export default LanguagePage;
