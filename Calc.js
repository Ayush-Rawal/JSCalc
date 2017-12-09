const pi = 3.1415926535897932385;
const e = 2.7182818284590452354;

global.num_val = null;
global.input = "3 + 2";
global.res = null;
global.prompt = require('prompt');


var sum = (a, b) => a + b;

var diff = (a, b) => a - b;

var prod = (a, b) => a * b;

var div = (a, b) => a / b;

var power = (a, b) => a ** b;

var operation = function(fx, a, b) {
    return fx(a, b);
}

var gen_token = function(elem) {
    var curr_tok;
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
    else num_val = parseFloat(elem);

    if (num_val === null && (elem === '*' || elem === '/' || elem === '^'))
        res = 1;
    return curr_tok;
}

var prim = function(curr_tok) {
    if (curr_tok === sum || curr_tok === prod || curr_tok === diff || curr_tok === div || curr_tok === power) {
        res = operation(curr_tok, res, num_val);
    }
}

var parser = function(inp) {
    inp.forEach(element => {
        curr_tok = gen_token(element);
        prim(curr_tok);
        curr_tok = null;
    });
}


// var get_input = function() {
//     getin(); //code to get input
//     setTimeout(proc_input, 100000);
// }

function validate_input(inp) {
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

getin(); //code to get input
setTimeout(proc_input, 4000);
setTimeout(() => { console.log("Result is: " + res); }, 9000);

function getin() {
    prompt.get('in', function(err, result) {
        if (!err) {
            input = result.in;
            console.log(input);
        }
    })
}

function proc_input() {
    input = input.split(" ");

    //if (validate_input(input)) {
    parser(input);
    // } else {
    //     console.error("Invalid input entered");
    // }
}