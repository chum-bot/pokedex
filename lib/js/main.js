let url = `https://pokeapi.co/api/v2/pokemon/yveltal`;

fetch(url)
.then((resp) => resp.json())
.then(function(data){
    let name = data.name;
    console.log(data);
    console.log(name);
})
.catch(function(error){
    console.log(error);
})