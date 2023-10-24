// what is js 
// there is three types of languages
// markup,scripting,programming
// java script is scripting language
// it is interpreter language run line by line

// why js 
// html- content 
// css- Style
// js -functionality

// how computer reads javascript
// first it reads word and check it in js if found run tha code otherwise give error

// how we use js
// just create a script file and attach that file to html and now when html file loads,js file loads too

// alert
// alert();

// prompt
// prompt("it ask question")

// console log error console
// console.log("hey");
// console.warn("hey");
// console.error("hey");

// variables
// var ek keyword hai jiske through hum computer ko batate hai ki hum log ek value store karna chahte hai
// keywords are reseved words 
// how to asign value to variable  - var name=val; eg var a=1;
// const dulha="lab";
// const dulhan="laby";
// console.log(dulha +"wdes"+ dulhan)
// console.log(dulha + " weds " + dulhan)

// constants
// used to give fixed value

// types
// primitive & refrence
// primitive - aisi value jinko copy karne par real value copy hogi
// refrence -aisi values jinko copy karne par parents ka refrence copy hoga
// var a=14;
// var b=a;
// b=b+2; 

// conditonals
// if(2>3){

// }
// else {

// }

// truthy falsy values 
// 1 -1 positive or negative value truthy values 
// 0- falsy values
// NAN undefined null 0 "" false
// all others value are truthy values


// Loops- repeatation
// loops -for foreach forin while

// for(start ; end ; change){

// }

//Q1- print hello 5 times 
// for( var i=1;i<=5;i++){
//     console.log("hello");
// }

// // print 0-20
// for(var i=0;i<=20;i++){
//     console.log(i);
// }

// fibonacci series
// var k=0;
// var j=1;
// console.log(k)
// console.log(j)
// for(var i=0;i<=7;i++){
//     var next=k+j;
//     console.log(next)
//     k=j;
//     j=next;
// }

// functions -es5 es6
// ecmascript- community which manage js
// es5 - es6
// 6 types of function

// what is funcction
// block of code which can name anything and can run any Time 

//-- function abcd(){
//    function statement
// }

//-- var a=function(){
    // function expression
// }

//-- function(){
     // function annoynounmus
    //  anything that can run many time
    // used for callback
    // }

//-- fat arrow function
// var a = (val,val2)=>{ parameter
// }

// a(12); agrument 
// fat arrow fnc with one param
// fat arrow with implicit return

// --array 
// array hota hai 1 se jada elements ko ek sath rakhna 

// var a=[1,2,3,4,"hello"];
// how to use array
// a[3]=4

// array mein ek value hatate kaise hai last se
//  a.pop();

// array main ek value kaise add karte hai
// a.push();

// array se ek value kaise hatyenge beech se
// a.slice(konse index se hatana hai,kitne bande hatane hai)
//var a=[1,2,3,4,5,6,7,8];
// a.splice(4,1);
//a.splice(3,2);

// Objects
//object banaate hai jab ek element ki sari details saari details history
// var colin={
//      dev:"colin",
//      material:"plastic",
//      price:70,
//      mahngahaikya:false,
//      khamiltahai:"dukaan pe"
// }
// var user={
//     name:"dev",
//     age:20,
//     email:"abc@gmail.com",
// }

// if there is dot after any thing than it is Object
// eg- a.b.c here a and be are objects c may or may not me object