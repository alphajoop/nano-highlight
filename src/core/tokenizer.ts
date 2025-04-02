import { Language, Token } from '../types';

export function tokenize(code: string, language: Language): Token[] {
  const tokens: Token[] = [];
  let currentPosition = 0;

  // Process the code until we reach the end
  while (currentPosition < code.length) {
    let matched = false;

    // Try each rule in the language definition
    for (const rule of language.rules) {
      // Reset regex lastIndex to ensure we start from the current position
      rule.pattern.lastIndex = currentPosition;
      const match = rule.pattern.exec(code);

      // If we found a match at the current position
      if (match && match.index === currentPosition) {
        const content = match[0];
        const token: Token = {
          type: rule.type,
          content,
          start: currentPosition,
          end: currentPosition + content.length,
        };

        tokens.push(token);
        currentPosition += content.length;
        matched = true;
        break;
      }
    }

    // If no rule matched, create a plain text token for this character
    if (!matched) {
      const content = code[currentPosition];
      const token: Token = {
        type: 'text',
        content,
        start: currentPosition,
        end: currentPosition + 1,
      };

      tokens.push(token);
      currentPosition++;
    }
  }

  return tokens;
}
