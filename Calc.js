const pi = 3.1415926535897932385;
const e = 2.7182818284590452354;

num_val = null;
input = "";
res = null;

var sum = (a, b) => a + b;

var diff = (a, b) => a - b;

var prod = (a, b) => a * b;

var div = (a, b) => a / b;

var power = (a, b) => a ** b;

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
    else if (elem === 'pi')
        num_val = pi;
    else if (elem === 'e')
        num_val = e;

    if (num_val === null && (elem === '*' || elem === '/' || elem === '^'))
        res = 1;
}

var prim = function(inp) {
    if (curr_tok === sum || curr_tok === prod || curr_tok === diff || curr_tok === div || curr_tok === power) {
        res = operation(curr_tok, res, num_val);
        curr_tok_tok = null;
    } else {
        num_val = parseFloat(inp);
    }
}

var parser = function(inp) {
    inp.forEach(element => {
        curr_tok = gen_token(element);
        prim();
    });
    return res;
}


var get_input = function() {
    //code to get input

    input = input.split(" ");

    if (validate_input(input)) {
        parser(input);
    } else {
        console.error("Invalid input entered");
    }
}

var validate_input = function(inp) {
    // input should only contain numbers, operators, e and pi
    var flag = false;
    inp.forEach(element => {
        if (function(element) {
                element.split("").forEach(elem => {
                    if (!(elem == 1 || elem == 2 || elem == 3 || elem == 4 || elem == 5 || elem == 6 || elem == 7 || elem == 8 || elem == 9 || elem == 0)) {
                        return false;
                    }
                });
                return true;
            } || element === "e" || element === "pi" || elem === '*' || elem === '+' || elem === '-' || elem === '/' || elem === '^') {
            flag = true;
        } else {
            flag = false;
        }
    });
    return flag;
}

get_input();
console.log("Result is: " + res);