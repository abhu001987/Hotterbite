function publishPost(){

let title = document.getElementById("title").value
let image = document.getElementById("image").value
let content = document.getElementById("content").value
let category = document.getElementById("category").value

let post = {

title:title,
image:image,
content:content,
category:category,
time: new Date().toLocaleString()

}

let posts = JSON.parse(localStorage.getItem("posts")) || []

posts.unshift(post)

localStorage.setItem("posts", JSON.stringify(posts))

alert("Post Published")

document.getElementById("title").value=""
document.getElementById("image").value=""
document.getElementById("content").value=""

}

function loadPosts(category){

let posts = JSON.parse(localStorage.getItem("posts")) || []

let container = document.getElementById("posts")

if(!container) return

container.innerHTML=""

posts.forEach(post => {

if(category=="All" || post.category==category){

container.innerHTML += `

<div class="post">

<img src="${post.image}">

<div>

<span class="category">${post.category}</span>

<span class="time">${post.time}</span>

</div>

<h3>${post.title}</h3>

<p>${post.content}</p>

</div>

`

}

})

}
