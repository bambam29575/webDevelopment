// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'; //url assigned to url variable
const container = document.querySelector('#container'); //container section assigned to container variable

for(let i = 1; i <= 151; i++){
    const pokemon = document.createElement('div'); //div created each time
    const label = document.createElement('span');  //span created each time
    label.innerText = `#${i}`; 
    const img = document.createElement('img'); //image space created
    img.src = `${url}${i}.png`  //src added to img

    pokemon.appendChild(img); //image , span added inside div
    pokemon.appendChild(label);
    container.appendChild(pokemon); // div added inside section container
    
} 
