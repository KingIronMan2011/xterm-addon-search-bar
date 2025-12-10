import baseConfig from './rollup.config.base.js';
import serve from 'rollup-plugin-serve';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageJson = JSON.parse(readFileSync(join(__dirname, '../package.json'), 'utf-8'));
const { name, global } = packageJson;

export default {
  ...baseConfig,
  output: [
    {
      file: `lib/${name}.js`,
      format: 'umd',
      name: global,
      sourcemap: true
    },
  ],
  plugins: [
    ...baseConfig.plugins,
    serve({
      port: 7000,
      contentBase: ['pages','.'],
      verbose: true,
    })
  ]
};
