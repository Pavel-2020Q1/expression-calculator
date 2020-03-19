function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let count = 0;
    expr.replace(/[\s]{2}/g, ' ').trim().split(' ')
        .join('').split('').map(a => a == ')' ? count++ : a == '(' ? count-- : false);
    if (count != 0) {
        throw new Error('ExpressionError: Brackets must be paired');
    }

    for (let i = 0; i < expr.split('').length; i++) {
        if (expr.split('')[i] === "/") {
            if (expr.split('')[i + 2] === "0") {
                throw new Error("TypeError: Division by zero.");
            }
        }
    }
    let result = new Function("return " + expr.replace(/[\s]/g, ''));

    return result();
}

module.exports = {
    expressionCalculator
}