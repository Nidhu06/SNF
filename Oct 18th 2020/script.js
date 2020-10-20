/* sum */

function sum() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, arg_1 = arg; _a < arg_1.length; _a++) {
        var ar = arg_1[_a];
        sum += ar;
    }
    return (sum);
}
console.log("Sum of all the value : " + sum(4, 2, 8, 6));


/*filter */

var Filtering = function (arr) {
    var newarray = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > 6) {
            newarray.push(arr[i]);
        }
    }
    return newarray;
};
console.log("Your New Filtered Array is : " + Filtering(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']));


/* reduce */

var Reducing = function (numbers) {
    var reduce = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var n = numbers_1[_i];
        reduce += n;
    }
    return reduce;
};
console.log("Your New Reduced Array is : " + Reducing([1, -1, 2, 3]));


/* find */

var arrayFind = function (arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > element) {
            console.log("Result of Find Method in " + arr + " greater than " + element + " is " + arr[i]);
            break;
        }
    }
};
arrayFind([1, 2, 3, 4, 5, 6, 7, 8], 4);

/* chunk */

var customChunk = function (arr, size) {
    var newArray = [];
    for (var i = 0; i < arr.length; i += size) {
        var arrayChunk = [];
        for (var j = i; j < i + size; j++) {
            if (typeof (arr[j]) !== 'undefined')
                arrayChunk.push(arr[j]);
        }
        newArray.push(arrayChunk);
    }
    return newArray;
};
var arrChunk = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Result of Chunk method is :");
console.log(customChunk(arrChunk, 6));


/* max */


var findMax = function (arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= max) {
            max = arr[i];
        }
    }
    return max;
};
console.log("The Maximum Value is : " + findMax([-5, 10, -3, 12, -9, 5, 90, 0, 1]));


/* min */

var findMin = function (arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= min) {
            min = arr[i];
        }
    }
    return min;
};
console.log("The Minimum Value is : " + findMin([-5, 10, -3, 12, -9, 5, 90, 0, 1]));


/* reverse */


var findRev = function (arr) {
    var rev1 = "";
    for (var i = arr.length - 1; i >= 0; i--) {
        rev1 = rev1 + arr[i] + " ";
    }
    console.log("The Reversed Array : " + rev1.trim());
};
findRev([5, 25, 6, 30, 7, 35, 8, 40, 9, 45]);


/* sortedUniq - Prints a new array without any duplicate values  */


var sortedUniq = function (a) {
    var b = [];
    var len = a.length;
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len;) {
            if (a[j] == a[i]) {
                for (var k = j; k < len; k++) {
                    a[k] = a[k + 1];
                }
                len--;
            }
            else {
                j++;
            }
        }
    }
    for (var i = 0; i < len; i++) {
        b.push(a[i]);
    }
    console.log("The Unique Array : " + b);
};
sortedUniq([11, 11, 11, 12, 12, 13]);
