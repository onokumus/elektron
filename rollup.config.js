import resolve from '@rollup/plugin-node-resolve';
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
    plugins: [resolve()],
  },
];
