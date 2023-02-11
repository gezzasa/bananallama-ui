// @ts-check

/**
 * See https://semantic-release.gitbook.io/semantic-release/usage/configuration.
 *
 * @typedef {import('semantic-release').Options} Options
 */

/** @type {Options} */ const config = {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'main',
    'next',
    'next-major',
    {name: 'beta', prerelease: true},
    {name: 'alpha', prerelease: true}
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
        },
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
        },
      },
    ],
    '@semantic-release/changelog',
    '@semantic-release/git',
    '@semantic-release/npm',
  ],
  verifyConditions: ['@semantic-release/changelog', '@semantic-release/git', '@semantic-release/npm'],
  prepare: ['@semantic-release/changelog', '@semantic-release/npm', '@semantic-release/git'],
  addChannel: ['@semantic-release/npm'],
  publish: ['@semantic-release/npm'],
}

module.exports = config
