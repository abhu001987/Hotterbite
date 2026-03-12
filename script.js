// read category from URL
const params = new URLSearchParams(window.location.search);
const selectedCategory = params.get("cat");

// fetch JSON posts
fetch("posts.json")
.then(response => response.json())
.then(posts => {

const container = document.getElementById("posts");

// clear container
container.innerHTML = "";

// loop posts
posts.forEach(post => {

    // if category filter exists and does not match → skip
    if(selectedCategory && post.category !== selectedCategory){
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
