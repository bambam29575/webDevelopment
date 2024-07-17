const formPost = document.querySelector('#formPost')
const input = document.querySelector('#input')
const animals = document.querySelector('#animals')

formPost.addEventListener('submit', function(e) {
    e.preventDefault();
    const animal = input.value; //stores value of input in animal variable
    const newLi = document.createElement('li'); //new li created
    newLi.innerText = animal; //li value is written according to animal value
    animals.append(newLi); //Under animals ul , li is being added
    input.value = ""; //Clears the input text area
})
