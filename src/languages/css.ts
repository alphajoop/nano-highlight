import { Language } from '../types';

const css: Language = {
  name: 'css',
  rules: [
    { type: 'comment', pattern: /\/\*[\s\S]*?\*\//g },
    { type: 'property', pattern: /[a-zA-Z-]+(?=\s*:)/g },
    { type: 'selector', pattern: /[a-zA-Z0-9_.-]+(?=\s*\{)/g },
    { type: 'string', pattern: /"[^"]*"/g },
    { type: 'string', pattern: /'[^']*'/g },
    {
      type: 'number',
      pattern: /\b\d+(?:\.\d+)?(?:px|em|rem|vh|vw|%|s|ms|deg|rad|turn)?\b/g,
    },
    { type: 'operator', pattern: /[{}():;,]/g },
    {
      type: 'keyword',
      pattern:
        /\b(import|from|to|@media|@keyframes|@import|@charset|@namespace|@supports|@document|@page|@font-face|@viewport|@counter-style|@font-feature-values|@color-profile|@property)\b/g,
    },
  ],
};

export default css;
