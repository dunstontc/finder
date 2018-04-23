module.exports = {
  'root':    true,
  'parser':  'babel-eslint',
  'plugins': [
    'react'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx':           true,
      'impliedStrict': true,
      'globalReturn':  false,
    },
  },
  'env': {
    'es6':     true,
    'browser': true,
    'node':    true,
  },
  'settings': {
    'react': {
      // 'createClass': 'createReactClass', // Regex for Component Factory to use, default to "createReactClass"
      'pragma': 'React',
      'version': '16.3.1',
    },
  },
  'rules': {
    // 'react/jsx-indent-props': ['off'],
    'react/jsx-indent-props': ['error', 4],
    'react/prop-types': "off",

    // 'arrow-body-style':      ['error', 'as-needed', {'requireReturnForObjectLiteral': true}],
    'array-bracket-spacing': ['off'],
    'arrow-parens':  ['error', 'as-needed', {'requireForBlockBody': true}],
    // 'arrow-spacing': ['error', {'before': true, 'after': true}],
    'block-spacing': ['error', 'always'],
    'brace-style':   ['error', '1tbs',  {'allowSingleLine': true}],  // Or allman
    'comma-style':   ['error', 'last'],
    'comma-dangle':  ['error', 'always-multiline'],
    'complexity':    ['error', 5],  // Defaults to 20
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'that'],
    'constructor-super': 'error',
    'curly':  ['error', 'all'],
    'eqeqeq': ['error', 'smart'],
    'func-call-spacing': ['error', 'never'],
    'handle-callback-err': 'error',
    'id-length': ['warn', {
      'min': 3,
      'exceptions': ['i', 'x'],
    }],
    // 'implicit-arrow-linebreak': ['error', 'beside'],
    'jsx-quotes': ['error', 'prefer-double'],
    'lines-between-class-members': ['error', 'always'],
    'max-depth': ['error', 3],
    'max-nested-callbacks': ['error', 3],  // Default is 10
    'newline-per-chained-call': ['error', {'ignoreChainWithDepth': 2}],
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-class-assign': 'error',
    'no-confusing-arrow': ['error', {'allowParens': true}],
    'no-console': 'off',
    'no-constant-condition': ['error', {'checkLoops': false}],
    'no-div-regex': 'error',
    'no-dupe-class-members': 'error',
    'no-inline-comments': 'off',
    'no-this-before-super': 'error',
    'no-unused-vars': 'warn',   // FIXME: Look into exceptions
    'no-use-before-define': ['error', {
      'functions': true,
      'classes':   true,
      'variables': true,
    }],
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-rename': ['error', {
      'ignoreDestructuring': false,
      'ignoreImport':        false,
      'ignoreExport':        false,
    }],
    'no-whitespace-before-property': 'error',
    'object-shorthand': ['error', 'consistent-as-needed'],
    // 'object-shorthand': ['error', 'always', {
    //   'avoidQuotes': true,
    //   'avoidExplicitReturnArrows': true,
    // }],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak':  ['error', 'before', {
      'overrides': {
        '?': 'none',
        ':': 'none',
      },
    }],
    'padding-line-between-statements': ['error',
      {'blankLine': 'always',  'prev': ['directive'], 'next': ['*']},
      {'blankLine': 'always',  'prev': ['class'],     'next': ['*']},
    ],
    'prefer-arrow-callback': ['error', {'allowUnboundThis': false}],
    'prefer-const': 1,
    'prefer-destructuring': ['error',
      {'array': true, 'object': true},
      {'enforceForRenamedProperties': false},
    ],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'consistent'],
    'require-await': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'semi': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'space-infix-ops': ['error', {'int32Hint': false}],
    // 'spaced-comment': ['error', 'always', {
    //   'line': {
    //     'markers':    ['/'],
    //     'exceptions': ['-', '='],
    //   },
    //   'block': {
    //     'markers':    ['!'],
    //     'exceptions': ['*'],
    //     'balanced':   true,
    //   }
    // }],
    'template-tag-spacing':   ['error', 'never'],
    'template-curly-spacing': ['error', 'never'],
    'valid-jsdoc': ['error', {
      'requireParamDescription':  false,
      'requireReturn':            false,
      'requireReturnType':        true,
      'requireReturnDescription': true,
      'prefer': {
        'arg':      'param',
        'argument': 'param',
        'class':    'constructor',
        'return':   'returns',
        'virtual':  'abstract',
      },
    }],
  },
};
