let pokeName = "xurkitree"
let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
let fluidContainer = document.getElementsByClassName("container-fluid")[0];

//quality of life funcs
function create(elem){
    return document.createElement(elem);
}
function text(parent, text){
    return parent.innerText = text;
}
function add(parent, child){
    return parent.appendChild(child);
}
//get stuff funcs
function getTypes(pokeObj){
    let types = [];
    for(let type of pokeObj.types){
        types.push(type.type.name);
    }
    return types;
}
function getMoves(pokeObj){
    let moves = [];
    for(let move of pokeObj.moves){
        moves.push(move.move.name);
    }
    return moves;
}
function getAbilities(pokeObj){
    let abilities = [];
    for (let ability of pokeObj.abilities){
    abilities.push(ability.ability.name);
    }
    return abilities;
}
function getImg(pokeObj){
    return pokeObj.sprites;
}
function getDesc(pokeObj){
    fetch(pokeObj.species.url)
    .then((resp)=> resp.json())
    .then(function(species){
        let descriptions = species.flavor_text_entries;
        for(english of descriptions){
            console.log(english);
            if(english.language = "en"){

            }
        }
    })
}


//create element

function createPokeElement(pokemon){
let div = create("div");
    //h1 tag for name
    let head = create("h1");
    text(head, pokemon.name);
    //ing tag for image
    let img = create("img");
    img.src =  pokemon.img;
    //p tag for types
    let p = create("p");
    for (let type of pokemon.types){
    p.innerText += `${type}`;
    }
    //h2 for number
    let h2 = create("h2");
    text(h2, pokemon.number);
    //ul tag for abilities
    let ulAbl = create("ul");
    for(let ability of pokemon.abilities){
    ulAbl.innerHTML += `<li>${ability}</li>`;
    }
    //ul tag for moves
    let ulMo = create("ul");
    for(let move of pokemon.moves){
    ulMo.innerHTML += `<li>${move}</li>`;    
    }
    add(div, head);
    add(div, img);
    add(div, h2);
    add(div, p);
    add(div, ulAbl);
    add(div, ulMo);
    add(fluidContainer, div);
}

fetch(url)
.then((resp) => resp.json())
.then(function(data){
    let name = data.name;
    let num = data.id;
    let types = getTypes(data);
    let moves = getMoves(data);
    let abilities = getAbilities(data);
    let sprite = getImg(data).front_default;
    let description = getDesc(data);
    let yveltal = new Pokemon(name, types, description, abilities, num, moves, sprite);
    console.log(yveltal);
    console.log(data);
    console.log(data.sprites);
    createPokeElement(yveltal);
})
.catch(function(error){
    console.log(error);
})

