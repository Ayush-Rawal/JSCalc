const pi = 3.1415926535897932385;
const e = 2.7182818284590452354;

num_val = null;
input = "";

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

}

var prim = function() {
    if (curr_tok === sum || curr_tok === prod || curr_tok === diff || curr_tok === div) {
        res = operation(curr_tok, res, num_val);
    }
}

var parser = function(inp) {
    inp.forEach(element => {
        curr_tok = gen_token(element);
        prim();
    });
}


var get_input = function() {
    input = prompt("Enter expression");
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
    if (!flag) {
        return true;
    } else {
        return false;
    }
}

get_input();