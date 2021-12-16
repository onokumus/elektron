import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';

const banner = `/*! ${pkg.name} v${pkg.version} | MIT License | https://github.com/onokumus/${pkg.name} */`;
const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: 'js/elektron.js',
    output: [
      {
        name: 'elektron',
        banner,
        file: production ? pkg.browser : 'docs/assets/js/elektron.js',
        format: 'umd',
        sourcemap: true,
      },
    ],
    plugins: [resolve()],
  },
];
