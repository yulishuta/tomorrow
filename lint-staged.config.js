const lintTS = ['prettier --write', 'eslint --fix', 'git add']
const onlyPrettier = ['prettier --write', 'git add']

module.exports = {
  'src/**/*.+(ts|tsx)': lintTS,
  '__tests__/**/*.+(js|jsx|ts|tsx)': onlyPrettier,
}
