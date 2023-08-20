"use strict";
/*Q1
var names:string[]=["shahzad","haseeb","hadi"];
function array(names:string[],index:number,newName:string):string []
{
    names.splice(index,0,newName);
    return names;
    
}
var arraay:string[]=array(names,1,"huzaifa");
console.log(arraay);
console.log();
*/
/* Q2
var shopingCart:string[]=["1-sarf","5kg-meezanOil","5kg-rice"];
function addSomeMoreItems(shopingCart:string[],index:number,newItem:string) {
    if (index>=0 && index<shopingCart.length) {
        shopingCart.splice(index,0,newItem);
        console.log(shopingCart);
        
        
    }
    else{console.log("invalid index");
    }
}
function removeItems(shopingCart:string[],index:number) {
    if (index>=0 && index<shopingCart.length) {
        shopingCart.splice (index , 1);
        console.log(shopingCart);
        

        
    }
    else{console.log("invalid index");
    }
    
}
function updateItems(shopingCart:string[],index:number,newItem:string) {
    if (index>=0 && index<shopingCart.length) {
        shopingCart.splice(index,1,newItem);
        console.log(shopingCart);
        
        
    }
    else{console.log("invalid index");
    }
}
addSomeMoreItems(shopingCart,0,"brush");
removeItems(shopingCart,1);
updateItems(shopingCart,2,"2kg daal chana");

console.log();
*/
/* Q3
var num:number=1
while (num<=25) {
    console.log(num);
    num++;
    
    
}
console.log();
*/
/* Q3
var even:number=1;
var even1:number=0
while (even<=50) {
    if (even%2==0) {
        even1++;
        console.log(even1+"even number->"+even);
        if (even1==10) {
            break;
            
        }
        
        
    }
    even++;
}
console.log();
*/
/* Q5
function factorial(value:number) {
    if (value>=0) {
        var num1:number=1;
        var fact:number=1;
        while (num1<=value) {
            fact=fact*num1;
            num1++;
        }
        return fact
    }
    else{return-1;}
}
var result:number=factorial(5);
if(result>=0){
    console.log("your ans is factorial " +result);
    
}
else{
    console.log("enter positive number.");
    
}
console.log();
*/
/* Q6
var array:number[]=[11,12,-3,12,-2,30];
var sizeOfArray=array.length;
var num1:number=0
while(num1<sizeOfArray){
    if (array[num1]<0)
     {
        array.splice(num1,1);
        
    }
    num1++;
}
console.log("remove negitive number" + array);
console.log();
*/
var array = [1, 2, 3, 4, 5];
function sumOfArray(array) {
    var num1 = 0;
    var sum = 0;
    var sizeOfArray = array.length;
    while (num1 < sizeOfArray) {
        sum = sum + array[num1];
        num1 += 1;
    }
    return sum;
}
var totalSum = sumOfArray(array);
console.log("sum of array" + totalSum);
console.log();
