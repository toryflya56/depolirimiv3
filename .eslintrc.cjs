module.exports = {
  root: true,
  
  // ==========================================
  // ENVIRONMENT
  // ==========================================
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  // ==========================================
  // PARSER & PARSER OPTIONS
  // ==========================================
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },

  // ==========================================
  // EXTENDS (Preset Configurations)
  // ==========================================
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],

  // ==========================================
  // PLUGINS
  // ==========================================
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'react-refresh',
  ],

  // ==========================================
  // SETTINGS
  // ==========================================
  settings: {
    react: {
      version: 'detect', // Auto-detect React version
    },
  },

  // ==========================================
  // RULES
  // ==========================================
  rules: {
    // ========================================
    // REACT RULES
    // ========================================
    'react/prop-types': 'off', // TypeScript handles prop validation
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    'react/jsx-uses-react': 'off', // Not needed in React 17+
    'react/jsx-no-target-blank': ['warn', { allowReferrer: false }],
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    'react/self-closing-comp': 'warn',
    'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
    'react/no-unescaped-entities': 'warn',
    'react/no-array-index-key': 'warn',

    // ========================================
    // REACT HOOKS RULES
    // ========================================
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // ========================================
    // REACT REFRESH (HMR)
    // ========================================
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    // ========================================
    // TYPESCRIPT RULES
    // ========================================
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],

    // ========================================
    // GENERAL JAVASCRIPT RULES
    // ========================================
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',
    'no-alert': 'warn',
    'no-var': 'error',
    'prefer-const': 'warn',
    'prefer-template': 'warn',
    'prefer-arrow-callback': 'warn',
    'object-shorthand': 'warn',
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'no-duplicate-imports': 'error',
    'no-return-await': 'warn',

    // ========================================
    // CODE STYLE (Formatting)
    // ========================================
    'quotes': ['warn', 'single', { avoidEscape: true }],
    'semi': ['warn', 'always'],
    'comma-dangle': ['warn', 'only-multiline'],
    'indent': 'off', // Handled by Prettier/IDE
    'linebreak-style': 'off',
    'max-len': [
      'warn',
      {
        code: 120,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],

    // ========================================
    // SECURITY RULES
    // ========================================
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
    'no-script-url': 'error',

    // ========================================
    // ACCESSIBILITY (Basic A11Y)
    // ========================================
    'jsx-a11y/alt-text': 'off', // Would need jsx-a11y plugin
    'jsx-a11y/anchor-is-valid': 'off',
  },

  // ==========================================
  // OVERRIDES (Specific File Patterns)
  // ==========================================
  overrides: [
    // Allow console in config files
    {
      files: ['*.config.js', '*.config.ts', 'vite.config.ts'],
      rules: {
        'no-console': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    // Allow any in type definition files
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    // Allow require in CommonJS files
    {
      files: ['*.cjs'],
      env: {
        node: true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],

  // ==========================================
  // IGNORE PATTERNS
  // ==========================================
  ignorePatterns: [
    'dist',
    'build',
    'node_modules',
    '*.min.js',
    'coverage',
    '.vite',
    '.vercel',
  ],
};
