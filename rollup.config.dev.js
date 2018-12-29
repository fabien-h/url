import typescript from 'rollup-plugin-typescript2';
import _package from './package.json';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: _package.main,
      format: 'umd',
      name: 'url',
      sourcemap: true,
    },
    {
      file: _package.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  watch: {
    include: 'src/**',
  },
  external: [
    ...Object.keys(_package.dependencies || {}),
    ...Object.keys(_package.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
      useTsconfigDeclarationDir: true,
    }),
    commonjs(),
    sourceMaps(),
  ],
};
