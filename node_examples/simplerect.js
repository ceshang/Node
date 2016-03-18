/**
 * Created by CeShang on 2016/3/17.
 * To execuate. Input command as "Node simplerect --l=2 --b=3"
 */
var rect = require('rect');

var argv = require('yargs')
    .usage('Usage:node $0 --l=[num] --b=[num]')
    .demand(['l','b'])
    .argv;

function solveRect(l,b){
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    rect(l,b,function(err,rectangle) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("the area of a rectangle of dimensions length = " + l +
                " and breadth = " + b + " is " + rectangle.area(l, b));
            console.log("the perimeter of a rectangle of dimensions length = "
                + l + " and breadth = " + b + " is " + rectangle.perimeter(l, b));
        }
    });
}

solveRect(argv.l,argv.b);
