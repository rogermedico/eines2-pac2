module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    "selector-nested-pattern": "^&",
    "indentation": 2,
    "no-descending-specificity": true,
    "no-eol-whitespace": true,
    "declaration-empty-line-before": "never",
    "value-keyword-case": "lower",
    "number-leading-zero": "never",
    "unit-allowed-list": ["rem","%","px","fr","em","s"],
    "font-family-name-quotes": "always-unless-keyword",
    "string-quotes": "single",
    "declaration-block-single-line-max-declarations": 1,
    "shorthand-property-no-redundant-values": true,
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-empty-line-before": "never",
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "tailwind",
          "apply",
          "responsive",
          "variants",
          "screen",
          "use",
          "mixin",
          "include",
          "function",
          "return"
        ]
      }
    ]
  }
}