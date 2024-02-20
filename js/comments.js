function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => displayComment(data));
}

function displayComment(comments) {
    const commentContainer = document.getElementById('comments-container');
    for(comment of comments) {
        const div = document.createElement('div');
        div.innerHTML = `
            <h4>Name: ${comment.name}</h4>
            <h5>Email: ${comment.email}</h5>
            <p>Comment: ${comment.body}</p>
        `;
        div.classList.add('comment-style');
        commentContainer.appendChild(div);
    }
}

loadComments();