import { Language } from '../types';

const html: Language = {
  name: 'html',
  rules: [
    { type: 'comment', pattern: /<!--[\s\S]*?-->/g },
    {
      type: 'tag',
      pattern: /<\/?[a-zA-Z0-9-]+(?:\s+[a-zA-Z0-9-]+(?:=(?:"[^"]*"|'[^']*'|[^>\s]+))?)*\s*\/?>/g,
    },
    {
      type: 'attribute',
      pattern: /\s+([a-zA-Z0-9-]+)(?:=(?:"[^"]*"|'[^']*'|[^>\s]+))?/g,
    },
    { type: 'string', pattern: /"[^"]*"/g },
    { type: 'string', pattern: /'[^']*'/g },
  ],
};

export default html;
