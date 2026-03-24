import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import TableOfContents from './TableOfContents';
import Prism from 'prismjs';

import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';

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

  // Highlight + add copy buttons
  useEffect(() => {
    if (!containerRef.current) return;

    const pres = containerRef.current.querySelectorAll('pre');

    pres.forEach((pre) => {
      const code = pre.querySelector('code');
      if (!code) return;

      // Highlight code
      Prism.highlightElement(code);

      // Prevent duplicate buttons
      if (pre.querySelector('.copy-button')) return;

      // Ensure positioning context
      pre.style.position = 'relative';

      // Create button
      const button = document.createElement('button');
      button.className = 'copy-button';
      button.setAttribute('aria-label', 'Copy code');

      // Copy icon (two squares)
      const copyIcon = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" stroke-width="2"/>
          <rect x="2" y="2" width="13" height="13" rx="2" stroke="currentColor" stroke-width="2"/>
        </svg>
      `;

      // Check icon
      const checkIcon = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2"/>
        </svg>
      `;

      button.innerHTML = copyIcon;

      // Click handler
      button.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(code.innerText);

          // Show checkmark
          button.innerHTML = checkIcon;

          // Reset after 2 seconds
          setTimeout(() => {
            button.innerHTML = copyIcon;
          }, 2000);
        } catch (err) {
          console.error('Copy failed:', err);
        }
      });

      pre.appendChild(button);
    });
  }, [content]);

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
          {content.icon && (
            <Icon icon={content.icon} width={36} height={36} color="#006EC7" />
          )}
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