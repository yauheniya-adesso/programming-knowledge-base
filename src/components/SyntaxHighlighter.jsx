import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

// Load languages explicitly
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-markup';

const SyntaxHighlighter = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []); // only once, after all <pre><code> exist

  return null;
};

export default SyntaxHighlighter;
