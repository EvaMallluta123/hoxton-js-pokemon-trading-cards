// @ts-nocheck
// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

console.log(data);
function createCard(data){
    let liEl= document.createElement("li")
    liEl.className="card"

    let h2El= document.createElement("h2")
    h2El.className="card--title"
    h2El.textContent= `${data.name}`

    let imgEl= document.createElement("img")

    imgEl.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    imgEl.width = 256
    imgEl.className="card--img"

    let ulEl=document.createElement("ul")
    ulEl.className="card--text"

    let liEl2= document.createElement("li")
    // for (let stats of data.stats)  
    // liEl2.textContent=`${data[0].stats[0].stat.name} : ${data[0].stats[0].base_stat}` 
     for (let i=0; i<data['some-key'] ; i++) {
    
        // for (let i=0; i<data[0].stats.length[`some key`]; i++) {
    let stat=data[0].stats[0].stat.name
    let stat2=data[0].stats[0].base_stat
    liEl2.textContent=`${stat} : ${stat2}`
     }


    liEl.append( h2El, imgEl, ulEl, liEl2 )

    let dataUl = document.querySelector(".cards")
      dataUl.append(liEl)

}
for (let card of data) {
    createCard(card)
    break
  }