// Dom steps
// Selection of element
// change in html of element
// change in css of element
// event listner

// var abc=document.querySelector("h2");
// // ----selection in html
// abc.innerHTML="how are you";
// // // ----change in css
// // abc.style.color=("red")
// // abc.style.backgroundColor=("yellow")
// // // ---event listner
// var ab=document.querySelector("button")
//  ab.addEventListener("click",function(){
//  abc.style.color=("red")
//  abc.style.backgroundColor=("yellow")

//  })


// var btn=document.querySelector("button")
// btn.addEventListener("dblclick",function(){
//     var h2=document.querySelector("h2");
//     h2.style.color="red";
// })
// var btn=document.querySelector("button")
// btn.addEventListener("mouseover",function(){
//     var h2 =document.querySelector("h2");
//    h2.style.color="red"; 
// });




// ------basic project
// var btn=document.querySelector("button");
// var h5=document.querySelector("h5")

// var flag=0
// btn.addEventListener("click",function(){
//     if(flag==0){
//         h5.innerHTML="Friends"
//         h5.style.color=("green")
//         btn.innerHTML="Remove friend"
//         flag=1
//     }else{
//         h5.innerHTML="Strangers"
//         h5.style.color=("red")
//         btn.innerHTML="Add friend"
//         flag=0
//     }
    
// })


// -------basic project

// var btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//    var ab= document.querySelector("#fs");
//    ab.style.opacity= 1;
//    var ab= document.querySelector("#model");
//    ab.style.top= "15%";
// })


// Q1 we have an array containing n No. of 
// elements and we want to keep all postive and remove negative

// var arr=[1,-2,7,-9,50,56,-4,8,5,-5,98,-8];

// // arr.forEach(function(val,index){
// //     if(val<0){
// //         arr.splice(index,1)
// //     }
// // })

// var count=0;
// for(var i=0;i< arr.length;i++){
//     if(arr[i]<0){
//         count++;
//     }
// }
// for(var j=1;j<=count;j++){
// for(var i=0;i< arr.length;i++){
//     if(arr[i]<0){
//         arr.splice(i,1);
//         break;
//     }
// }
// }

// remove all the candidates which are younger than 12
var arr=[
    {name:"Harsh",age: 24, gender: "Male"},
    {name:"Harshit",age: 20, gender: "Male"},
    {name:"Harshita",age: 2, gender: "female"},
    {name:"om",age: 14, gender: "Male"},
    {name:"abhay",age: 8, gender: "Male"},
    {name:"jordan",age: 19, gender: "other"},
]
 var arr2 = arr.filter(function(val){
    return val.age > 12;

})