const formPost = document.querySelector('#formPost')
const input = document.querySelector('#input')
const animals = document.querySelector('#animals')

formPost.addEventListener('submit', function(e) {
    e.preventDefault();
    const animal = input.value;
    const newLi = document.createElement('li');
    newLi.innerText = animal;
    animals.append(newLi);
    input.value = "";
})
