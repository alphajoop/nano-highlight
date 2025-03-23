import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default defineConfig([
  // ESM build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/nano-highlight.esm.js',
      format: 'es',
      sourcemap: true,
    },
    plugins: [typescript({ tsconfig: './tsconfig.json' }), resolve()],
  },

  // UMD build (unminified)
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/nano-highlight.js',
      format: 'umd',
      name: 'nanoHighlight',
      sourcemap: true,
    },
    plugins: [typescript({ tsconfig: './tsconfig.json' }), resolve()],
  },

  // UMD build (minified)
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/nano-highlight.min.js',
      format: 'umd',
      name: 'nanoHighlight',
      sourcemap: true,
    },
    plugins: [
      typescript({ tsconfig: './tsconfig.json' }),
      resolve(),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
        },
      }),
    ],
  },
]);
