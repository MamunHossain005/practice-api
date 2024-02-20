function loadLatitude() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayLatitude(data));
}

function displayLatitude(data) {
    const ul = document.getElementById('latitudes-list');
    for(let user of data) {
        const li = document.createElement('li');
        li.innerText = user.address.geo.lat;
        ul.appendChild(li);
    }
}