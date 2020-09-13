const generateCat = () => {
    let image = document.createElement('img');
    image.setAttribute('src', 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small');

    let div = document.getElementById('flex-cat-gen');
    div.appendChild(image);

    // image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
}