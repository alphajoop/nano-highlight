import { tokenize } from './core/tokenizer';
import { render } from './core/renderer';
import * as importedLanguages from './languages';
import * as importedThemes from './themes';
import { Language, Theme, HighlightResult } from './types';

interface NanoHighlight {
  highlight(code: string, languageName: string, themeName?: string): HighlightResult;
  registerLanguage(name: string, definition: Language): void;
  registerTheme(name: string, definition: Theme): void;
  tokenize: typeof tokenize;
  render: typeof render;
  languages: Record<string, Language>;
  themes: Record<string, Theme>;
}

// Create local copies that can be modified
const languages: Record<string, Language> = { ...importedLanguages };
const themes: Record<string, Theme> = { ...importedThemes };

const nanoHighlight: NanoHighlight = {
  highlight(code: string, languageName: string, themeName: string = 'dark'): HighlightResult {
    // Get language definition
    const language = languages[languageName];
    if (!language) {
      throw new Error(`Language '${languageName}' not supported`);
    }

    // Get theme
    const theme = themes[themeName];
    if (!theme) {
      throw new Error(`Theme '${themeName}' not supported`);
    }

    // Tokenize and render
    const tokens = tokenize(code, language);
    return render(tokens, language, theme);
  },

  registerLanguage(name: string, definition: Language) {
    languages[name] = definition;
  },

  registerTheme(name: string, definition: Theme) {
    themes[name] = definition;
  },

  // Export internal modules
  tokenize,
  render,
  languages,
  themes,
};

export default nanoHighlight;
