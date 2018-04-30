import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const banner = `/*!
* ${pkg.name} - v${pkg.version}
* ${pkg.description}
* https://github.com/onokumus/${pkg.name}#readme
*
* Made by Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
* Under MIT License
*/`;


export default [
  {
    input: 'js/elektron.js',
    external: ['jquery'],
    output: [
      {
        name: 'elektron',
        banner,
        globals: {
          jquery: 'jQuery',
        },
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
