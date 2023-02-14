function app(a, b) {
    return a + b;
}

function cal(a, b) {
    if(a === 2) return "NO";
    else return a * b;
}

module.exports = {app, cal};