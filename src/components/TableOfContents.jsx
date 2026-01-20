import { ChevronRight } from 'lucide-react';

const TableOfContents = ({ sections, activeSection, onSectionClick }) => {
  return (
    <div className="rounded-lg p-6 sticky top-6 bg-white shadow-md">
      <h3 className="text-lg font-bold mb-4 text-black">Table of Contents</h3>

      <ul className="space-y-2">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <li key={section.id}>
              <button
                onClick={() => onSectionClick(section.id)}
                className={`
                  relative w-full text-left px-3 py-2 rounded flex items-center gap-2 font-medium overflow-hidden transition-colors group
                  ${isActive
                    ? 'bg-[#006EC7] text-white'
                    : 'text-[#006EC7]'
                  }
                `}
              >
                {/* Gradient overlay on hover */}
                {!isActive && (
                  <span className="absolute inset-0 bg-gradient-to-b from-[#F566BA] to-[#FF9868] opacity-0 group-hover:opacity-100 transition-opacity rounded"></span>
                )}

                {/* Chevron icon */}
                <ChevronRight
                  size={16}
                  className={`relative z-10 transition-colors ${
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
            </li>



          );
        })}
      </ul>
    </div>
  );
};

export default TableOfContents;
