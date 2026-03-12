const params = new URLSearchParams(window.location.search);
const category = params.get("cat");

fetch("posts.json")
.then(res => res.json())
.then(posts => {

const container = document.getElementById("posts");

posts.forEach(post => {

if(category && post.category !== category){
return;
}

const card = document.createElement("div");
card.className = "post";

card.innerHTML = `
<img src="${post.image}">

<div class="post-meta">
<span class="category-badge">${post.category}</span>
<span class="post-date">${post.time}</span>
</div>

<div class="content">
<h2>${post.title}</h2>
<p>${post.content}</p>
</div>
`;

container.appendChild(card);

});

});
