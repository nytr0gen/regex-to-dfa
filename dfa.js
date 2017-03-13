var DFA = function(initialState, finalState) {
    this.initialState = initialState;
    this.finalState = finalState;
    this._transitions = [];
    this._state = 0;
};

DFA.prototype.newState = function() {
    this._transitions.push({});

    return this._state++;
};

DFA.prototype.addTransition = function(from, to, accept) {
    this._transitions[from][accept] = to;
};

DFA.prototype.check = function(s) {
    var self = this;
    var _dfs = function(state, pos) {
        if (pos == s.length && state === self.finalState) {
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

// NFA.prototype.check = function(s) {
//     var finalStateId = this.finalState.id;
//     var _dfs = function(state, pos) {
//         if (!state.accepts(s[pos])) {
//             return false;
//         } else if (!state.acceptsEps()) {
//             pos++;
//         }

//         if (pos == s.length && state.id === finalStateId) {
//             return true;
//         }

//         for (var i in state.next) {
//             if (_dfs(state.next[i], pos)) {
//                 return true;
//             }
//         }

//         return false;
//     };

//     return _dfs(this.startState, 0);
// };

module.exports = DFA;
