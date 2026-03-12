const params = new URLSearchParams(window.location.search)

let category = params.get("cat") || "all"

fetch("https://api.github.com/repos/abhu001987/Hotterbite/contents/posts")

.then(res => res.json())

.then(files => {

let slider = document.getElementById("slider")

files.forEach(file => {

fetch(file.download_url)

.then(res => res.text())

.then(data => {

let content = data.split("---")[2]

let title = data.match(/title:\s*(.*)/)[1]
let cat = data.match(/category:\s*(.*)/)[1]
let image = data.match(/image:\s*(.*)/)[1]

if(category === "all" || cat === category){

slider.innerHTML += `

<div class="post">

<img src="${image}">

<a href="https://en.wikipedia.org/wiki/India" class="back-btn">←</a>

<div class="content">

<div class="title">${title}</div>

<div class="text">${content}</div>

</div>

</div>

`

}

})

})

})
