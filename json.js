 const loadButton = () => {
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(res => res.json())
  .then(data => loadComments(data))
}

const loadComments = data => {
  console.log(data);
  const buttonDiv = document.getElementById('button');
  data.forEach(comment => {
    console.log(comment);
    const div = document.createElement('div');
    div.classList.add('comment')
    div.innerHTML = `
     <h4>Name: ${comment.name}</h4>
     <h5>postId: ${comment.postId}</h5>
     <h5>id: ${comment.id}</h5>
     <h5>Email: ${comment.email}</h5>
     
    `
    buttonDiv.appendChild(div);
  })

} 