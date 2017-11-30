const pokemonList = document.getElementById('pokemons');
let offset = 0;

window.onload = () => {
  loadPokemons();
};

function loadPokemons() {
  fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=' + offset).then(response => {
    response.json().then(pokelist => {
      let html = '';
      for (const pokemon of pokelist.results) {
        html += `<tr><td>${pokemon.name}</td><td><button type="button" id="` + pokemon.id + `" onclick="detail('${pokemon.url}')">Detail</button></td></tr>`
      }
      pokemonList.innerHTML = html;
    });
  });
};

function next() {
  offset += 20;
  loadPokemons();
};

function previous() {
  if (offset >= 20) {
    offset -= 20;
    loadPokemons();
  }
};

function display() {
  if (pokemonList.style.display === "none") {
    pokemonList.style.display = "block";
    document.getElementById('btnPrevious').style.display = "block";
    document.getElementById('btnNext').style.display = "block";
    document.getElementById('pokemon').style.display = "none";
  } else {
    pokemonList.style.display = "none";
    document.getElementById('btnPrevious').style.display = "none";
    document.getElementById('btnNext').style.display = "none";
    document.getElementById('pokemon').style.display = "block";
  }
}


async function detail(url: string) {
  display();
  let detailTable = document.getElementById('pokemon');
  const response = await fetch(url);
  const poke = await response.json();

  let html = '';
  html = `<table><tr><td>${poke.name}</td></tr>
          <tr><td><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/`+poke.id+`.png"</td></tr>
          <tr><td>Weight: </td><td>${poke.weight}</td></tr>
          <tr><td>Height: </td><td>${poke.height}</td></tr></table>
          <button type="button" id="btnBack" onclick="display()">zurück zu Liste</button>`;
  detailTable.innerHTML = html;
};