import { Language } from '../types';

const typescript: Language = {
  name: 'typescript',
  rules: [
    { type: 'comment', pattern: /\/\/.*$/gm },
    { type: 'comment', pattern: /\/\*[\s\S]*?\*\//gm },
    { type: 'string', pattern: /"(?:[^"\\]|\\.)*"/g },
    { type: 'string', pattern: /'(?:[^'\\]|\\.)*'/g },
    { type: 'string', pattern: /`(?:[^`\\]|\\.)*`/g },
    { type: 'number', pattern: /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/gi },
    {
      type: 'keyword',
      pattern:
        /\b(var|let|const|function|class|interface|extends|implements|type|enum|namespace|module|return|if|else|for|while|do|switch|case|break|continue|new|this|typeof|instanceof|null|undefined|true|false|try|catch|finally|throw|async|await|import|export|from|as|default|public|private|protected|readonly|static|abstract|declare|is|keyof|any|string|number|boolean|symbol|void|never|unknown)\b/g,
    },
    { type: 'function', pattern: /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g },
    { type: 'operator', pattern: /[+\-*/%=&|^~<>!?:;,.()[\]{}]/g },
    { type: 'variable', pattern: /\b[a-zA-Z_$][a-zA-Z0-9_$]*\b/g },
  ],
};

export default typescript;
