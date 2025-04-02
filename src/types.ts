/**
 * Defines a rule for syntax highlighting
 */
export interface Rule {
  type: string;
  pattern: RegExp;
}

/**
 * Defines a programming language for syntax highlighting
 */
export interface Language {
  name: string;
  rules: Rule[];
}

/**
 * Defines a theme for syntax highlighting
 */
export interface Theme {
  name: string;
  background: string;
  text: string;
  tokens: Record<string, string>;
}

/**
 * Represents a token in the code
 */
export interface Token {
  type: string;
  content: string;
  start: number;
  end: number;
}

/**
 * Result of syntax highlighting
 */
export interface HighlightResult {
  html: string;
  css: string;
}
