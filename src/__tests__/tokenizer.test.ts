import { tokenize } from '../core/tokenizer';
import javascript from '../languages/javascript';
import python from '../languages/python';

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

  test('correctly tokenizes Python comment', () => {
    const code = '# This is a comment';
    const tokens = tokenize(code, python);

    expect(tokens).toHaveLength(1);
    expect(tokens[0]).toEqual({
      type: 'comment',
      content: '# This is a comment',
      start: 0,
      end: 19,
    });
  });

  test('correctly tokenizes Python variables and keywords', () => {
    const code = 'def my_function():';
    const tokens = tokenize(code, python);

    expect(tokens).toHaveLength(6);
    expect(tokens[0]).toEqual({
      type: 'keyword',
      content: 'def',
      start: 0,
      end: 3,
    });
    expect(tokens[1]).toEqual({
      type: 'text',
      content: ' ',
      start: 3,
      end: 4,
    });
    expect(tokens[2]).toEqual({
      type: 'function',
      content: 'my_function',
      start: 4,
      end: 15,
    });
    expect(tokens[3]).toEqual({
      type: 'operator',
      content: '(',
      start: 15,
      end: 16,
    });
    expect(tokens[4]).toEqual({
      type: 'operator',
      content: ')',
      start: 16,
      end: 17,
    });
    expect(tokens[5]).toEqual({
      type: 'operator',
      content: ':',
      start: 17,
      end: 18,
    });
  });
});
