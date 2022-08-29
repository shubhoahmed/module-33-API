const randomUserLoad = () => {
    const url = `https://randomuser.me/api/?results=50`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayUser(data.results))
}
const displayUser = users => {
    const userContainer = document.getElementById('random-user-conainer');
    for (const user of users) {
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user')
        userDiv.innerHTML = `
        <img src="${user.picture.large}" alt="Girl in a jacket" >
        <h3>User Name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <p>User Cell: ${user.cell}</p>
        <p>User Email: ${user.email}</p>
        <p>User Location: ${user.location.city}, ${user.location.country}.</p>
        `
        userContainer.appendChild(userDiv);
    }

}

randomUserLoad();