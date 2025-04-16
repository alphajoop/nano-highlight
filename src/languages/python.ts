import { Language } from '../types';

const python: Language = {
  name: 'python',
  rules: [
    { type: 'comment', pattern: /#.*$/gm },
    { type: 'string', pattern: /"""(?:[^"""\\]|\\.)*"""/g },
    { type: 'string', pattern: /'[^'\\]*(?:\\.[^'\\]*)*'/g },
    { type: 'string', pattern: /"(?:[^"\\]|\\.)*"/g },
    { type: 'number', pattern: /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/gi },
    {
      type: 'keyword',
      pattern:
        /\b(def|class|if|elif|else|for|while|try|except|finally|with|as|import|from|return|break|continue|pass|raise|lambda|async|await|global|nonlocal|in|is|not|and|or|True|False|None)\b/g,
    },
    { type: 'text', pattern: /\s+/g },
    { type: 'function', pattern: /\b([a-zA-Z_][a-zA-Z0-9_]*)\b/g },
    { type: 'operator', pattern: /[+\-*/%=<>!&|^~()]/g },
    { type: 'operator', pattern: /:/g },
    { type: 'variable', pattern: /\b[a-zA-Z_][a-zA-Z0-9_]*\b/g },
  ],
};

export default python;
