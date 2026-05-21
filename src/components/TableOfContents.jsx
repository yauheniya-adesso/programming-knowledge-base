import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const TableOfContents = ({ sections, activeSection, onSectionClick }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const handleSectionClick = (section) => {
    if (section.subsections?.length) {
      toggleSection(section.id);
    }
    onSectionClick(section.id);
  };

  return (
    <div className="rounded-lg p-6 sticky top-24 bg-white shadow-md max-h-[calc(100vh-7rem)] flex flex-col">
      <h3 className="text-lg font-bold mb-4 text-black shrink-0">Table of Contents</h3>

      <ul className="space-y-2 overflow-y-auto">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          const isOpen = !!openSections[section.id];
          const hasSubsections = section.subsections?.length > 0;

          return (
            <li key={section.id}>
              <button
                onClick={() => handleSectionClick(section)}
                className={`
                  relative w-full text-left px-3 py-2 rounded flex items-center gap-2 font-medium overflow-hidden transition-colors group
                  ${isActive ? 'bg-[#006EC7] text-white' : 'text-[#006EC7]'}
                `}
              >
                {/* Gradient overlay on hover */}
                {!isActive && (
                  <span className="absolute inset-0 bg-gradient-to-b from-[#F566BA] to-[#FF9868] opacity-0 group-hover:opacity-100 transition-opacity rounded" />
                )}

                {/* Chevron icon — rotates when open */}
                <ChevronRight
                  size={16}
                  className={`relative z-10 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-90' : ''
                  } ${
                    isActive ? 'text-white' : 'group-hover:text-white text-[#006EC7]'
                  }`}
                />

                {/* Section title */}
                <span
                  className={`relative z-10 transition-colors ${
                    isActive ? 'text-white' : 'group-hover:text-white text-[#006EC7]'
                  }`}
                >
                  {section.title}
                </span>
              </button>

              {/* Subsections */}
              {hasSubsections && isOpen && (
                <ul className="mt-1 ml-5 space-y-1">
                  {section.subsections.map((sub) => {
                    const isSubActive = activeSection === sub.id;
                    return (
                      <li key={sub.id}>
                        <button
                          onClick={() => onSectionClick(sub.id)}
                          className={`
                            relative w-full text-left px-3 py-1.5 rounded flex items-center gap-2 text-sm overflow-hidden transition-colors group
                            ${isSubActive ? 'bg-[#006EC7] text-white' : 'text-[#006EC7]'}
                          `}
                        >
                          {!isSubActive && (
                            <span className="absolute inset-0 bg-gradient-to-b from-[#F566BA] to-[#FF9868] opacity-0 group-hover:opacity-100 transition-opacity rounded" />
                          )}
                          <span className={`relative z-10 shrink-0 text-xs leading-none ${
                            isSubActive ? 'text-white' : 'text-[#006EC7] group-hover:text-white'
                          }`}>–</span>
                          <span className={`relative z-10 transition-colors ${
                            isSubActive ? 'text-white' : 'group-hover:text-white text-[#006EC7]'
                          }`}>
                            {sub.title}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TableOfContents;
