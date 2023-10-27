// event bubbling - jis bhi element pe koi event raise hota hai agar listner uspar na ho to wo event bubble hoke uske parent 
// par chala jaata hai


var arr=[
    {name:"Dev yadav",img:"https://images.unsplash.com/photo-1519764622345-23439dd774f7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95c3xlbnwwfHwwfHx8MA%3D%3D", status:"Stranger"},
    {name:"Devendra ",img:"https://images.unsplash.com/photo-1502307100811-6bdc0981a85b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D", status:"Stranger"},
    {name:"Jordan",img:"https://images.unsplash.com/photo-1559386484-97dfc0e15539?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D", status:"Stranger"}
]
function print(){
    var clutter ="";

arr.forEach(function(val,index){
    clutter +=`<div class="card">
    <div id="img">
       <img src="${val.img}">
    </div>
    <h3>${val.name}</h3>
    <h4 id="${val.status}">${val.status}</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repu
        diandae omnis cupiditate reiciendis.</p>
    <button class="${val.status === "Stranger" ? "blue" : "red"}" id="${index}">${val.status === "Stranger" ? "Add Friend" : "Remove Friend"}</button>
</div>`;
})
 document.querySelector("#main").innerHTML=clutter;
}
print();

  document.querySelector("#main")
 .addEventListener("click",function(details){
  arr[details.target.id].status="Friends";
  print();
  })