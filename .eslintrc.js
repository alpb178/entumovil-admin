module.exports = {
    parser: '@typescript-eslint/parser', // Required if using TypeScript
    parserOptions: {
      ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
      sourceType: 'module', // Allows for the use of imports
      ecmaFeatures: {
        jsx: true // Allows for the parsing of JSX
      }
    },
    settings: {
      react: {
        version: 'detect' // Automatically detect the version of React to use
      }
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:@typescript-eslint/recommended', // Required if using TypeScript
      'airbnb', // Or 'standard' or 'google', depending on your preference
    ],
    rules: {
      // Place to specify your custom rules
      // E.g. "@typescript-eslint/explicit-function-return-type": "off",
    }
  };
  