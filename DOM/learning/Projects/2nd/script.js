var arr =[
    {dp:"https://media.istockphoto.com/id/640299760/photo/beautiful-woman-face-portrait-beauty-model-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=Vk_p19bYBJbxgv8iPOSl2WmK-24wxWtwpN5NYjH-zx0=",img:"https://media.istockphoto.com/id/1271153890/photo/beautiful-young-asian-woman-confident-gesture-say-hello-or-greeting-with-waving-her-hand-on.jpg?s=612x612&w=0&k=20&c=S28fViOGxV0CG8YWra5vw181ujGsWjxr84o2d7iUCkU="},
    {dp:"https://media.istockphoto.com/id/846730696/photo/portrait-teenager.webp?b=1&s=170667a&w=0&k=20&c=PNz3dsppr_Q0s_dNI_LaZdoY0oQtH812tvwZ13n-ods=",img:"https://plus.unsplash.com/premium_photo-1682095661711-f5d67d0e75a9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYXV0aWZ1bCUyMGdpcmxzfGVufDB8fDB8fHww"},
    {dp:"https://media.istockphoto.com/id/629771548/photo/surprised-happy-beautiful-woman-looking-sideways-in-excitement-isolated.webp?b=1&s=170667a&w=0&k=20&c=5Crn26vOOcgzKofa6BKQLv2vgrEJpsxvc0xhv_liybk=",img:"https://media.istockphoto.com/id/821880524/photo/fashion-pretty-cool-girl-drinks-from-cup-over-pink-background.webp?b=1&s=170667a&w=0&k=20&c=rPc9l8P-5WHUcd2jCWuDvVgwX-t-ve1VqD1oQG2b7qc="}
]

var clutter = ""
arr.forEach(function(elem,idx){
    clutter+=(` <div class="story">
    <img id="${idx}" src="${elem.dp}">
</div>`)
})

document.querySelector("#stories").innerHTML=clutter

  var grow=0
  document.querySelector("#stories").addEventListener("click",function(dets){
  document.querySelector("#full-scr").style.display="block"
  document.querySelector("#full-scr").style.backgroundImage = `url(${arr[dets.target.id].img})`
  setTimeout(function(){
  document.querySelector("#full-scr").style.display=`none`;
  },3000)
  if(grow<100){
  setInterval(function(){
   document.querySelector("#growth").style.width=`${grow++}%`
  
  },30)
}
  else{
    grow=0
  }
})


