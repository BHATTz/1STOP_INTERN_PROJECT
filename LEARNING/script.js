// alert('JS file is LINKED !!!')
// console.log('hello JS !!!')
// console.log("message is printed");

// let myName = "Bhatt";

// function showMyName(){
//     let myName = "Bhatt";
//     alert(myName)
//     printAStatementWithMyName(myName)
// }
// function printAStatementWithMyName(myName){
//     alert("HEY "+myName+", HOW ARE YOU");
// }

// let func=(ar1,ar2)=> expression
// function sum(a,b){
//     return parseInt(a)+parseInt(b);
// }
// alert(sum(10,15));
// let sumFunc = (arg1,arg2) => parseInt(arg1)+parseInt(arg2);
// alert(sumFunc(25,5));

// let sumfunction = function(arg1,arg2){
//     parseInt(arg1)+parseInt(arg2);
// }; 

//declare array
// const menu = ["spring role","pizza","sandwich","roles","puff"]; //(0,1,2)
// const cars = new Array("bmw","tata","mahindra");
// console.log("without sorting");
// console.log(menu,cars);
// console.log(menu);
// menu.push("sambar dossa","massala dossa");
// console.log(menu);

// menu.pop();
// console.log(menu);

// console.log("index value is :" + (parseInt(menu.length) - 2));
// console.log(menu[menu.length-2]);


// console.log(cars);

// console.log(menu[2]);
// console.log(menu.length);

// menu.sort(); //for sorting an array
// console.log("after sorting");
// console.log(menu);

// for(i = 0; i<menu.length; i++ ){
//     console.log('we are now printing index position'+i)
//     console.log(menu[i]);
// }

// const numbersarray1 = [1];
// const numbersarray1 = [3,2];
// console.log(numbersarray1);

// const numbersarray2 = new Array(2,3);
// console.log(numbersarray2);

// myarray = [1,2,3,4,5]
// myarrayofobject = [
//     {
//         "name":"mark",
//         "age":67    
//     },
//     {
//         "name":"sita",
//         "age":89
//     }
// ]
// console.log(myarray);
// console.log(myarrayofobject);

// let newobjectforarray = {
//     name:"ram",
//     age:23
// }
// myarrayofobject.push(newobjectforarray);

let coffeecup = {
    color:'white',
    size: 'm',
    hassaucer:true,
    printwhatudo:function(){
        console.log("i contain either cofee or tea");
    }
};
//dot notation
// console.log("the coffee cup is of size :" + coffeecup.size);
//array notation
// if(coffeecup['hassaucer']==true){
//     console.log('the coffee cup has a saucer');
// }

// console.log(coffeecup);
// coffeecup.color='black';

// console.log(coffeecup);
// coffeecup.yearofmake=2015;

// console.log(coffeecup);
// delete coffeecup.hassaucer;

// coffeecup.size='l';

console.log(coffeecup);
coffeecup.printwhatudo();