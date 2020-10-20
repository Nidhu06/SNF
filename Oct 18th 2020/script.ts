/* sum */

function sum(...arg){
let sum = 0;
for(let ar of arg){
    sum += ar;
}
 return(sum);
}
console.log(`Sum of all the value : ${sum(4,2,8,6)}`);


/*filter */

const Filtering = (arr) => {
const newarray = [];
for(let i = 0;i<arr.length;i++)
{
    if(arr[i].length>6)
    {
        newarray.push(arr[i]);
    }
}
return newarray;
}
console.log(`Your New Filtered Array is : ${Filtering(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'])}`);


/* reduce */

const Reducing = (numbers) => {
let reduce = 0;
for(let n of numbers)
{
    reduce += n;
}
return reduce;
}
console.log(`Your New Reduced Array is : ${Reducing([1,-1,2,3])}`);

/* find */
const arrayFind = (arr, element) => {
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > element){
            console.log(`Result of Find Method in ${arr} greater than ${element} is ${arr[i]}`);
            break;
        }
    }
}
arrayFind([1, 2, 3, 4, 5, 6, 7, 8], 4);


/* chunk */

const customChunk = (arr, size) => {
    const newArray = [];
    
    for (let i = 0; i < arr.length; i += size) {
        let arrayChunk = [];

        for (let j = i; j < i + size; j++) {
            if (typeof (arr[j]) !== 'undefined')
                arrayChunk.push(arr[j]);
        }
        newArray.push(arrayChunk);
    }
    return newArray;
};
const arrChunk = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`Result of Chunk method is :`);
console.log(customChunk(arrChunk, 6));


/* max */

const findMax = (arr) =>{
let max = arr[0];
for(let i = 0;i<arr.length;i++)
{
   if(arr[i]>=max)
   {
      max = arr[i];
    }
}
return max;
}
console.log(`The Maximum Value is : ${findMax([-5, 10, -3, 12, -9, 5, 90, 0, 1])}`);

/* min */

const findMin = (arr) =>{
let min = arr[0];
for(let i = 0;i<arr.length;i++)
{
   if(arr[i]<=min)
   {
      min = arr[i];
    }
}
return min;
}
console.log(`The Minimum Value is : ${findMin([-5, 10, -3, 12, -9, 5, 90, 0, 1])}`);


/* reverse */

const findRev = (arr) =>{
let rev1 = "";     
for(let i=arr.length-1;i>=0;i--)
{
    rev1 = rev1 + arr[i] + " ";
}
console.log(`The Reversed Array : ${rev1.trim()}`);
}
findRev([5,25,6,30,7,35,8,40,9,45]);


/* sortedUniq - Prints a new array without any duplicate values  */

let sortedUniq = (a) =>{
let b = [];
let len = a.length;
for(let i = 0; i < len; i++)
{
 for(let j = i+1; j < len; )
    {
    if(a[j] == a[i])
    {
        for(let k = j; k < len; k++)
            {
             a[k] = a[k+1];
               }
               len--;
            }
          else
        {
         j++;
        }
    }   
 }  
for(let i = 0; i < len; i++)
{
b.push(a[i]);
}    
console.log(`The Unique Array : ${b}`); 
}
sortedUniq([11,11,11,12,12,13]);

