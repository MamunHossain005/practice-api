function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data));
}

function displayPost(posts) {
    const postsContainer = document.getElementById('posts-container');
    for(let post of posts) {
        const div = document.createElement('div');
        div.innerHTML = `
            <h4>User ID:-${post.id}</h4>
            <h5>Post: ${post.title}</h5>
            <p>Post Description: ${post.body}</p>
        `;
        div.classList.add('post');
        postsContainer.appendChild(div);
    }
}

loadPosts();

function createPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function patchAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'foo',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function deleteAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
    });
}