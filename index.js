var regexParser = require('./regex-parser');
var NFA = require('./nfa');

var expr = '(ab|ba)*(aa|bb)*abb';
var regexTree = regexParser(expr);
// console.log(JSON.stringify(regexTree, null, 4));

var nfa = new NFA();
nfa.fromRegexTree(regexTree);
// console.log(JSON.stringify(nfa, null, 4));
console.log(nfa);

var trials = [
    'ababababaaabb',
    'abb',
    'ababb',
    'aaabb',
    'abbbabb',
    'babbabb',
    'baaaabb',
    'baabb',
    'aaabbb',
];

for (var t of trials) {
    console.log('%s: %d', t, nfa.check(t));
}
