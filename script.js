const params = new URLSearchParams(window.location.search)

let category = params.get("cat") || "all"

fetch("posts.json")

.then(res => res.json())

.then(posts => {

let slider = document.getElementById("slider")

if(!slider) return

posts.forEach(post => {

if(category === "all" || post.category === category){

slider.innerHTML += `

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

})
