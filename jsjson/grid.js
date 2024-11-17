const showProducts = document.querySelector(".products");

//fetch from json file
fetch('./data.json')
  .then((response) => response.json())
  .then((json) => {
    let ornament = json;
    for (let i = 0; i < 12; i++) {
      const divs = document.createElement('div')
      divs.style.height = "500px";
      divs.classList.add('allItems');
      const items = document.createElement("ornamentSection");
      console.log(ornament.products[i].image)
      divs.innerHTML = `<img src= ${ornament.products[i].image}> 
        <h4 class="title"> ${ornament.products[i].title} </h4>
        <p class="price"> ${ornament.products[i].price}</p>
        <p class="description"> ${ornament.products[i].description}</p>`

    showProducts.appendChild(divs);
    }
    
    console.log(ornament.innerHTML);
  })
  .catch((error) => console.log(error));

