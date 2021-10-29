import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

const banner = `/*! ${pkg.name} v${pkg.version} | MIT License | https://github.com/onokumus/${pkg.name} */`;

export default [
  {
    input: 'js/elektron.js',
    output: [
      {
        name: 'elektron',
        banner,
        file: pkg.browser,
        format: 'umd',
        sourcemap: true,
      },
    ],
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      resolve(),
    ],
  },
];
