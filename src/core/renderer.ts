import { Token, Language, Theme, HighlightResult } from '../types';

/**
 * Escapes HTML special characters to prevent XSS
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Renders tokens to HTML with specified theme
 */
export function render(tokens: Token[], language: Language, theme: Theme): HighlightResult {
  // Generate HTML
  let html = '';

  for (const token of tokens) {
    const escapedContent = escapeHtml(token.content);
    html += `<span class="nh-${token.type}">${escapedContent}</span>`;
  }

  // Generate CSS for the theme
  const css = generateThemeCSS(theme);

  return {
    html: `<pre class="nano-highlight ${language.name}"><code>${html}</code></pre>`,
    css,
  };
}

/**
 * Generates CSS for the theme
 */
function generateThemeCSS(theme: Theme): string {
  const cssRules = [
    `.nano-highlight { background-color: ${theme.background}; color: ${theme.text}; }`,
  ];

  // Add token type styles
  for (const [tokenType, color] of Object.entries(theme.tokens)) {
    cssRules.push(`.nh-${tokenType} { color: ${color}; }`);
  }

  return cssRules.join('\n');
}
