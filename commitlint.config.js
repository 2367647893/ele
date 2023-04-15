module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'type-enum': [2, 'always', [
      'feat', 'update', 'fix', 'refactor', 'optimize', 'style', 'docs', 'chore'
    ]],
    'type-case': [0],
    'type-empty': [2, 'always'],
    'subject-max-length': [2, 'always', 50],
    'subject-min-length': [2, 'always', 4],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-empty': [2, 'always'],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
  }
}
