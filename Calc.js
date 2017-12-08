const pi = 3.1415926535897932385;
const e = 2.7182818284590452354;

num_val = null;
input = "";
res = null;

var sum = function(a, b) {
    return a + b;
}

var diff = function(a, b) {
    return a - b;
}

var prod = function(a, b) {
    return a * b;
}

var div = function(a, b) {
    return a / b;
}

var power = function(a, b) {
    return Math.pow(a, b);
}

var operation = function(fx, a, b) {
    return fx(a, b);
}

var gen_token = function(elem) {
    if (elem === '*')
        curr_tok = prod;
    else if (elem === '+')
        curr_tok = sum;
    else if (elem === '-')
        curr_tok = diff;
    else if (elem === '/')
        curr_tok = div;
    else if (elem === '^')
        curr_tok = power;

    if ((elem === '*' && num_val === null) || (elem === '/' && num_val === null) || (elem === '^' && num_val === null))
        res = 1;
}

var prim = function(inp) {
    if (curr_tok === sum || curr_tok === prod || curr_tok === diff || curr_tok === div || curr_tok === power) {
        res = operation(curr_tok, res, num_val);
    } else {
        num_val = parseFloat(inp);
    }
}

var parser = function(inp) {
    inp.forEach(element => {
        curr_tok = gen_token(element);
        prim();
    });
    console.log(res);
}


var get_input = function() {
    //code to get input

    input = input.split(" ");

    var valid = validate_input(input);
    if (valid) {
        parser(input);
    } else {
        console.error("Invalid input entered");
    }
}

var validate_input = function(inp) {
    // input should only contain numbers, operators, e and pi
    var flag = false;
    if (!flag) {
        return true;
    } else {
        return false;
    }
}

get_input();