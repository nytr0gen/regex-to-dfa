# regex-to-dfa

* Regular Expression Parser into a Tree. Accepts: `|&*()` (`src/regex-parser.js`)
* Regular Expression to Non-Deterministic Finite Automata (`src/nfa.js`)
* Non-Deterministic Finite Automata to Deterministic Finite Automata (`src/dfa.js`)

## Online

Check out https://github.com/nytr0gen/regex-to-dfa-visual

## Dist

`browserify -r ./index.js:regex-to-dfa > ./dist/bundle.js`
