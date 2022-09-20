function receivesAFunction (tacos) {
    tacos()
};

function returnsANamedFunction() {
    return function tacos(){}}

function returnsAnAnonymousFunction() {
    return function () {};
}