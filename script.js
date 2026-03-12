const params = new URLSearchParams(window.location.search)

let category = params.get("cat") || "all"

fetch("https://api.github.com/repos/abhu001987/Hotterbite/contents/posts")

.then(res => res.json())

.then(files => {

let slider = document.getElementById("slider")

files.reverse().forEach(file => {

fetch(file.download_url)

.then(res => res.text())

.then(data => {

let content = data.split("---")[2]

let title = data.match(/title:\s*(.*)/)[1]
let cat = data.match(/category:\s*(.*)/)[1]
let image = data.match(/image:\s*(.*)/)[1]

let date = file.name.split("-").slice(0,3).join("-")

if(category === "all" || cat === category){

slider.innerHTML += `

<div class="post">

<div style="position:relative">

<img src="${image}">

<a href="https://en.wikipedia.org/wiki/India" class="back-btn">←</a>

</div>

<div class="content">

<div class="title">${title}</div>

<div class="text">${content}</div>

</div>

<div class="post-footer">

<div class="category-badge">${cat}</div>

<div class="post-date">${date}</div>

</div>

</div>

`

}

})

})

})
