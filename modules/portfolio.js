import items from "./portfolioItems"
let portfolioContainer = document.getElementById('portfolio-container')

export function renderPortfolio(){
  items.map(item => {
    if(item.id % 2 == 0){
      portfolioContainer.innerHTML+= `
      <div class="even">
        <img src="public/${item.image}" width="500" height="300" alt="${item.alt}" loading="lazy">
        <div>
          <p>${item.shortDesc}<p>
          <h3>${item.name}</h3>
          <button class="showItemBtn dark-button" id="${item.id}">visa mer</button>
        </div>
      </div>
      `;
    } else{
      portfolioContainer.innerHTML+= `
      <div class="odd">
        <img src="public/${item.image}" width="500" height="300" alt="${item.alt}" loading="lazy">
        <div>
          <p>${item.shortDesc}<p>
          <h3>${item.name}</h3>
          <button class="showItemBtn dark-button" id="${item.id}">visa mer</button>
        </div>
      </div>
      `;
    }
  })
}