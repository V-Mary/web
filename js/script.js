
const searchButton = document.getElementById("search_button");
const sorthButton = document.getElementById("sort_button");

const itemsContainer = document.getElementById("items_container");


const itemTemplate = ({ id, name, power, price }) => `
<li id="${id}" class="item-card">
  <div>
    <h5>${name}</h5>
    <p>${power}</p>
    <p>Price: ${price}</p>
  </div>
</li>`;


let chainsaws = [
  { id: 1, name: 'as', power: 2, price: 1200},
  { id: 2, name: 'nh', power: 4, price: 1600},
  { id: 3, name: 'od', power: 5, price: 120},
];

const addItemToPage = ({ _id: id, name, power, price }) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, name, power, price })
  );  
};

const renderItemsList = (items, onEditItem, onRemoveItem) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    addItemToPage(item, onEditItem, onRemoveItem);
  }
};

