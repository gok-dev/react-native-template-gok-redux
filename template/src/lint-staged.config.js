module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --write',
    'yarn test --findRelatedTests --bail',
  ],
};
