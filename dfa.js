var DFA = function(charset, initialState) {
    this.initialState = initialState;
    this.finalStates = [];
    this.charset = charset || '';
    this._transitions = {};
    this._state = 0;
};

DFA.fromNFA = function(nfa, charset) {
    var dfa = new this(charset);
    dfa._fromNFA(nfa);

    return dfa;
}

DFA.prototype.newState = function() {
    this._transitions.push({});

    return this._state++;
};

DFA.prototype.addTransition = function(from, to, accept) {
    if (!(from in this._transitions)) {
        this._transitions[from] = {};
    }

    this._transitions[from][accept] = to;
};

DFA.prototype.isFinalState = function(state) {
    return this.finalStates.indexOf(state) !== -1;
}

DFA.prototype.check = function(s) {
    var self = this;
    var _dfs = function(state, pos) {
        if (pos == s.length && self.isFinalState(state)) {
            return true;
        }

        var accept = s[pos];
        if (accept in self._transitions[state]) {
            var newState = self._transitions[state][accept];
            if (_dfs(newState, pos + 1)) {
                return true;
            }
        }

        return false;
    };

    return _dfs(this.initialState, 0);
};

DFA.prototype._fromNFA = function(nfa) {
    // To obtain a DFA M = < Q,  , q0 , , A > which accepts the same language as the given NFA M2 = < Q2 ,  , q2,0 , 2 , A2 > does, you may proceed as follows:

    this.charset = nfa.charset;
    var charset = this.charset.split('');
    charset.push('eps');
    console.log(charset);

    // Initially Q = null.
    var Q = [];
    var marked = {};

    this.initialState = JSON.stringify([nfa.initialState]);
    // First put { q2,0 } into Q. { q2,0 } is the initial state of the DFA M.
    Q.push(this.initialState);
    marked[this.initialState] = true;
    // Then for each state q in Q do the following:
    while (Q.length > 0) {
        var state = Q.shift();
        // add the set , where here is that of NFA M2, as a state to Q if it is not already in Q for each symbol a in  .
        for (var a of charset) {
            var newState = [];
            var isFinalState = false;
            var nfaStates = JSON.parse(state);
            console.log('state', state);
            for (var p of nfaStates) {
                if (!(p in nfa._transitions)
                    || !(a in nfa._transitions[p])
                ) {
                    continue;
                }

                console.log(p, nfa._transitions[p][a]);
                newState = newState.concat(nfa._transitions[p][a]);
                if (nfa.isFinalState(p)) {
                    isFinalState = true;
                }
            }
            console.log('newState', newState);

            newState = new Set(newState);
            newState = Array.from(newState).sort();
            newState = JSON.stringify(newState);

            // For this new state, add ( q, a ) =   to  , where the  on the right hand side is that of NFA M2.
            if (marked[newState] !== true) {
                marked[newState] = true;
                Q.push(newState);
                this.addTransition(state, newState, a);
                if (isFinalState) {
                    this.finalStates.push(newState);
                }
            }
        }
    }

    // When no more new states can be added to Q, the process terminates. All the states of Q that contain accepting states of M2 are accepting states of M.
};

module.exports = DFA;
