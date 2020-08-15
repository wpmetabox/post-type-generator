module.exports = {
	"env": {
		"browser": true,
		"node": true,
		"commonjs": true,
		"shared-node-browser": true,
		"es6": true,
		"es2017": true,
		"es2020": true
	},
	"parserOptions": {
		"ecmaVersion": 5,
		"sourceType": "script",
		"ecmaFeatures": {}
	},
	"rules": {
		"eqeqeq": [ "error", "always" ],
		"no-console": 1,
		"no-debugger": "error",
		"no-duplicate-case": "error",
		"no-dupe-keys": "error",
		"no-dupe-else-if": "error",
		"no-dupe-args": "error",
		"no-else-return": [ "error", { allowElseIf: false } ],
		"no-empty": [ "error", { "allowEmptyCatch": true } ],
		"no-empty-function": "error",
		"no-extra-semi": "error",
		"no-unused-vars": "error",
		"no-var": "error",
		"yoda": [ "error", "always" ],
		"max-depth": [ "error", 3 ],
		"max-nested-callbacks": [ "error", 3 ],

		// Stylistic
		"array-bracket-spacing": [ "error", "always" ],
		"block-spacing": "error",
		"brace-style": "error",
		"comma-spacing": [ "error", { "before": false, "after": true } ],
		"comma-style": [ "error", "last" ],
		"computed-property-spacing": [ "error", "always" ],
		"curly": "error",
		"func-call-spacing": [ "error", "never" ],
		"func-style": [ "error", "expression" ],
		"indent": [ "error", "tab" ],
		"key-spacing": [ "error", { "beforeColon": false, "afterColon": true } ],
		"keyword-spacing": [ "error", { "before": true, "after": true } ],
		"object-curly-spacing": [ "error", "always" ],
		"semi-spacing": [ "error", { "before": false, "after": true } ],
		"semi": [ "error", "always" ],
		"semi-style": [ "error", "last" ],
		"no-multiple-empty-lines": "error",
		"no-trailing-spaces": "error",
		"padding-line-between-statements": [
			"error",
			{ blankLine: "always", prev: [ "const", "let", "var" ], next: "*" },
			{ blankLine: "any",    prev: [ "const", "let", "var" ], next: [ "const", "let", "var" ] }
		],
		"space-in-parens": [ "error", "always" ],
		"arrow-body-style": [ "error", "as-needed" ],
		"arrow-spacing": "error",
	}
};