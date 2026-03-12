function publishPost(){

let title=document.getElementById("title").value
let image=document.getElementById("image").value
let content=document.getElementById("content").value
let category=document.getElementById("category").value

let posts=JSON.parse(localStorage.getItem("posts"))||[]

posts.unshift({

title:title,
image:image,
content:content,
category:category,
time:new Date().toLocaleString()

})

localStorage.setItem("posts",JSON.stringify(posts))

alert("Post Published")

}

/* reader */

const params=new URLSearchParams(window.location.search)

let category=params.get("cat")||"all"

let posts=JSON.parse(localStorage.getItem("posts"))||[]

let slider=document.getElementById("slider")

if(slider){

posts.forEach(post=>{

if(category=="all"||post.category==category){

slider.innerHTML+=`

<div class="post">

<img src="${post.image}">

<a href="https://en.wikipedia.org/wiki/India" class="back-btn">←</a>

<div class="content">

<div class="time">${post.time}</div>

<div class="title">${post.title}</div>

<div class="text">${post.content}</div>

</div>

</div>

`

}

})

}
