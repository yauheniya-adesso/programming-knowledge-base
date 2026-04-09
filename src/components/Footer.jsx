import { Icon } from '@iconify/react';
import { version } from '../../package.json';
import { useState, useEffect } from 'react';

const FULL_TEXT = 'programming knowledge base';
const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPE = 1500;
const PAUSE_AFTER_DELETE = 400;

export default function Footer() {
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!isDeleting) {
      if (displayed.length < FULL_TEXT.length) {
        timeout = setTimeout(
          () => setDisplayed(FULL_TEXT.slice(0, displayed.length + 1)),
          TYPING_SPEED
        );
      } else {
        timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(FULL_TEXT.slice(0, displayed.length - 1)),
          DELETING_SPEED
        );
      } else {
        timeout = setTimeout(() => setIsDeleting(false), PAUSE_AFTER_DELETE);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting]);

  return (
    <footer className="w-full bg-[var(--color-blue)] flex items-center px-6 py-3">

      {/* Left: logo icon + typewriter title */}
      <div className="flex-1 flex items-center gap-2">
        <style>{`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
        <Icon icon="icon-park-outline:code-one" className="text-white text-xl" style={{ animation: 'blink 1.2s step-start infinite' }} />
        <span className="text-white text-sm font-mono tracking-wide">
          {displayed}_
        </span>
      </div>

      {/* Middle: GitHub link — button on hover */}
      <div className="flex-1 flex justify-center">
        <a
          href="https://github.com/yauheniya-adesso/programming-knowledge-base"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1.5 px-3 py-1.5 rounded-md
                     border-b-2 border-transparent
                     transition-all duration-200
                     hover:bg-white hover:border-[var(--color-orange)]"
        >
          <Icon
            icon="mdi:github"
            className="text-white text-xl transition-colors duration-200
                       group-hover:text-[var(--color-pink)]"
          />
          <span
            className="text-white text-sm transition-colors duration-200
                       group-hover:text-[var(--color-pink)]"
          >
            Repository
          </span>
        </a>
      </div>

      {/* Right: version */}
      <div className="flex-1 flex justify-end">
        <span className="text-white text-sm font-mono">v{version}</span>
      </div>

    </footer>
  );
}
