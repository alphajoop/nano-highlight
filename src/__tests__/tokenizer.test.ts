import { tokenize } from '../core/tokenizer';
import javascript from '../languages/javascript';

describe('Tokenizer', () => {
  test('correctly tokenizes JavaScript comment', () => {
    const code = '// This is a comment';
    const tokens = tokenize(code, javascript);

    expect(tokens).toHaveLength(1);
    expect(tokens[0]).toEqual({
      type: 'comment',
      content: '// This is a comment',
      start: 0,
      end: 20,
    });
  });

  test('correctly tokenizes JavaScript variables and keywords', () => {
    const code = 'const x = 10;';
    const tokens = tokenize(code, javascript);

    // Filter out whitespace tokens for the test
    const nonWhitespaceTokens = tokens.filter((token) => token.type !== 'text');

    // Expected tokens: 'const', 'x', '=', '10', ';'
    expect(nonWhitespaceTokens).toHaveLength(5);
    expect(nonWhitespaceTokens[0].type).toBe('keyword');
    expect(nonWhitespaceTokens[0].content).toBe('const');
    expect(nonWhitespaceTokens[1].type).toBe('variable');
    expect(nonWhitespaceTokens[1].content).toBe('x');
    expect(nonWhitespaceTokens[2].type).toBe('operator');
    expect(nonWhitespaceTokens[2].content).toBe('=');
    expect(nonWhitespaceTokens[3].type).toBe('number');
    expect(nonWhitespaceTokens[3].content).toBe('10');
    expect(nonWhitespaceTokens[4].type).toBe('operator');
    expect(nonWhitespaceTokens[4].content).toBe(';');
  });

  test('correctly tokenizes JavaScript strings', () => {
    const code = '"Hello, world!" + \'Another string\' + `Template string`';
    const tokens = tokenize(code, javascript);

    // Should find 3 strings and 2 '+' operators
    const stringTokens = tokens.filter((t) => t.type === 'string');
    expect(stringTokens).toHaveLength(3);
    expect(stringTokens[0].content).toBe('"Hello, world!"');
    expect(stringTokens[1].content).toBe("'Another string'");
    expect(stringTokens[2].content).toBe('`Template string`');
  });
});
