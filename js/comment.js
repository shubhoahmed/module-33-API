const loadComment = () => {
    const url = `https://jsonplaceholder.typicode.com/comments`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayComment(data.splice(0, 10)));
}

const displayComment = comments => {
    console.log(comments);
    document.getElementById('btn-load');
    comments.forEach(comment => {
        const commentContainer = document.getElementById('comment-container');
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
        <p>Post Id: ${comment.postId}</p>
        <p>Name: ${comment.name}</p>
        <p>ID: ${comment.id}</p>
        <p>Email: ${comment.email}</p>
        <p>Body: ${comment.body}</p>
    
        `
        commentContainer.appendChild(div);

    })



}
// loadComment();