import { Config } from 'bili'

const config: Config = {
  input: 'src/index.ts',
  externals: ['vue'],
  output: {
    dir: 'dist',
    moduleName: 'VueInstanceEvents',
    format: ['umd', 'esm', 'umd-min', 'esm-min']
  }
}

export default config