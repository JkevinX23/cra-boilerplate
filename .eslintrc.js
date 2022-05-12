const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
)

module.exports = {
  extends: ['react-app', 'prettier'],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'prettier/prettier': ['error', { singleQuote: true }]
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'prettier/prettier': ['warn', prettierOptions],
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': 'error'
      }
    }
  ],
}
