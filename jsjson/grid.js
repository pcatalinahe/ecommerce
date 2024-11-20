//select HTML element that will act as container for each grid element
const showProducts = document.querySelector(".products");

//fetch from json file
fetch("./data.json")
//call response object and parse data into JSON
  .then((response) => response.json())
  .then((json) => {
    //create variable to store json
    let ornament = json;
    //create a loop that states as long as array is less than 12, then create a new grid item "div"
    for (let i = 0; i < 12; i++) {
      const divs = document.createElement("div");
      // divs.style.height = "480px";
      //class for each div for better styling in css
      divs.classList.add("allItems");
      // const items = document.createElement("ornamentSection");
      console.log(ornament.products[i].title);
      //display data from Json on each div in the order specified with template literate
      divs.innerHTML = `<img src= ${ornament.products[i].image}> 
        <h4 class="title"> ${ornament.products[i].title} </h4>
        <p class="price"> ${ornament.products[i].price}</p>
        <p class="description"> ${ornament.products[i].description}</p>`;
      //adds new divs onto the parent container
      showProducts.appendChild(divs);
    }
  })
  .catch((error) => console.log(error));
